import React from 'react';
import { shallow } from 'enzyme';
import MyDatePickerPanel from '../../../components/MyDatePicker/Panel';

describe('Test MyDatePickerPanel component', () => {
  it('Test MyDatePickerPanel component rendering', () => {
    shallow(<MyDatePickerPanel/>);
  });
});
