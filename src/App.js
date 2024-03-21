import logo from './logo.svg';
import './App.css';

import Test from './component/Test';
import User from './component/User';
import Userc from './class_component/User';
import VisitingCard from './component/Card';
import ProfilePic from './component/ProfilePic';
import TestPro from './component/TestPro';
function App() {
  const  handleData =()=> {
    alert("from function")
    // console.log(data.name)
  }

  return (
    <div className="App">
      {/* <TestPro/> */}
      {/* <ProfilePic/> */}
      <VisitingCard  handleA={handleData}/>
      {/* <Test data = {"Hello data"} /> */}
      {/* <User data = {data}/> */}
      {/* <Userc/> */}
    </div>
  );
}

export default App;
