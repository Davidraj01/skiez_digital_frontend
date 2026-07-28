import React from "react";
import styled from "styled-components";

const bullets = [
  "Every campaign at Skiez Digital is built on insight, innovation and integrity, reflecting a commitment to measurable digital success.",
  "The team combines creativity with data analytics to help brands outperform their competitors through customized, result-driven strategies.",
  "Each marketing plan is tailored to suit Chennai’s evolving digital ecosystem, ensuring relevance and local market effectiveness.",
  "As a trusted digital marketing company in Chennai, Skiez Digital provides holistic marketing solutions that integrate SEO, social media and content for maximum performance.",
  "Their goal is to drive consistent performance, enhance conversions and deliver long-term, sustainable business growth.",
];

export default function MissionSection() {
  return (
    <Wrapper>
      <Container>
        <Title>Our Mission</Title>
        <Intro>
          At <span>Skiez Digital</span>, we craft measurable, creative and
          locally-relevant digital strategies designed to grow brands in Chennai
          and beyond.
        </Intro>

        <List>
          {bullets.map((b, i) => (
            <ListItem key={i}>
              <Icon>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 13l4 4L19 7"
                    stroke="#0d9488"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </Icon>
              <Text>{b}</Text>
            </ListItem>
          ))}
        </List>
      </Container>
    </Wrapper>
  );
}

/* -------------------------
   Styled Components
   ------------------------- */

const Wrapper = styled.section`
  background: #ffffff;
  padding: 40px 20px 80px;
  margin-top: -280px;
`;

const Container = styled.div`
  max-width: 1050px;
  margin: 0 auto;
`;

const Title = styled.h2`
  font-family: "Poppins", sans-serif;
  font-size: 40px;
  font-weight: 800;
  color: #0f172a;
  margin-bottom: 16px;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 32px;
  }
`;

const Intro = styled.p`
  font-family: "Inter", sans-serif;
  color: #475569;
  font-size: 18px;
  line-height: 1.7;
  max-width: 800px;
  margin-bottom: 36px;

  span {
    color: #0d9488;
    font-weight: 600;
  }
`;

const List = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  align-items: flex-start;
  gap: 16px;
  margin-bottom: 22px;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(13, 148, 136, 0.06);
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid rgba(13, 148, 136, 0.15);
  flex-shrink: 0;
`;

const Text = styled.p`
  font-family: "Inter", sans-serif;
  color: #334155;
  font-size: 17px;
  line-height: 1.8;
  font-weight: 400;
  margin: 0;
`;
