'use strict';

const withSortedData = (Component, format) => {
    return class extends React.Component {

      getSortedList() {
        let list = [...this.props.list];
        list.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
        });

        if (format === 'month') {
          list.forEach((item) => {
            const date = new Date(item.date);
            item.month = date.toLocaleDateString('en-US', {month: 'short'});
          });
        } else if (format === 'year') {
          list.forEach((item) => {
            const date = new Date(item.date);
            const yearString = date.toLocaleDateString('en-US', {year: 'numeric'});
            item.year = parseInt(yearString, 10);
          });
        }

        return list;
      }

      render() {
        return <Component {...this.props} list={this.getSortedList()} />;
      }
    }
};
