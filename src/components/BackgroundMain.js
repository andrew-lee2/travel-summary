import React from 'react';
import backgroundImage from '../images/plane_wing.jpg';
import Paper from '@material-ui/core/Paper';

// import Background from '../images/background_image.png';

// const sectionStyle = {
//   width: "100%",
//   height: "5472px",
//   backgroundImage: `url(${backgroundImage})`,
// };

class BackgroundMain extends React.Component {
  render() {
    return (
      <div id="background">
        <img src={backgroundImage} className="stretch" alt=""/>
      </div>
    );
  }
}


export default BackgroundMain;