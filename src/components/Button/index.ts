import styled, { css } from 'styled-components';
import { Button } from 'antd';

export default styled(Button)`
  && {
    outline: 0;
    border: 0px;

    ${props => props.type === 'primary' && css`
      background-color: #2D69F6;
      color: #FFFFFF;
    `}

    ${props => props.size === 'large' && css`
      height: 45px;
      padding-left: 45px;
      padding-right: 45px;
    `}
  }
`;
