import React, { useState } from 'react';
import moment from 'moment';
import Panel from './Panel';

const MyDatePicker = () => {
  const [value, setValue] = useState('');
  const [panelOpened, openPanel] = useState(false);

  const onClickInput = () => openPanel(true);

  const onChangeInput = (e) => (e.target.value instanceof Date ? setValue(value) : null);

  const getSelectedDay = (date) => {
    setValue(date);
    openPanel(false);
  };

  const parseValue = () => (value instanceof Date ? moment(value).format('DD-MM-YYYY') : '');

  return (
    <div className="my-calendar">
      <input {...{
        value: parseValue(),
        onChange: onChangeInput,
        onClick: onClickInput,
      }}/>

      {panelOpened ? (
        <Panel {...{
          getSelectedDay,
        }}/>
      ) : null}
    </div>
  );
};

export default MyDatePicker;
