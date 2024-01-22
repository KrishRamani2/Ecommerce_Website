import React, { useState } from 'react';
import styled from 'styled-components';

const AnnouncementOverlay = styled.div`
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const AnnouncementCard = styled.div`
  background: #fff;
  padding: 30px;
  border-radius: 15px;
  text-align: center;
  max-width: 400px;
  width: 90%;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
  transform: scale(1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const AnnouncementTitle = styled.h1`
  font-size: 28px;
  margin-bottom: 15px;
  color: #333;
`;

const AnnouncementContent = styled.p`
  font-size: 18px;
  margin-bottom: 20px;
  color: #666;
`;

const CloseButton = styled.button`
  background: #ff7e5f;
  color: #fff;
  border: none;
  padding: 12px 25px;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease, color 0.3s ease, transform 0.2s ease;

  &:hover {
    background: #feb47b;
    transform: scale(1.1);
  }
`;

const AnnouncementsHomepage = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  return (
    <AnnouncementOverlay isVisible={isVisible}>
      <AnnouncementCard>
        <AnnouncementTitle>🎉 Exciting News!</AnnouncementTitle>
        <AnnouncementContent>Enjoy Free Shipping on Orders Above 250! 🚚</AnnouncementContent>
        <CloseButton onClick={handleClose}>Got It!</CloseButton>
      </AnnouncementCard>
    </AnnouncementOverlay>
  );
};

export default AnnouncementsHomepage;

