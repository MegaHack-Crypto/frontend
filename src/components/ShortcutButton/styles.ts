import styled from 'styled-components';
import { Button } from 'antd';

export const Container = styled(Button).attrs({
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

  &:hover {
    background: #fbfbfb;
    border: 1px solid #f0f0f0;
  }
`;

export const IconContainer = styled.picture`
  svg, img {
    width: 100%;
    max-width: 80px;
    height: auto; 
  }
`;

export const Title = styled.span`
  font-size: 2rem;
  font-family: 'Open Sans', sans-serif;
  line-height: 3.3rem;
  color: #5600FF;
  margin-top: 20px;
`;