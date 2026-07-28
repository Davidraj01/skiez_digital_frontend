import React from "react";
import styled from "styled-components";

/* -------------------------
   Data
   ------------------------- */
const gradients = [
  "linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)",
  "linear-gradient(744deg, #ff7eb3, #ff758c 60%, #ffb199)",
  "linear-gradient(744deg, #4facfe, #00f2fe 60%, #43e97b)",
  "linear-gradient(744deg, #ff9a9e, #fad0c4 60%, #fad0c4)",
  "linear-gradient(744deg, #a18cd1, #fbc2eb 60%, #fad0c4)",
  "linear-gradient(744deg, #89f7fe, #66a6ff 60%, #005bea)",
  "linear-gradient(744deg, #f6d365, #fda085 60%, #ff9a44)",
  "linear-gradient(744deg, #84fab0, #8fd3f4 60%, #43cea2)",
  "linear-gradient(744deg, #c471ed, #f64f59 60%, #12c2e9)",
  "linear-gradient(744deg, #f093fb, #f5576c 60%, #4facfe)",
];

const cardInfo = [
  {
    title: "UI / UX Design",
    name: "Designing intuitive, engaging, and seamless user experiences and interfaces.",
  },
  {
    title: "Web Development",
    name: "Web development builds fast, secure, and responsive websites combining creative design, coding, and seamless user experience.",
  },
  {
    title: "Mobile App Development",
    name: "Mobile development creates high-performing, user-friendly apps with intuitive design, smooth navigation, and cross-platform compatibility.",
  },
  {
    title: "Full Stack Development",
    name: "Full-stack development builds complete web solutions managing both front-end interfaces and back-end servers for seamless performance.",
  },
  {
    title: "SEO",
    name: "SEO enhances website visibility on search engines through optimized content, keywords, performance, and user experience",
  },
  {
    title: "Content Marketing",
    name: "Content marketing builds trust and engagement through valuable, consistent, and audience-focused digital storytelling.",
  },
  {
    title: "E-mail Marketing",
    name: "Email marketing builds relationships through personalized messages that engage, nurture trust, and drive conversions",
  },
  {
    title: "Social Media Marketing",
    name: "Social media marketing boosts brand visibility and engagement through creative content, ads, and authentic audience interaction.",
  },
  {
    title: "Meta ads",
    name: "Meta Ads drive targeted engagement and sales through personalized campaigns across Facebook, Instagram, and other Meta platforms",
  },
  {
    title: "Google Campaign",
    name: "Google Campaigns promote brands through targeted ads across Search, YouTube, and Display Networks to drive results.",
  },
];

/* -------------------------
   Component
   ------------------------- */
const CardContainer = () => {
  return (
    <Section>
      <h2 className="section-title">Our Services</h2>

      <MarqueeContainer>
        <MarqueeTrack>
          {/* Original row */}
          <CardRow>
            {cardInfo.map((item, i) => (
              <Card key={`c-${i}`} gradient={gradients[i % gradients.length]}>
                <div className="e-card">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />

                  <div className="cardInner">
                    {/* FRONT: title */}
                    <div className="cardFace front">
                      <div className="infotop">{item.title}</div>
                    </div>

                    {/* BACK: name */}
                    <div className="cardFace back">
                      <div className="backOnlyName">{item.name}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardRow>

          {/* Duplicate row for smooth looping */}
          <CardRow aria-hidden="true">
            {cardInfo.map((item, i) => (
              <Card key={`dup-${i}`} gradient={gradients[i % gradients.length]}>
                <div className="e-card">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />

                  <div className="cardInner">
                    <div className="cardFace front">
                      <div className="infotop">{item.title}</div>
                    </div>
                    <div className="cardFace back">
                      <div className="backOnlyName">{item.name}</div>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </CardRow>
        </MarqueeTrack>
      </MarqueeContainer>
    </Section>
  );
};

/* -------------------------
   Styles
   ------------------------- */

const Section = styled.section`
  padding: 40px 20px 80px;
  text-align: center;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-top: -20px;
    margin-bottom: -20px;
    color: #111827;
  }
`;

const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 40px 0;
`;


const MarqueeTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  animation: scroll 30s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%);
    }
  }
`;

const CardRow = styled.div`
  display: flex;
  gap: 40px;
  padding: 12px 32px;
  flex: 0 0 auto;
`;

const Card = styled.div`
  width: 260px;
  flex: 0 0 auto;

  .e-card {
    background: transparent;
    box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.08);
    position: relative;
    width: 100%;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: ${({ gradient }) => gradient};
    border-radius: 40%;
    animation: wave 55s infinite linear;
    z-index: 0;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  /* --- Flip Animation --- */
  .cardInner {
    position: absolute;
    inset: 0;
    transform-style: preserve-3d;
    transition: transform 0.6s ease;
  }

  &:hover .cardInner {
    transform: rotateY(180deg);
  }

  .cardFace {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    backface-visibility: hidden;
    color: white;
    font-weight: 700;
    font-size: 20px;
  }

  .cardFace.back {
    transform: rotateY(180deg);
  }

  .infotop {
    z-index: 2;
  }

  .backOnlyName {
    z-index: 2;
  }

  @media (max-width: 900px) {
    width: 220px;
    .e-card {
      height: 320px;
    }
  }
  @media (max-width: 600px) {
    width: 180px;
    .e-card {
      height: 270px;
    }
  }
`;

export default CardContainer;
