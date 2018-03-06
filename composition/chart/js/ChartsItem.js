'use strict';

const ChartsItem = (props) => {
  const { type, color, style, item } = props;

  function getType() {
    if (type === undefined) {
      return '';
    } else {
      return type;
    }
  }

  return (
    <div className={`Charts--item ${getType()}`} style={style}>
      <b style={{color: color}}>{item}</b>
    </div>
  );
}
