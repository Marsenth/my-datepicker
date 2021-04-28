import React from 'react';
import MyDatePicker from '.';
import MyDatePickerPanel from './Panel';
import '../../static/styles/my-datepicker-examples.sass';

function App() {
  return (
    <div className="my-datepicker-examples">
      <div>
        <h3>DatePicker</h3>
        <MyDatePicker/>
      </div>

      <div>
        <h3>Just DatePicker Panel</h3>
        <MyDatePickerPanel/>
      </div>
    </div>
  );
}

export default App;
