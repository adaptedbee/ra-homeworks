const canvasConfig = {
  font: '30px Arial',
  circleWidth: 7,
  innerCircleColor: '#96d6f4',
  outerCircleColor: '#4ca89a',
  innerCircleRadius: 45,
  outerCircleRadius: 52
};

class ProgressBar extends React.Component {
  constructor(props) {
    super(props);

    this.getPercent = this.getPercent.bind(this);
    this.setCanvasRef = this.setCanvasRef.bind(this);
    this.updateCanvas = this.updateCanvas.bind(this);
  }

  getPercent() {
    return (100 * this.props.completed / this.props.total).toFixed(0);
  }

  setCanvasRef(el) {
    this.canvas = el;
    this.canvas.width = this.canvas.offsetWidth;
    this.canvas.style.height = `${this.canvas.offsetWidth}px`;
    this.canvas.height = this.canvas.offsetWidth;
  }

  updateCanvas() {
    const ctx = this.canvas.getContext('2d');
    ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    ctx.font = canvasConfig.font;
    ctx.textBaseline = 'middle';
    ctx.textAlign = 'center'; 
    ctx.fillText(`${this.getPercent()}%`, this.canvas.width/2, this.canvas.height/2);

    ctx.beginPath();
    ctx.strokeStyle = canvasConfig.outerCircleColor;
    ctx.lineWidth = canvasConfig.circleWidth;
    ctx.arc(this.canvas.width/2, this.canvas.height/2, canvasConfig.outerCircleRadius, 0, 2*Math.PI);
    ctx.stroke();

    ctx.beginPath();
    ctx.strokeStyle = canvasConfig.innerCircleColor;
    ctx.lineWidth = canvasConfig.circleWidth;
    ctx.arc(this.canvas.width/2, this.canvas.height/2, canvasConfig.innerCircleRadius, 0, (this.getPercent() / 100) * 2 * Math.PI);
    ctx.stroke();
  }

  componentDidMount() {
    this.updateCanvas();
  }

  componentDidUpdate() {
    this.updateCanvas();
  }

  render() {
    return (
      <canvas 
        id="progressCanvas" className="progress"
        ref={this.setCanvasRef} />
    );
  }
}
