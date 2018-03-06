'use strict';

const Charts = (props) => {
  const { data, colors, labels, series } = props;

  const max = data.reduce((max, serie) => {
    return Math.max(max, serie.reduce((serieMax, item) => {
      return Math.max(serieMax, item);
    }, 0));
  }, 0);

  return (
    <div className="Charts">
      {data.map((serie, serieIndex) => {
        var sortedSerie = serie.slice(0);
        var sum = serie.reduce((carry, current) => carry + current, 0);
        sortedSerie.sort(compareNumbers);

        return <ChartsSerie 
                key={serieIndex}
                serieIndex={serieIndex}
                style={{height: 250}}
                colors={colors}
                labels={labels}
                max={max}
                serie={serie}
              />;
      })}
    </div>
  );
}
