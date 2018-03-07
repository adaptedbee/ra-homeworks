class App extends React.Component {
	componentWillMount() {
		this.setState({
			data: [],
			series: ['France', 'Italy', 'England', 'Sweden', 'Germany'],
			labels: ['cats', 'dogs', 'horses', 'ducks', 'cows'],
			colors: ['#43A19E', '#7B43A1', '#F2317A', '#FF9824', '#58CF6C']
		})
	}

	componentDidMount() {
		this.populateArray();
		setInterval(this.populateArray.bind(this), 2000);
	}

	populateArray() {
		const	series = 5;
		const serieLength = 5;

    let data = new Array(series).fill(new Array(serieLength).fill(0));
    data = data.map(serie => serie.map(item => getRandomInt(0, 20)));

		this.setState({ data });
	}

	render() {
		const { data, colors, labels, series } = this.state;
		const max = data.reduce((max, serie) => {
			return Math.max(max, serie.reduce((serieMax, item) => {
				return Math.max(serieMax, item);
			}, 0));
		}, 0);

		return (
			<section>
        <Charts>
					{data.map((serie, serieIndex) => 
						<ChartsSerie
							key={serieIndex} serieIndex={serieIndex}
							style={{height: 250}} captions={labels} 
						>
						{serie.map((item, itemIndex) => {
							const color = colors[itemIndex];
							const size = item / (max) * 100;
							const style = {
								backgroundColor: color,
								opacity: item/max + .05,
								zIndex: item,
								height: size + '%'
							};
							return (
								<ChartsItem 
									key={itemIndex} item={item}
									color={color} style={style} 
								/>
							);
						})}
						</ChartsSerie>
					)}
				</Charts>

				<Charts>
					{data.map((serie, serieIndex) => 
						<ChartsSerie type="stacked"
							key={serieIndex} serieIndex={serieIndex}
							style={{height: 250}} captions={labels} 
						>
						{serie.map((item, itemIndex) => {
							const sum = serie.reduce((carry, current) => carry + current, 0);

							const color = colors[itemIndex];
							const size = item / sum * 100;
							const style = {
								backgroundColor: color,
								opacity: 1,
								zIndex: item,
								height: size + '%'
							};
							return (
								<ChartsItem type="stacked"
									key={itemIndex} item={item}
									color={color} style={style} 
								/>
							);
						})}
						</ChartsSerie>
					)}
				</Charts>

				<Charts>
					{data.map((serie, serieIndex) => 
						<ChartsSerie type="layered"
							key={serieIndex} serieIndex={serieIndex}
							style={{height: 250}} captions={labels}
						>
						{serie.map((item, itemIndex) => {
							let sortedSerie = serie.slice(0);
  				 		sortedSerie.sort(compareNumbers);
						 
							const color = colors[itemIndex];
							const size = item / max * 100;
							const style = {
								backgroundColor: color,
								opacity: (item/max + .05),
								zIndex: item,
								height: size + '%',
								right: ((sortedSerie.indexOf(item) / (serie.length + 1)) * 100) + '%'
							};
							return (
								<ChartsItem type="layered"
									key={itemIndex} item={item}
									color={color} style={style} 
								/>
							);
						})}
						</ChartsSerie>
					)}
				</Charts>
				
				<Charts type="horizontal">
					{data.map((serie, serieIndex) => 
						<ChartsSerie
							key={serieIndex} serieIndex={serieIndex}
							style={{height: 'auto'}} captions={series} 
						>
						{serie.map((item, itemIndex) => {
							const color = colors[itemIndex];
							const size = item / max * 100;
							const style = {
								backgroundColor: color,
								opacity: (item/max + .05),
								zIndex: item,
								width: size + '%'
							};
							return (
								<ChartsItem
									key={itemIndex} item={item}
									color={color} style={style} 
								/>
							);
						})}
						</ChartsSerie>
					)}
				</Charts>

        <Legend colors={colors} labels={labels} />
			</section>
		);
	}
}
