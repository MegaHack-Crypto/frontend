import styled from 'styled-components';

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

  h4 {
    font-size: 3.5rem;
    font-family: 'Playfair Display', serif;
    font-weight: 400;
    line-height: 3.5rem;
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

export const AgendaContainer = styled.section`
  display: flex;
`;

export const CalendarCard = styled.div`
  width: 100%;
  max-width: 45%;
  border: 1px solid #f0f0f0;
  border-radius: 3px;
  overflow: hidden;
  padding: 15px;

  .MuiIconButton-label p,
  .MuiPickersCalendarHeader-dayLabel,
  .MuiPickersCalendarHeader-transitionContainer > p {
    font-size: 1.5rem;
    line-height: 1.5rem;
    font-family: 'Open Sans', sans-serif;
  }

  .MuiPickersCalendarHeader-iconButton svg {
    font-size: 2rem;
  }

  .MuiIconButton-label p,
  .MuiPickersCalendarHeader-transitionContainer > p {
    color: #43425D;
  }

  .MuiPickersCalendarHeader-transitionContainer > p {
    font-weight: 600;
  }

  .MuiPickersCalendarHeader-dayLabel {
    color: #A3A6B4;
  }

  .MuiPickersDay-daySelected {
    background-color: rgba(237, 79, 103, 0.20);
  }

  .MuiPickersDay-daySelected .MuiIconButton-label p {
    color: #ED4F67;
  }

  .MuiPickersCalendarHeader-daysHeader,
  .MuiPickersCalendar-week {
    justify-content: space-around;
  }

  .MuiPickersCalendarHeader-daysHeader {
    border-bottom: 1px solid #E9E9F0;
    padding-bottom: 15px;
  }
`;

export const NextCommitmentsContainer = styled.div`
  flex: 1;
  margin-left: 50px;
  display: flex;
  flex-direction: column;
`;
