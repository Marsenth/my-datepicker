/* eslint-disable no-underscore-dangle */
import React from 'react';
import { shallow, mount } from 'enzyme';
import MyDatePickerPanel from '../../../components/MyDatePicker/Panel';

describe('Test MyDatePickerPanel component render', () => {
  it('Test MyDatePickerPanel component rendering', () => {
    shallow(<MyDatePickerPanel/>);
  });
});

describe('Test MyDatePickerPanel component logic', () => {
  const wrapper = mount(<MyDatePickerPanel/>);

  it('Testing go to previous month button', () => {
    // const calendarController = wrapper.find('calendarController');
    // expect(wrapper.find('goToPrevMonth')).toEqual('number');
    wrapper.find('.my-datepicker-panel-go-prev').simulate('click');
  });

  it('Testing go to previous month button', () => {
    wrapper.find('.my-datepicker-panel-go-next').simulate('click');
  });
});
