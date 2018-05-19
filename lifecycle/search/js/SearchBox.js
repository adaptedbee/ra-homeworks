class SearchBox extends React.Component {

  constructor(props) {
    super(props);
    this.state = { fixed: false };

    this.setPosition = this.setPosition.bind(this);
    this.isFixed = this.isFixed.bind(this);

    this.setSearchBoxRef = this.setSearchBoxRef.bind(this);
  }

  isFixed() {
    if (window.scrollY >= this.searchBoxOffsetTop) {
      return true;
    } else {
      return false;
    }
  }

  setPosition() {
    this.setState({
      fixed: this.isFixed()
    });
  }

  setSearchBoxRef(el) {
    this.searchBox = el;
  }

  componentDidMount() {
    this.searchBoxOffsetTop = this.searchBox.offsetTop;
    window.addEventListener('scroll', this.setPosition);
  }

  componentDidUnount() {
    window.removeEventListener('scroll', this.setPosition);
  }

  render() {
    return <SearchBoxView
            searchBoxRef={this.setSearchBoxRef} 
            fixed={this.state.fixed} />
  }
}
