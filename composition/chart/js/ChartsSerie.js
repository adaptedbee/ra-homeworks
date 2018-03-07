'use strict';

const ChartsSerie = (props) => {
  const { type, serieIndex, style, captions } = props;

  function getType() {
    if (type === undefined) {
      return '';
    } else {
      return type;
    }
  }

  return (
    <div className={`Charts--serie ${getType()}`} style={style}>
      <label>{captions[serieIndex]}</label>
      {props.children}
    </div>
  );
}
