import styled, { css } from 'styled-components';

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

export const ExamsContainer = styled.div`
  background-color: #FFF;
  border-radius: 15px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.04);
  padding: 30px 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
`;

export const ExamColumnHeader = styled.span<{ color: string }>`
  font-family: 'Open Sans', sans-serif;
  font-size: 2rem;
  line-height: 2rem;
  color: #000;
  display: flex;
  align-items: center;
  margin-bottom: 30px;

  ${({ color }) => !!color && css`
    &::before {
      content: "";
      display: block;
      width: 35px;
      height: 15px;
      background-color: ${color};
      margin-right: 10px;
      border-radius: 50px;
    }
  `}
`;