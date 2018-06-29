function Menu() {
  return (
    <nav className="menu">
      <NavLink 
        to="/" exact="true"
        className="menu__item" activeClassName="menu__item-active">
        Главная
      </NavLink>
      <NavLink 
        to="/drift"
        className="menu__item" activeClassName="menu__item-active">
        Дрифт-такси
      </NavLink>
      <NavLink 
        to="/timeattack"
        className="menu__item" activeClassName="menu__item-active">
        Time Attack
      </NavLink>
      <NavLink 
        to="/forza"
        className="menu__item" activeClassName="menu__item-active">
        Forza Karting
      </NavLink>
    </nav>
  )
}