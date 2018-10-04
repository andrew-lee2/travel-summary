import React from 'react';

class BackgroundMain extends React.Component {
  componentDidMount() {
    document.body.classList.add("stop-scrolling");
  }

  componentWillUnmount() {
    document.body.classList.remove("stop-scrolling");
  }

  render() {
    return (
      <div id="background">
      </div>
    );
  }
}

export default BackgroundMain;