import styled, { keyframes } from "styled-components";

const travelAnimation = keyframes`
  0% {
    transform: translateX(-100%);
    opacity: 1;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: translateX(100%);
    opacity: 1;
  }
`;
const Background = styled.div`
background-color: teal;
`
const Container = styled.div`
  height: 30px;
  display: flex;
  color:white;
  align-items: center;
  font-size: 14px;
  font-weight: 600;
  justify-content: center;
  white-space: nowrap; /* Prevent text from wrapping */
  overflow: hidden;
  animation: ${travelAnimation} 17s linear infinite; /* Adjust the duration and timing function as needed */
`;

const Announcements = () => {
  return (
    <Background>
    <Container>
      Super Deal!! Free Shipping on Orders Above 250
    </Container>
    </Background>
  );
};

export default Announcements;
