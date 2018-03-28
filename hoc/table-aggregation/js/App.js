'use strict';

const MonthTableSorted = withSortedData(MonthTable, 'month');
const YearTableSorted = withSortedData(YearTable, 'year');
const SortTableSorted = withSortedData(SortTable);

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        };
    }

    componentDidMount() {
        axios.get('https://api.myjson.com/bins/l2s9l').then(response => {
            this.setState(response.data);
        });
    }

    render() {
        return (
            <div id="app">
                <MonthTableSorted list={this.state.list} />
                <YearTableSorted list={this.state.list} />
                <SortTableSorted list={this.state.list} />
            </div>
        );
    }
};