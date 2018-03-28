'use strict';

const DateTimePretty = (Component) => {
    return class extends React.Component {

      getFormattedDate() {
        const date = new Date(this.props.date);
        const currentDate = new Date();
        const timePassed = currentDate - date;
        const DAY = 1000 * 60 * 60 * 24;
        const HOUR = 1000 * 60 * 60;
        const MINUTE = 1000 * 60;

        if (timePassed >= DAY) {
          return `${(timePassed/DAY).toFixed(0)} дней назад`;
        } else if (timePassed >= HOUR) {
          return `${(timePassed/HOUR).toFixed(0)} часов назад`
        } else {
          return `${(timePassed/MINUTE).toFixed(0)} минут назад`;
        }
      }

      render() {
        return <Component {...this.props} date={this.getFormattedDate()} />;
      }
    }
};
