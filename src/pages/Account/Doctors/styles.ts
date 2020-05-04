import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled.section`
  width: 100%;
  padding: 100px 0px;
`;

export const Content = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 1400px;
  position: relative;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 40px;

  h3 {
    font-size: 5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 5rem;
    color: #234878;
    padding: 0;
    margin: 0 20px 0 0;
  }

  svg {
    font-size: 4rem;
    color: #5600FF;
    cursor: pointer;
    margin-top: 10px;
  }
`;

export const Doctors = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  padding-bottom: 10px;

  button + button {
    margin-left: 20px;
  }
`;

export const AddDoctor = styled(Button).attrs({
  type: 'link',
})`
  && {
    background-color: #FFFFFF;
    border: 0px;
    background-image: url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' rx='23' ry='23' stroke='%231D27FF' stroke-width='2' stroke-dasharray='12%2c 12' stroke-dashoffset='0' stroke-linecap='round'/%3e%3c/svg%3e");
    border-radius: 23px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 200px;
    height: 200px;
    color: #B3B0B9;

    svg {
      font-size: 7.5rem;
      line-height: 7.5rem;
    }

    span {
      font-size: 2rem;
      line-height: 2rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: 800;
      margin-top: 15px;
    }
  }
`;

export const DoctorContainer = styled(Button).attrs({
  type: 'link',
})`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 3px 6px #00000029;
  background-color: #FFFFFF;
  border-radius: 23px;
  border: 1px solid #FFFFFF;
  cursor: pointer;
  width: 200px;
  height: 200px;
  padding: 15px;

  &:hover {
    background: #fbfbfb;
    border: 1px solid #f0f0f0;
  }
`;

export const DoctorProfile = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 15px;
  border-bottom: 1px solid #f4f4f4;
  margin-bottom: 15px;
  flex: 1;

  article {
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    justify-content: flex-start;

    span.name {
      font-family: 'Open Sans', sans-serif;
      color: #4D4F5C;
      font-size: 1.6rem;
      line-height: 1.6rem;
      font-weight: 600;
      text-align: left;
    }

    span.crm {
      font-family: 'Open Sans', sans-serif;
      color: #4D4F5C;
      font-size: 1.2rem;
      line-height: 1.2rem;
      margin-top: 5px;
      font-weight: 300;
      text-align: left;
    }
  }
`;

export const DoctorSpeciality = styled.p`
  font-size: 1.8rem;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;
  color: #5600FF;
  padding: 0;
`;
