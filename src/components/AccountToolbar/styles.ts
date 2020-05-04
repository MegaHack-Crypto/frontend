import styled from 'styled-components';
import { MdNotifications } from 'react-icons/md';

export const Container = styled.header`
  box-shadow: 0px 3px 6px #00000029;
  height: 80px;
  padding: 10px 0px;
  background-color: #FFFFFF;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 100%;

  img.logo {
    height: 50px;
    width: auto;
    margin-right: 140px;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;

  .ant-avatar {
    margin-right: 15px;
  }

  span.name {
    font-size: 2rem;
    line-height: 2rem;
    font-weight: 900;
    color: #234878;
    font-family: 'Open Sans', sans-serif;
  }

  button.logout {
    background-color: transparent;
    border: 0px;
    color: red;
    font-weight: 400;
    font-size: 1.6rem;
    margin-left: 15px;
    cursor: pointer;
  }
`;

export const NotificationsContainer = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  span.count {
    position: absolute;
    top: 0;
    right: 0;
    width: 21px;
    height: 21px;
    font-size: 1.1rem;
    line-height: 1.1rem;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    color: #FFFFFF;
    background-color: #FFC06A;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    pointer-events: none;
  } 
`;

export const NotificationsIcon = styled(MdNotifications).attrs({
  size: 50,
})`
  color: #5600FF;
  cursor: pointer;
`