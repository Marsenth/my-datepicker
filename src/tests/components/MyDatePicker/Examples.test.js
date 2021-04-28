import React from 'react';
import { shallow } from 'enzyme';
import MyDatePickerExamples from '../../../components/MyDatePicker/Examples';

describe('Test MyDatePickerExamples component', () => {
  it('Test MyDatePickerExamples component rendering', () => {
    shallow(<MyDatePickerExamples/>);
  });
});
