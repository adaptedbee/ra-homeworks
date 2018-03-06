'use strict';

class Accordion extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      opened: this.props.opened
    };
  }

  getModeClassName = () => {
    if (this.state.opened) {
      return 'open';
    } else {
      return '';
    }
  }

  toggleAccordion = () => {
    this.setState({
      opened: !this.state.opened
    });
  }

  render() {
    return (
      <section className={`section ${this.getModeClassName()}`}>
        <button onClick={this.toggleAccordion}>toggle</button>
        <h3 className="sectionhead">{this.props.title}</h3>
        <div className="articlewrap">
          {this.props.children}
        </div>
      </section>
    );
  }
}
