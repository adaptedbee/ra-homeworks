'use strict';

const ChartsSerie = (props) => {
  const { serieIndex, style, colors, labels, max, serie } = props;

  return (
    <div className="Charts--serie" style={style}>
      <label>{labels[serieIndex]}</label>
      {serie.map((item, itemIndex) => {
        const color = colors[itemIndex];
        const size = item / (max) * 100;
        const style = {
          backgroundColor: color,
          opacity: item/max + .05,
          zIndex: item,
          height: size + '%'
        };

        return <ChartsItem
                key={itemIndex}
                color={color}
                style={style}
                item={item}
              />;
      })}
    </div>
  );
}
