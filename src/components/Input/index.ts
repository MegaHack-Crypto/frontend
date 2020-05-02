import styled, { css } from 'styled-components';
import { Input } from 'antd';

export default styled(Input)`
  && {
    border-radius: 2px;
    border: 1px solid #E2E7EF;
    outline: 0;

    &:focus {
      outline: 0px;
    }

    ${props => props.size === 'large' && css`
      height: 48px;
      max-height: 48px;
      padding-left: 16px;
      padding-right: 16px;
      font-size: 1.6rem;
      line-height: 2.2rem;
    `}

    .ant-input-prefix {
      margin-right: 20px;
    }

    .ant-input-prefix,
    &::placeholder {
      color: #B9C2D2;
    }
  }
`;