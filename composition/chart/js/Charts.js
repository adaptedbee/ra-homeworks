'use strict';

const Charts = (props) => {
  const { type } = props;

  function getChartsClassName() {
    if (type && type !== '') {
      return type;
    } else {
      return '';
    }
  }

  return (
    <div className={`Charts ${getChartsClassName()}`}>
      {props.children}
    </div>
  );
}
