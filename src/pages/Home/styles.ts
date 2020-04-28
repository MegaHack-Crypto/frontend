import styled from 'styled-components';

export const Container = styled.main`
  height: 100%;
  width: 100%;
  background-color: #FDFDFD;
  position: relative;
`;

export const LeftBackground = styled.div<{ url: string }>`
  position: absolute;
  left: 0px;
  bottom: 0px;
  width: 17%;
  height:55%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('${props => props.url}');
  background-position-y: 100%;
  z-index: 0;
`;

export const RightBackground = styled.div<{ url: string }>`
  position: absolute;
  right: 0px;
  top: 0px;
  width: 60%;
  height: 100%;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('${props => props.url}');
  background-position-x: 100%;
  z-index: 0;
`;

export const Character = styled.img`
  position: absolute;
  right: 24%;
  top: 16%;
  width: auto;
  height: 75%;
`;

export const Content = styled.article`
  margin-left: 8%;
  padding: 25px 0px;
  background-color: transparent;
  position: relative;
  z-index: 10;

  img.logo {
    width: 100%;
    max-width: 350px;
    height: auto;
    margin-bottom: 50px;
  }
`;