class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="tabs">
          <nav className="tabs__items">
            <NavLink 
              to="/" exact="true"
              className="tabs__item" activeClassName="tabs__item-active">
              Рефераты
            </NavLink>
            <NavLink 
              to="/creator"
              className="tabs__item" activeClassName="tabs__item-active">
              Криэйтор
            </NavLink>
            <NavLink 
              to="/fortune"
              className="tabs__item" activeClassName="tabs__item-active">
              Гадалка
            </NavLink>
          </nav>

          <div className="tabs__content">
            <Route path="/" component={Essay} />
            <Route path="/creator" component={Creator} />
            <Route path="/fortune" component={Fortune} />
          </div>
        </div>
      </Router>
    );
  }
}
