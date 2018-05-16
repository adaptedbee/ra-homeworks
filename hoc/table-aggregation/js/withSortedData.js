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
          let aggregatedList = [];
          list.forEach((item) => {
            const date = new Date(item.date);
            item.month = date.toLocaleDateString('en-US', {month: 'short'});
          });

          list.forEach((item, index) => {
            if (aggregatedList.length > 0 && 
              item.month === aggregatedList[aggregatedList.length - 1].month) {
                aggregatedList[aggregatedList.length - 1].amount += item.amount;
            } else {
              aggregatedList.push(Object.create(item));
            }
          });

          return aggregatedList;
        } else if (format === 'year') {
          let aggregatedList = [];
          list.forEach((item) => {
            const date = new Date(item.date);
            const yearString = date.toLocaleDateString('en-US', {year: 'numeric'});
            item.year = parseInt(yearString, 10);
          });

          list.forEach((item, index) => {
            if (aggregatedList.length > 0 && 
              item.year === aggregatedList[aggregatedList.length - 1].year) {
                aggregatedList[aggregatedList.length - 1].amount += item.amount;
            } else {
              aggregatedList.push(Object.create(item));
            }
          });

          return aggregatedList;
        }
      
        return list;
      }

      render() {
        return <Component {...this.props} list={this.getSortedList()} />;
      }
    }
};
