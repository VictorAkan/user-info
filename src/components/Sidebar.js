import React from "react";
import Button from "./buttontoggle"
// import data from "./data"
// import People from "./Maincontent"

class Sidebar extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isToggle: false}
  }
  // componentDidMount() {
  //   this.setState({isToggle: false})
  // }
  showSidenav = () => {
    console.log("me");
  }
  render() {
    
    return(
        <div id={this.showSidenav} className="side-bg">
          <div className="bg-dark d-block sidenav justify-content-begin">
        
        <ul className="list-unstyled ct-sidenav-list">
<li className="o-link">
  <button value="all" onClick={this.props.handleEvent}><i className="fa-solid fa-people-line me-2"></i>Users</button>
</li>
<li className="o-link">
  <button value="male" onClick={this.props.handleEvent}><i className="fa-solid fa-user me-2"></i>Male</button>
</li>
<li className="o-link">
  <button value="female" onClick={this.props.handleEvent}><i class="fa-solid fa-child-dress me-2"></i>Female</button>
</li>
</ul>
  </div>
  <Button 
    showSidenav = {this.showSidenav}
  />
        </div>
    )
}
}

export default Sidebar