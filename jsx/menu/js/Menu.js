const Menu = function(props) {
  const { items, opened } = props;

  if (!opened) {
    return (
      <div className="menu">
        <div className="menu-toggle"><span></span></div>
      </div>
    );
  }

  return (
    <div className="menu menu-open">
      <div className="menu-toggle"><span></span></div>
      <nav>
        <ul>
          {items.map((item) => {
            return (
              <li><a href={item.href}>{item.title}</a></li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
