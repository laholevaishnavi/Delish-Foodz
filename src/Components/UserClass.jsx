import React from "react";
class UserClass extends React.Component {

  // class based component mae props kaise receive hote  hai , for that yaha pe hum constructor use krte hai and that constructor will receive the props.

  constructor(props) {
    // Calling super(props) allows you to access this.props inside the constructor and throughout the component
    super(props);
    console.log(props);
    console.log("Userclass constructor");
  }
  componentDidMount() {
    console.log("Userclass component mount!!!");
  }
  //render method will display the piece of jsx..
  render() {
    console.log("Render of component");
    const { name, education } = this.props;
    return (
      <>
        <h3>{name}</h3>
        <h3>{education}</h3>
        <h4>This is the userClass Based Component....</h4>
      </>
    );
  }
}
export default UserClass;
