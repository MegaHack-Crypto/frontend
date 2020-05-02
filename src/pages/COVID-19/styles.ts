import styled from 'styled-components';

import CHARACTER_IMAGE from '../../assets/images/character-covid19.svg';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;

`;

export const LeftSide = styled.section`
  height: 100%;
  width: 470px;
  background-color: #ED4F67;
  padding: 150px 50px 0px 110px;
  position: relative;
  z-index: 8;

  ol {
    list-style-type: none;
    margin: 150px 0px 0px 0px;
  } 

  p, li {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.6rem;
    line-height: 2.2rem;
    color: #FFFFFF;
    font-weight: lighter;
  }

  ol > li:first-child {
    font-size: 2.5rem;
    line-height: 3.4rem;
  }

  ol > li:not(:last-child) {
    margin-bottom: 30px;
  }
`;

export const RightSide = styled.section`
  flex: 1;
  height: 100%;
  position: relative;
  background-color: #FDFDFD;
  z-index: 9;

  &::before {
    position: absolute;
    width: 30px;
    height: 30px;
    top: calc(43% - 15px);
    left: -15px;
    content: "";
    background-color: #FDFDFD;
    border: solid #FDFDFD;
    border-width: 3px 0 0 3px;
    transform: rotate(-45deg);
  }

  article.how-protect-covid {
    align-self: center;
    width: 100%;
    max-width: 400px;
    margin: 150px auto 0px;
    right: -60px;
    position: relative;

    h1 {
      font-size: 5rem;
      font-family: 'Playfair Display', serif;
      font-weight: 400;
      line-height: 8.5rem;
      color: #234878;
      margin-bottom: 60px;
    }

    ul {
      li {
        display: flex;
        justify-content: space-between;
        align-items: center;

        &:not(:last-child) {
          margin-bottom: 20px;
        }
        
        p {
          font-family: 'Montserrat', sans-serif;
          font-weight: 300;
          color: #949494;
          font-size: 1.2rem;

          strong {
            font-weight: 600;
            color: #5A74DB;
          }
        }

        img {
          width: 50px;
          height: 50px;
        }
      }

      li:nth-child(odd) {
        img {
          margin-right: 10px;
        }
      }

      li:nth-child(even) {
        flex-direction: row-reverse;
        
        p {
          text-align: right;
        }
        
        img {
          margin-left: 10px;
        }
      }
    }
  }
`;

export const Character = styled.img.attrs({
  src: CHARACTER_IMAGE,
})`
  position: absolute;
  bottom: 0px;
  left: -14%;
  height: auto;
  width: 43%;
  z-index: 10;
`;

export const Header = styled.header`
  padding: 30px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-self: flex-start;

  button {
    background-color: transparent;
    border: 0px;
    padding: 0px;
    font-size: 3.2rem;
    color: #000000;
    cursor: pointer;
  }

  picture.logo {
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    span {
      font-family: 'Open Sans', sans-serif;
      font-size: 1.8rem;
      font-weight: 600;
      line-height: 1.8rem;
      color: #ED4F67;
      top: -10px;
      position: relative;
    }
  }
`;