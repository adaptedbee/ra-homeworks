'use strict';

function Stars(props) {
  const { count } = props;
  function isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  if (!isNumeric(count) || count < 1 || count > 5) {
    return null;
  }

  let stars = [];
  for (let i = 0; i < count; i++) {
    stars.push(<li key={i}><Star /></li>);
  }

  return (
    <ul className="card-body-stars u-clearfix">{stars}</ul>
  );
}
