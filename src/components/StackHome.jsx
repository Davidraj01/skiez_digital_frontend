import React from "react";
import ScrollStack, { ScrollStackItem } from "./ui/ScrollStack";
import styled from "styled-components";

/**
 * StackHome (fixed): wraps each card in a Clip container with overflow:hidden
 * - Keeps your ScrollStack behavior but prevents images from overflowing rounded bg
 * - Zigzag layout preserved
 */

const items = [
  {
    title: "Trusted Partner",
    text: "With over a decade of hands-on experience and a strong understanding of the Chennai market, Skiez Digital stands as a reliable long-term growth partner for businesses of all sizes.",
    bg: "linear-gradient(135deg,#0ea5a4 0%, #2dd4bf 100%)",
    image:
      "https://media.istockphoto.com/id/611786146/photo/confidence-in-business.jpg?s=612x612&w=0&k=20&c=RynrbY7F3convTuomv6O5WmgJj8qFFoZ7yjSmBdHm20=",
    alt: "Trusted partner",
  },
  {
    title: "Growth Catalyst",
    text: "With over a decade of hands-on experience and a strong understanding of the Chennai market, Skiez Digital stands as a reliable long-term growth partner for businesses of all sizes..",
    bg: "linear-gradient(135deg,#6366f1 0%, #8b5cf6 100%)",
    image:
      "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=800&q=60",
    alt: "Growth concept",
  },
  {
    title: "Result Driven",
    text: "Skiez Digital focuses on results beyond clicks and impressions, emphasizing measurable business growth and long-term brand success.",
    bg: "linear-gradient(135deg,#ff7a18 0%, #ff4e50 50%, #f9d423 100%)",
    image:
      "https://plus.unsplash.com/premium_photo-1681487912304-274bac203320?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVzaW5lc3MlMjBncm93dGh8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=600",
    alt: "Analytics dashboard",
  },
  {
    title: "Creative Precision",
    text: "Rooted in analytical precision and creative innovation, Skiez Digital ensures every campaign drives meaningful growth for Chennai-based and global clients alike.",
    bg: "linear-gradient(135deg,#a18cd1 0%, #fbc2eb 100%)",
    image:
      "https://plus.unsplash.com/premium_photo-1661412938808-a0f7be3c8cf1?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170",
    alt: "Creative workspace",
  },
  {
    title: "Data-Driven Decisions",
    text: "Every strategy we create is powered by analytics ensuring smarter marketing and better ROI.",
    bg: "linear-gradient(135deg,#43e97b 0%, #38f9d7 100%)",
    image:
      "https://media.istockphoto.com/id/1444150393/photo/3d-character-walking-on-the-road-leading-to-many-different-paths-with-open-doors-decisions.webp?a=1&b=1&s=612x612&w=0&k=20&c=5cYWbN-Y5v79az1vPcFSP7fr4T_u5o-gJSQx9Kht8pc=",
    alt: "Data charts",
  },
];

const StackHome = () => {
  return (
    <div>
      <Section>
        <h2 className="section-title">Why Choose Skiez Digital</h2>
      </Section>

      <main style={{ padding: 24 }}>
        <ScrollStack useWindowScroll>
          {items.map((it, idx) => {
            const isReversed = idx % 2 === 1; // zigzag: even -> image right, odd -> image left
            return (
              // keep ScrollStackItem as the outer wrapper for any internal behavior it has
              <ScrollStackItem key={idx}>
                {/* Clip is the rounded gradient container that clips overflow */}
                <Clip style={{ background: it.bg }}>
                  <CardInner reverse={isReversed}>
                    <ImageWrapper>
                      <img src={it.image} alt={it.alt} loading="lazy" width="600" height="338" />
                    </ImageWrapper>

                    <Content>
                      <h3 className="text-white">{it.title}</h3>
                      <p className="text-white/85">{it.text}</p>
                    </Content>
                  </CardInner>
                </Clip>
              </ScrollStackItem>
            );
          })}
        </ScrollStack>
      </main>
    </div>
  );
};

/* ---------------- Styled Components ---------------- */

const Section = styled.section`
  padding: 40px 20px 10px;
  text-align: center;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: #111827;
  }
`;

/* Clip: rounded gradient container that clips children */
const Clip = styled.div`
  border-radius: 18px;
  overflow: hidden; /* crucial: prevents image/shadow overflow */
  position: relative;
  padding: 28px; /* inner spacing so image & content don't touch edges */
  margin: 20px 0;
  box-shadow: 0 18px 40px rgba(2, 6, 23, 0.12);
`;

/* CardInner: aligns image + content; flips when reverse=true */
const CardInner = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  max-width: 1100px;
  margin: 0 auto;

  /* zigzag flip on wide screens */
  ${(p) => (p.reverse ? "flex-direction: row-reverse;" : "flex-direction: row;")}

  /* mobile: always stacked vertically */
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

/* Image and Content sizing */
const ImageWrapper = styled.div`
  flex: 0 0 45%;
  border-radius: 12px;
  overflow: hidden;

  /* Same responsive size for every image */
  width: 100%;
  aspect-ratio: 16 / 9; /* uniform ratio */
  max-height: 380px; /* cap so cards don’t get too tall */

  position: relative;
  display: block;

  img {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: cover; /* crop to fill the box */
    display: block;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);
  }

  @media (max-width: 768px) {
    aspect-ratio: 4 / 3; /* a bit taller on mobile (optional) */
    max-height: none;
  }
`;


const Content = styled.div`
  flex: 1 1 55%;
  min-width: 0; /* keep text from overflowing */
  color: white;

  h2 {
    margin: 0 0 12px 0;
    font-size: 1.375rem;
    font-weight: 700;
  }

  p {
    margin: 0;
    line-height: 1.6;
    color: rgba(255, 255, 255, 0.92);
  }

  @media (max-width: 768px) {
    width: 100%;
    text-align: center;
  }
`;

export default StackHome;
