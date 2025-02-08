// import React from 'react'
// import UserClass from './UserClass'
// import User from './User'

// const About = () => {
//   return (
//     <div>
//         <UserClass name={"Vaishnavi Class Component"} education={"3rd Year CSE..."}/>
//         <User name={"Vaishnavi Function Component"}/>
//       <h1>About Section : I'm Vaishnavi, Full Stack Web Developer...</h1>
//     </div>
//   )
// }

// export default About

// import React from "react";
// import UserClass from "./UserClass";
// import User from "./User";
// class About extends React.Component {
//   constructor(props) {
//     super(props);
//     console.log("Parent Constructor");
//     this.state= {
//       count : 0,
//       count : 2,
//     };
//   }

//api call can be made here b'coz initially when component is called, it is redered and then api call is made and data is filled inside the the component and it is re- rendered.

//   componentDidMount(){
//     console.log("parent component mount!!!");
    
//   }
//   render() {

//     console.log("Parent Render");
//     const {count} = this.state;
//     const name = this.props

//     return (
     

//       <><h1>{this.name}</h1>
//         <h5>I am About Section of the webpage and I'm class based component</h5>
//         <UserClass name={"Vaishnavi"} education={"CSE3rd year"}/>
//         <User/>
//         <div className="Usercard">
//         <h3>count: {count}</h3>
//         <button onClick={()=>{
// never update state variable state variable directly, here we are provided with the method
//           this.setState({
//             count: this.state.count + 1
//           })
//         }}>INCREMENT</button>
//       </div>
//       </>
//     );
//   }
// }
// export default About;


import React from 'react'

const About = (props) => {
  return (
    <div>About {props.name}</div>
  )
}

export default About