import styled, { css } from 'styled-components';
import { MdToday, MdAddCircle } from 'react-icons/md';

export const Container = styled.article<{ commitmentType?: string; }>`
  ${props => props.commitmentType === 'default' && css`
    border-left: 20px solid #FFD86F;
  `}

  ${props => props.commitmentType === 'new' && css`
    cursor: pointer;
    border-left: 20px solid rgba(0,0,0,0.06);
  `}

  padding: 20px;
  box-shadow: 6px 6px 0px rgba(0,0,0,0.06);
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 320px;

  & + & {
    margin-top: 26px;
  }
`;

export const ReminderText = styled.p`
  font-size: 1.4rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 400;
  line-height: 1.4rem;
  color: #000000;
  flex: 1;
  margin: 0px;
  padding: 0px;
`;

export const DateContainer = styled.div`
  display: flex;
  padding: 6px 8px;
  background-color: rgba(0,0,0,0.05);
  font-size: 1.2rem;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  line-height: 1.2rem;
  border-radius: 3px;
  color: #000;
  margin-top: 20px;
  position: relative;
  display: flex;
  align-self: flex-start;
  align-items: center;
`;

export const CalendarIcon = styled(MdToday)`
  margin-right: 5px;
  font-size: 1.6rem;
`;

export const NewContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgba(0,0,0,0.05);
`;

export const AddIcon = styled(MdAddCircle)`
  font-size: 7.5rem;
`;