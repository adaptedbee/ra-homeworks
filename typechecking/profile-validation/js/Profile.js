'use strict';

const profileStyle = {
  border: '1px solid #cccccc',
  borderRadius: '5px',
  width: '100%',
  height: '100%',
  margin: '5px'
};

const imageStyle = {
  width: '200px',
  height: '200px'
};

const Profile = props => {
  return (
    <div className="col-md-4 text-center" style={{marginBottom: '10px'}}>
      <div style={profileStyle}>
        <h2>{props.first_name} {props.last_name}</h2>
        <div>
          <img src={props.img} className="img-thumbnail" style={imageStyle}/>
        </div>
        <p>vk: <a href={props.url}>{props.url}</a></p>
        <p>birthday: <a href={props.birthday}>{props.birthday}</a></p>
      </div>
    </div>
  );
};

function isString(value) {
  return typeof value === 'string' || value instanceof String;
}

Profile.propTypes = {
  first_name: PropTypes.string,
  last_name: PropTypes.string,
  img: PropTypes.string,
  url: (props, propName, componentName) => {
    if (props[propName] !== undefined && 
      isString(props[propName]) &&
      !/^https:\/\/vk.com\/(id[0-9]+|[A-Za-z0-9_-]+)$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Expecting something like 'https://vk.com/x'. Validation failed.`);
    }
  },
  birthday: (props, propName, componentName) => {
    if (props[propName] !== undefined && 
      isString(props[propName]) &&
      !/^[0-9]{1,4}-[0-9]{1,2}-[0-9]{1,2}$/.test(props[propName])) {
      return new Error(`Invalid prop ${propName} ${props[propName]} supplied to ${componentName}. Expecting something like 'YYYY-MM-DD'. Validation failed.`);
    }

    const date = new Date(props[propName]);
    const currentDate = new Date();
    if (date > currentDate) {
      return new Error(`Invalid prop ${propName} supplied to ${componentName}. Date can't be greater than current. Validation failed.`);
    }
  }
};

Profile.defaultProps = {
  img: './images/profile.jpg'
};
