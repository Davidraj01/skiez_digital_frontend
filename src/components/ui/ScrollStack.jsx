  import { useLayoutEffect, useRef, useCallback } from "react";
  import Lenis from "lenis";

  export const ScrollStackItem = ({ children, itemClassName = "", bg }) => {
    const style = {
      backfaceVisibility: "hidden",
      transformStyle: "preserve-3d",
      transform: "translateZ(0)",
      WebkitTransform: "translateZ(0)",
    };
    if (bg) style.background = bg;

    return (
      <div
        className={`scroll-stack-card relative w-full h-80 my-8 rounded-[24px]  box-border origin-top will-change-transform ${itemClassName}`.trim()}
        style={style}
      >
        {children}
      </div>
    );
  };

  const ScrollStack = ({
    children,
    className = "",
    itemDistance = 100,
    itemScale = 0.03,
    itemStackDistance = 30,
    stackPosition = "20%",
    scaleEndPosition = "10%",
    baseScale = 0.95,
    rotationAmount = 0,
    blurAmount = 0,
    useWindowScroll = false,
    onStackComplete,
  }) => {
    const scrollerRef = useRef(null);
    const cardsRef = useRef([]);
    const isUpdatingRef = useRef(false);
    const rafRef = useRef(null);
    const lenisRef = useRef(null);
    const lastTransformsRef = useRef(new Map());
    const positionsRef = useRef([]); // <-- cached static offsets

    const calculateProgress = useCallback((scrollTop, start, end) => {
      if (scrollTop < start) return 0;
      if (scrollTop > end) return 1;
      return (scrollTop - start) / (end - start);
    }, []);

    const parsePercentage = useCallback((value, containerHeight) => {
      if (typeof value === "string" && value.includes("%")) {
        return (parseFloat(value) / 100) * containerHeight;
      }
      return parseFloat(value) || 0;
    }, []);

    const getScrollData = useCallback(() => {
      if (typeof window === "undefined") {
         return { scrollTop: 0, containerHeight: 0, scrollContainer: null };
      }
      if (useWindowScroll) {
        return {
          scrollTop: window.scrollY || window.pageYOffset,
          containerHeight: window.innerHeight,
          scrollContainer: document.documentElement,
        };
      } else {
        const scroller = scrollerRef.current;
        return {
          scrollTop: scroller ? scroller.scrollTop : 0,
          containerHeight: scroller ? scroller.clientHeight : window.innerHeight,
          scrollContainer: scroller,
        };
      }
    }, [useWindowScroll]);

    // NOTE: kept as fallback — not used each frame once positionsRef is populated
    const getElementOffset = useCallback(
      (element) => {
        if (!element) return 0;
        if (useWindowScroll) {
          const r = element.getBoundingClientRect();
          return r.top + (window.scrollY || window.pageYOffset);
        } else {
          const scroller = scrollerRef.current;
          if (!scroller) return element.offsetTop || 0;
          const elRect = element.getBoundingClientRect();
          const scrollerRect = scroller.getBoundingClientRect();
          return Math.round(elRect.top - scrollerRect.top + scroller.scrollTop);
        }
      },
      [useWindowScroll]
    );

    // Apply transform only when changed
    const applyTransformIfChanged = (card, index, transform, filter) => {
      const last = lastTransformsRef.current.get(index);
      const t = transform;
      const f = filter || "";
      if (!last || last.t !== t || last.f !== f) {
        card.style.transform = t;
        card.style.filter = f;
        lastTransformsRef.current.set(index, { t, f });
      }
    };

    // Recalculate and cache static offsets for each card.
    // This **must** be called before we start animating / on resize / when children change.
    const recalcPositions = useCallback(() => {
      const cards = cardsRef.current || [];
      const scroller = scrollerRef.current;
      const next = [];

      if (useWindowScroll) {
        const pageYOffset = window.scrollY || window.pageYOffset;
        for (let i = 0; i < cards.length; i++) {
          const el = cards[i];
          if (!el) {
            next[i] = 0;
            continue;
          }
          // read bounding rect once (Transforms at this point are just translateZ(0), no translateY)
          const rect = el.getBoundingClientRect();
          next[i] = Math.round(rect.top + pageYOffset);
        }
      } else {
        if (!scroller) {
          // fallback: store offsetTop
          for (let i = 0; i < cards.length; i++) {
            const el = cards[i];
            next[i] = el ? Math.round(el.offsetTop || 0) : 0;
          }
        } else {
          const scrollerRect = scroller.getBoundingClientRect();
          for (let i = 0; i < cards.length; i++) {
            const el = cards[i];
            if (!el) {
              next[i] = 0;
              continue;
            }
            const elRect = el.getBoundingClientRect();
            // top relative to scroller scrollTop
            const relativeTop = Math.round(
              elRect.top - scrollerRect.top + scroller.scrollTop
            );
            next[i] = relativeTop;
          }
        }
      }

      positionsRef.current = next;
    }, [useWindowScroll]);

    const updateCardTransforms = useCallback(() => {
      const cards = cardsRef.current;
      if (!cards.length || isUpdatingRef.current) return;
      isUpdatingRef.current = true;

      const { scrollTop, containerHeight } = getScrollData();
      const stackPositionPx = parsePercentage(stackPosition, containerHeight);
      const scaleEndPositionPx = parsePercentage(
        scaleEndPosition,
        containerHeight
      );

      const endElement = useWindowScroll
        ? document.querySelector(".scroll-stack-end")
        : scrollerRef.current?.querySelector(".scroll-stack-end");

      const endElementTop = endElement
        ? positionsRef.current?.[cards.length] ?? getElementOffset(endElement)
        : useWindowScroll
        ? 0
        : scrollerRef.current
        ? scrollerRef.current.scrollHeight
        : 0;

      for (let i = 0; i < cards.length; i++) {
        const card = cards[i];
        if (!card) continue;

        // Use cached static offsets when available — avoids reading layout affected by transforms.
        const rawCardTop = positionsRef.current?.[i];
        const cardTop =
          typeof rawCardTop === "number" ? rawCardTop : getElementOffset(card);

        const triggerStart = cardTop - stackPositionPx - itemStackDistance * i;
        const triggerEnd = cardTop - scaleEndPositionPx;
        const pinStart = triggerStart;
        const pinEnd = endElementTop - containerHeight / 2;

        const scaleProgress = calculateProgress(
          scrollTop,
          triggerStart,
          triggerEnd
        );
        const targetScale = baseScale + i * itemScale;
        const scale = 1 - scaleProgress * (1 - targetScale);
        const rotation = rotationAmount ? i * rotationAmount * scaleProgress : 0;

        let blur = 0;
        if (blurAmount) {
          let topIndex = 0;
          for (let j = 0; j < cards.length; j++) {
            const jTop = positionsRef.current?.[j] ?? getElementOffset(cards[j]);
            const jTriggerStart = jTop - stackPositionPx - itemStackDistance * j;
            if (scrollTop >= jTriggerStart) topIndex = j;
          }
          if (i < topIndex) blur = Math.max(0, (topIndex - i) * blurAmount);
        }

        let translateY = 0;
        const isPinned = scrollTop >= pinStart && scrollTop <= pinEnd;
        if (isPinned) {
          translateY =
            scrollTop - cardTop + stackPositionPx + itemStackDistance * i;
        } else if (scrollTop > pinEnd) {
          translateY = pinEnd - cardTop + stackPositionPx + itemStackDistance * i;
        }

        const tY = Math.round(translateY * 100) / 100;
        const s = Math.round(scale * 1000) / 1000;
        const r = Math.round(rotation * 100) / 100;
        const bf = blur > 0 ? `blur(${Math.round(blur * 100) / 100}px)` : "";

        const transform = `translate3d(0, ${tY}px, 0) scale(${s}) rotate(${r}deg)`;
        applyTransformIfChanged(card, i, transform, bf);

        // last card completion callback (safe check)
        if (i === cards.length - 1) {
          const isInView = scrollTop >= pinStart && scrollTop <= pinEnd;
          if (isInView && !isUpdatingRef.current && !card._stackCompleted) {
            card._stackCompleted = true;
            onStackComplete?.();
          } else if (!isInView && card._stackCompleted) {
            card._stackCompleted = false;
          }
        }
      }

      isUpdatingRef.current = false;
    }, [
      getScrollData,
      parsePercentage,
      getElementOffset,
      calculateProgress,
      baseScale,
      itemScale,
      itemStackDistance,
      stackPosition,
      scaleEndPosition,
      rotationAmount,
      blurAmount,
      useWindowScroll,
      onStackComplete,
    ]);

    // Robust Lenis init with fallbacks
    const setupScrolling = useCallback(() => {
      if (typeof window === "undefined") return;

      if (lenisRef.current) {
        try {
          lenisRef.current.destroy();
        } catch (err) {
          console.error(err);
          
        }
        lenisRef.current = null;
      }
      if (rafRef.current) cancelAnimationFrame(rafRef.current);

      try {
        if (useWindowScroll) {
          const lenis = new Lenis({
            duration: 1.2,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            smoothWheel: true,
            touchMultiplier: 2,
            wheelMultiplier: 1,
            lerp: 0.08,
          });
          lenis.on("scroll", updateCardTransforms);
          const loop = (time) => {
            lenis.raf(time);
            rafRef.current = requestAnimationFrame(loop);
          };
          rafRef.current = requestAnimationFrame(loop);
          lenisRef.current = lenis;
          return;
        }

        const scroller = scrollerRef.current;
        if (!scroller) {
          window.addEventListener("scroll", updateCardTransforms, {
            passive: true,
          });
          const loop = () => {
            updateCardTransforms();
            rafRef.current = requestAnimationFrame(loop);
          };
          rafRef.current = requestAnimationFrame(loop);
          return;
        }

        const content = scroller.querySelector(".scroll-stack-inner");
        const lenis = new Lenis({
          wrapper: scroller,
          content: content || undefined,
          duration: 1.2,
          easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
          smoothWheel: true,
          touchMultiplier: 2,
          wheelMultiplier: 1,
          lerp: 0.08,
        });
        lenis.on("scroll", updateCardTransforms);
        const loop = (time) => {
          lenis.raf(time);
          rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
        lenisRef.current = lenis;
      } catch {
        window.addEventListener("scroll", updateCardTransforms, {
          passive: true,
        });
        const loop = () => {
          updateCardTransforms();
          rafRef.current = requestAnimationFrame(loop);
        };
        rafRef.current = requestAnimationFrame(loop);
      }
    }, [updateCardTransforms, useWindowScroll]);

    useLayoutEffect(() => {
      const scroller = scrollerRef.current;
      const cards = Array.from(
        useWindowScroll
          ? document.querySelectorAll(".scroll-stack-card")
          : scroller
          ? scroller.querySelectorAll(".scroll-stack-card")
          : []
      );
      cardsRef.current = cards;

      if (!useWindowScroll && !scroller) {
        console.warn(
          "ScrollStack: container scroller not found. Make parent scrollable or use useWindowScroll."
        );
        return;
      }

      // setup initial visual styles
      cards.forEach((card, i) => {
        if (i < cards.length - 1) card.style.marginBottom = `${itemDistance}px`;
        card.style.transition =
          "transform 280ms cubic-bezier(.2,.9,.2,1), filter 220ms linear";
        card.style.willChange = "transform, filter";
        card.style.transformOrigin = "top center";
        card.style.backfaceVisibility = "hidden";
        card.style.transform = "translateZ(0)"; // no translateY here yet
      });

      // compute and cache positions BEFORE any translateY transforms are applied
      recalcPositions();

      // recalc on resize (debounced-ish using rAF)
      let resizeRAF = 0;
      const onResize = () => {
        if (resizeRAF) cancelAnimationFrame(resizeRAF);
        resizeRAF = requestAnimationFrame(() => {
          recalcPositions();
          updateCardTransforms();
        });
      };
      window.addEventListener("resize", onResize, { passive: true });

      setupScrolling();
      // ensure initial transform run
      updateCardTransforms();

      return () => {
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
        if (lenisRef.current) {
          try {
            lenisRef.current.destroy();
          } catch (err) {
            console.error(err);
            
          }
          lenisRef.current = null;
        }
        window.removeEventListener("scroll", updateCardTransforms);
        window.removeEventListener("resize", onResize);
        cardsRef.current = [];
        lastTransformsRef.current.clear();
        positionsRef.current = [];
      };
    }, [
      itemDistance,
      itemScale,
      itemStackDistance,
      stackPosition,
      scaleEndPosition,
      baseScale,
      rotationAmount,
      blurAmount,
      useWindowScroll,
      setupScrolling,
      updateCardTransforms,
      recalcPositions,
    ]);

    const containerStyles = useWindowScroll
      ? {
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
        }
      : {
          overscrollBehavior: "contain",
          WebkitOverflowScrolling: "touch",
          scrollBehavior: "smooth",
          overflowY: "auto",
          overflowX: "visible",
        };

    const containerClassName = useWindowScroll
      ? `relative w-full ${className}`.trim()
      : `relative w-full h-full ${className}`.trim();

    return (
      <div
        ref={scrollerRef}
        className={containerClassName}
        style={containerStyles}
      >
        <div className="scroll-stack-inner pt-[20vh] px-20 pb-[100vh] min-h-screen">
          {children}
          <div className="scroll-stack-end w-full h-px" />
        </div>
      </div>
    );
  };

  export default ScrollStack;
