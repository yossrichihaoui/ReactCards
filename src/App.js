import Cards from "./component/Cards";
import Mycode from "./component/Mycode";
import Navba from "./component/Nav";
import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
    <div>
      <Navba/>
      <h1>hello my cards</h1>
      <Cards/>
      <Cards/>
      <Cards/>
      
    </div>
  );
}

export default App;
