'use strict'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: 'All'
    };
  }

  selectFilter = (filter) => {
    this.setState({
      filter: filter
    });
  }

  getFilteredProjects = () => {
    if (this.state.filter === 'All') {
      return this.props.projects;
    }

    let filteredProjects;
    filteredProjects = this.props.projects.filter((project) => {
      return project.category === this.state.filter;
    });
    return filteredProjects;
  }
  
  render() {
    return (
      <div>
        <Toolbar
          filters={this.props.filters}
          selected={this.state.filter}
          onSelectFilter={this.selectFilter} />
        <Portfolio projects={this.getFilteredProjects()} />
      </div>
    );
  }
}
