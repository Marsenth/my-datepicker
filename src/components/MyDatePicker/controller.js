/* eslint-disable no-underscore-dangle */
import moment from 'moment';

class CalendarController {
  constructor(params = {}) {
    const { initialDate = new Date() } = params;
    const today = new Date();

    this._weekDays = [
      'Dom',
      'Lun',
      'Mar',
      'Mié',
      'Jue',
      'Vie',
      'Sáb',
    ];

    this._month = initialDate.getMonth();
    this._year = initialDate.getFullYear();
    this._currentDate = new Date(this._year, this._month, 1, 0, 0, 0, 0);
    this._today = new Date(today.getFullYear(), today.getMonth(), today.getDate, 0, 0, 0, 0);
  }

  getData () {
    const res = [[], [], [], [], [], []];
    const startOfMonth = moment(this._currentDate);
    const mDate = moment(startOfMonth).add(startOfMonth.clone().day() * -1, 'd');

    const shouldCotinue = () => res[5].length < 7;

    let looping = shouldCotinue();
    let row = 0;

    while (looping) {
      res[row].push(mDate.toDate());
      mDate.add(1, 'd');

      looping = shouldCotinue();

      if (looping && mDate.day() === 0) {
        row += 1;
      }
    }

    return res;
  }

  getPrevMonth () {
    return moment(this._currentDate).add(-1, 'M').toDate();
  }

  getNextMonth () {
    return moment(this._currentDate).add(1, 'M').toDate();
  }

  getMomentDate () {
    return moment(this._currentDate);
  }

  getWeekDays () {
    return this._weekDays;
  }

  clone () {
    return new CalendarController({ initialDate: this._currentDate });
  }
}

export default CalendarController;
