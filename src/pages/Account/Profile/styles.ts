import styled from 'styled-components';

import LEFT_BACKGROUND from '../../../assets/images/background-account-left.svg';
import ACCOUNT_CHARACTER from '../../../assets/images/account-character.svg';

export const Container = styled.section`
  width: 100%;
  min-height: 850px;
  padding: 100px 0px;
  background-image: url('${LEFT_BACKGROUND}');
  background-position: left bottom;
  background-repeat: no-repeat;
  background-size: 130px auto;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
`;

export const Welcome = styled.div`
  font-size: 5.5rem;
  font-weight: normal;
  font-family: 'Playfair Display', serif;
  line-height: 6rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #234878;
`;

export const QRCodeContainer = styled.div`
  margin-top: 50px;
  display: flex;
  flex-direction: column;

  & > span {
    font-size: 1.6rem;
    font-weight: 400;
    font-family: 'Open Sans', sans-serif;
    line-height: 1.4rem;
  }

  picture.qrcode {
    width: 300px;
    height: auto;
    margin-top: 50px;
    color: #000;

    &.flex {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;

export const RightCharacter = styled.img.attrs({
  src: ACCOUNT_CHARACTER,
  alt: 'account',
})`
  position: absolute;
  right: 350px;
  top: 35px;
  pointer-events: none;
  z-index: 2;
  width: 40%;
  height: auto;
`;

export const ShortcutContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 100px;
  z-index: 10;
  position: relative;

  button + button {
    margin-left: 20px;
  }
`;