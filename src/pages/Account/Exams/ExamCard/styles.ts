import styled from 'styled-components';

export const Container = styled.article`
  background-color: #FFF;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 330px;
  cursor: move;

  & + & {
    margin-top: 20px;
  }
`;

export const Header = styled.header`
  padding: 20px;
`;

export const CircleIcon = styled.picture`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.8rem;
  background-color: #DAF7E8;
  color: #4AD991;
`;

export const ContentContainer = styled.section`
  padding: 10px 20px 20px 20px;
  flex: 1;

  p, h5 {
    font-family: 'Open Sans', sans-serif;
    color: #515151;
  }

  h5 {
    font-weight: 600;
    font-size: 1.5rem;
    line-height: 1.5rem;
  }

  p {
    font-size: 1.4rem;
    line-height: 1.4rem;
  }
`;

export const FooterContainer = styled.footer`
  padding: 20px;
  background-color: #EFF5F9;
  display: flex;

  section.left-container {
    display: flex;
    flex: 1;
  }

  section.right-container {}

  section {
    button {
      background-color: transparent;
      border: 0px;
      padding: 0px;
      display: flex;
      align-self: center;
      color: #2699FB;
      cursor: pointer;
    }

    button > svg + span {
      margin-left: 4px;
    }

    button + button {
      margin-left: 15px;
    }

    button span {
      font-size: 1.3rem;
      font-family: Arial, sans-serif;
      line-height: 1.3rem;
      font-weight: bold;
    }

    button svg {
      font-size: 1.5rem;
    }

    button svg.large {
      font-size: 1.8rem;
    }
  }
`;
