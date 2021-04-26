import React from 'react';
import MyDatePicker from '../components/MyDatePicker';
import MyDatePickerPanel from '../components/MyDatePicker/Panel';
import '../static/styles/app.sass';

function App() {
  return (
    <div className="app">
      <h3>DatePicker</h3>
      <MyDatePicker/>

      <h3>Just DatePicker Panel</h3>
      <MyDatePickerPanel/>
    </div>
  );
}

export default App;
