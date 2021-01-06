import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ErrorImageContainer = styled.div`
  display: flex;
  align-items: flex-end;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 50vh;
  height: 40vh;
`;

export const ErrorImageText = styled.h2`
  font-size: 23px;
  color: #2f8e89;
  position: relative;
  top: 80px;
`;
