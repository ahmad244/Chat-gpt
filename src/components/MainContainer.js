import React, {PureComponent} from 'react'
import "./MainContainer.css";

class MainContainer extends PureComponent {
    
  render() {
    return <div className="MainContainer">{this.props.children}</div>;
  }
}

export default MainContainer;
