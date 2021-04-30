/* eslint-disable no-new */
import MyCalendarController from '../../../components/MyDatePicker/controller';

jest.mock('../../../components/MyDatePicker/controller');

beforeEach(() => {
  // Clear all instances and calls to constructor and all methods:
  MyCalendarController.mockClear();
});

describe('Test MyDatePicker controller', () => {
  it('Tesing MyDatePicker instance call', () => {
    new MyCalendarController();
    expect(MyCalendarController).toHaveBeenCalledTimes(1);
  });

  it('Tesing MyDatePicker methods & attributes', () => {
    const myCalendarController = new MyCalendarController();

    expect(myCalendarController.clone instanceof Function).toEqual(true);
    // expect(myCalendarController.clone()).toEqual(null);
  });
});
