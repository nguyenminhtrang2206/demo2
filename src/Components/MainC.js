// import React, { Component } from "react";
// import Box from "./Box"

// class MainC extends Component {
//     render() {
//         return (
//             <main>
//                 <Box />
//                 <Box />
//                 <Box />

//             </main>
//         );
//     }
// }

// export default MainC;

import React, { Component } from "react";
import Box from "./Box";

class MainC extends Component {
  state = {
    persons: [
      { name: "Margit", age: 25, title: "CEO" },
      { name: "Kati", age: 35, title: "Designer" },
      { name: "Mari", age: 40, title: "Developer" },
    ],
  };

  render() {
    return (
      <main>
        <Box
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
          title={this.state.persons[0].title}
        />
        <Box
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          title={this.state.persons[1].title}
        />
        <Box
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
          title={this.state.persons[2].title}
        />
      </main>
    );
  }
}

export default MainC;