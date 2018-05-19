class Cart extends React.Component {

  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.isOpen !== nextProps.isOpen || 
      (this.props.isOpen && this.props.items.length !== nextProps.items.length)) {
        return true; 
      } else {
        return false;
      }
  }

  render() {
    return (
      <CartView {...this.props} />
    );
  }

}
