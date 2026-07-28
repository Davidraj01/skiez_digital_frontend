import styled from "styled-components";

const GlowButton = styled.button`
  background: #00c7b7;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 8px;
  padding: 12px 28px;
  cursor: pointer;
  box-shadow: 0 0 20px rgba(0, 199, 183, 0.6);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 0 35px rgba(0, 199, 183, 0.9), 0 0 65px rgba(0, 199, 183, 0.6);
    transform: translateY(-2px);
  }
`;

export default GlowButton;

