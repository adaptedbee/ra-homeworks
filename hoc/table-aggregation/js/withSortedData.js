'use strict';

const withSortedData = (Component, format) => {
    return class extends React.Component {

      getSortedList() {
        let list = [...this.props.list];
        list.sort((a, b) => {
          if (a.date > b.date) return 1;
          if (a.date < b.date) return -1;
        });
        let aggregatedList = [];

        if (format === 'month') {
          list.forEach((item) => {
            const date = new Date(item.date);
            item.month = date.toLocaleDateString('en-US', {month: 'short'});
          });

          list.forEach((item, index) => {
            let lastAggregatedItem = aggregatedList[aggregatedList.length - 1];
            if (index > 0 && item.month === lastAggregatedItem.month) {
              lastAggregatedItem.amount += item.amount;
            } else {
              aggregatedList.push(item);
            }
          });
        } else if (format === 'year') {
          list.forEach((item) => {
            const date = new Date(item.date);
            const yearString = date.toLocaleDateString('en-US', {year: 'numeric'});
            item.year = parseInt(yearString, 10);
          });

          list.forEach((item, index) => {
            let lastAggregatedItem = aggregatedList[aggregatedList.length - 1];
            if (index > 0 && item.year === lastAggregatedItem.year) {
              lastAggregatedItem.amount += item.amount;
            } else {
              aggregatedList.push(item);
            }
          });
        }

        if (format === 'month' || format === 'year') {
          return aggregatedList;
        } else {
          return list;
        }
      }

      render() {
        return <Component {...this.props} list={this.getSortedList()} />;
      }
    }
};
