const Calendar = function(props) {
  const { date } = props;

  const weekday = date.toLocaleString('ru', { weekday: "long" });
  const capitalizedWeekday = weekday.charAt(0).toUpperCase() + weekday.slice(1);
  const dateAndMonth = date.toLocaleString('ru', { day: 'numeric', month: "long" });
  const formattedMonth = dateAndMonth.slice(dateAndMonth.indexOf(' ') + 1);
  const month = date.toLocaleString('ru', { month: "long" });
  const capitalizedMonth = month.charAt(0).toUpperCase() + month.slice(1);

  let dates = [];

  function fillMonthDates() {
    const monthFirstDay = new Date(date.getFullYear(), date.getMonth(), 1);
    const monthLastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);

    let weekIndex = 0;
    dates[weekIndex] = [];

    // Заполняем даты предыдущего месяца
    if (monthFirstDay.getDay() !== 1) {
      let index;
      if (monthFirstDay.getDay() === 0) {
        index = 6;
      } else {
        index = monthFirstDay.getDay() - 1;
      }

      for (let i = index; i > 0; i--) {
        dates[weekIndex].push(new Date(monthFirstDay.getFullYear(), monthFirstDay.getMonth(), monthFirstDay.getDate() - i));
      }
    }

    // Заполняем даты текущего месяца
    for (let i = 1; i <= monthLastDay.getDate(); i++) {
      let dateOfMonth = new Date(date);
      dateOfMonth.setDate(i);
      dates[weekIndex].push(dateOfMonth);

      if (dates[weekIndex].length === 7) {
        weekIndex++;
        dates[weekIndex] = [];
      }
    }

    // Заполняем даты следующего месяца
    let nextMonthDate = 1;
    while (dates[weekIndex].length < 7) {
      dates[weekIndex].push(new Date(date.getFullYear(), date.getMonth() + 1, nextMonthDate));
      nextMonthDate++;
    }
  }

  fillMonthDates();

  function getDayClasses(day) {
    let classes = '';

    if (day.getMonth() !== date.getMonth()) {
      classes += 'ui-datepicker-other-month';
    } else if (day.getDate() === date.getDate()) {
      classes += 'ui-datepicker-today';
    }

    return classes;
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">{capitalizedWeekday}</div>
        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">{date.getDate()}</div>
          <div className="ui-datepicker-material-month">{formattedMonth}</div>
          <div className="ui-datepicker-material-year">{date.getFullYear()}</div>
        </div>
      </div>
      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">{capitalizedMonth}</span>&nbsp;<span className="ui-datepicker-year">{date.getFullYear()}</span>
        </div>
      </div>
      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>
        <thead>
          <tr>
            <th scope="col" title="Понедельник">Пн</th>
            <th scope="col" title="Вторник">Вт</th>
            <th scope="col" title="Среда">Ср</th>
            <th scope="col" title="Четверг">Чт</th>
            <th scope="col" title="Пятница">Пт</th>
            <th scope="col" title="Суббота">Сб</th>
            <th scope="col" title="Воскресенье">Вс</th>
          </tr>
        </thead>
        <tbody>
          {dates.map((week) => {
            return (
              <tr>
                {week.map((day) => {
                  return (
                    <td className={getDayClasses(day)}>
                      {day.getDate()}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
