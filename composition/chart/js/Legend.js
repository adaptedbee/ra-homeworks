'use strict';

const Legend = (props) => {
  const { colors, labels } = props;

  return (
    <div className="Legend">
      {labels.map((label, labelIndex) => {
    		return (
    		  <div>
            <span
              className="Legend--color"
              style={{ backgroundColor: colors[labelIndex % colors.length]  }} 
            />
    				<span className="Legend--label">{label}</span>
    			</div>
    		);
    	})}
    </div>
  );
}
