import styled from 'styled-components';

export const Container = styled.div`
  margin-top: 120px;

  h1 {
    font-size: 5.5rem;
    line-height: 8.5rem;
    font-family: 'Playfair Display', sans-serif;
    font-weight: 900;
    color: #234878;
  }

  p {
    font-size: 1.6rem;
    font-family: 'Open Sans', sans-serif;
    line-height: 2.2rem;
    font-weight: normal;
    margin-top: 25px;
    width: 100%;
    max-width: 430px;
    text-align: left;
    color: #234878;
  }
`;

export const Buttons = styled.section`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 430px;
  align-items: flex-end;

  button.signin {
    font-size: 2.2rem;
    font-weight: normal;
    font-family: 'Open Sans', sans-serif;
    line-height: 3rem;
    color: #FFF;
    background-color: #2D69F6;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    border: 0px;
    border-radius: 200px;
    width: 136px;
    height: 45px;
  }

  section.covid-button {
    display: flex;
    flex-direction: column;
    align-items: center;

    small {
      font-size: 1.3rem;
      font-family: 'Open Sans', sans-serif;
      font-weight: normal;
      line-height: 2.2rem;
    }

    button.covid {
      font-size: 2.2rem;
      font-weight: normal;
      font-family: 'Open Sans', sans-serif;
      line-height: 3rem;
      color: #FFF;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      border: 0px;
      border-radius: 200px;
      background-color: #F37576;
      width: 136px;
      height: 45px;
    }
  }
`;
