import React, { useState } from 'react';
import CalendarController from './controller';
import '../../static/styles/my-datepicker-panel.sass';

const MyCalendarPanel = ({ getSelectedDay = () => null, renderDay = (Day, dDate) => <Day key={`${dDate}`}/> }) => {
  const [calendarController, setCalendarController] = useState(new CalendarController());
  const data = calendarController.getData();

  const goToPrevMonth = () => {
    const newCalendarController = new CalendarController({
      initialDate: calendarController.getPrevMonth(),
    });
    setCalendarController(newCalendarController);
  };

  const goToNextMonth = () => {
    const newCalendarController = new CalendarController({
      initialDate: calendarController.getNextMonth(),
    });
    setCalendarController(newCalendarController);
  };

  return (
    <div className="my-datepicker-panel">
      <div className="my-datepicker-panel-header">
        <button className="my-datepicker-panel-go-prev" onClick={goToPrevMonth}>
          {'<'}
        </button>

        <h5>
          {calendarController.getMomentDate().format()}
        </h5>

        <button className="my-datepicker-panel-go-next" onClick={goToNextMonth}>
          {'>'}
        </button>
      </div>

      <div className="my-datepicker-panel-body">
        <div className="my-datepicker-panel-row">
          {calendarController.getWeekDays().map((weekDay, i) => (
            <div className="my-datepicker-panel-week-day" key={i}>
              <h6>{weekDay}</h6>
            </div>
          ))}
        </div>

        {data.map((row, i) => (
          <div className="my-datepicker-panel-row" key={i}>
            {row.map((date) => {
              const Day = ({ className }) => (
                <div
                  className={`my-datepicker-panel-day${className ? ` ${className}` : ''}`}
                  onClick={() => getSelectedDay(date)}
                >
                  <h6>{date.getDate()}</h6>
                </div>
              );

              return renderDay(Day, date);
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyCalendarPanel;
