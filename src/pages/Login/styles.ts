import styled from 'styled-components';
import { Modal } from 'antd';

export const Container = styled(Modal)`
  && {
    width: 90%;
    max-width: 1200px;

    .ant-modal-content {
      border-radius: 30px;
      padding: 15px 60px;
    }

    .ant-modal-close .ant-modal-close-icon {
      /* display: none;  */
      color: #234878;
      font-size: 2rem;
    }
  }
`;

export const Header = styled.header`
  h2 {
    font-size: 7.7rem;
    font-weight: 400;
    font-family: 'Playfair Display', serif;
    line-height: 7.7rem;
    margin: 0px 0px 5px 0px;
    padding: 0px;
  }

  span {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.6rem;
  }

  h2, span {
    color: #234878;
  }
`;

export const Form = styled.form`
  && {
    margin-top: 40px;
    width: 100%;
    max-width: 400px;

    .ant-input-affix-wrapper + .ant-input-affix-wrapper {
      margin-top: 10px;
    }

    input::placeholder {
      text-transform: uppercase;
    }

    .buttons {
      margin-top: 30px;
      display: flex;
      align-items: center;

      button + button {
        margin-left: 10px;
      }

      button.signin {
        height: 45px;
        width: 136px;
        background-color: #2D69F6;
        font-size: 1.6rem;
        font-weight: 400;
        line-height: 1.6rem;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 100px;
        color: #FFFFFF;
      }
    }
  }
`;

export const Content = styled.main`
  display: flex;
`;

export const LeftSide = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  img.logo {
    margin-bottom: 50px;
  }
`;

export const RightSide = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 400px;
  justify-content: space-between;
  align-items: flex-end;
  flex: 1;

  span, small {
    pointer-events: none;
  }

  a {
    color: #2D69F6;
    text-decoration: none;
    font-size: 1.5rem;
    line-height: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    font-weight: 400;
  }
`;  