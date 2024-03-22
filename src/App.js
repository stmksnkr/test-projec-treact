import './App.css';

// import Test from './component/Test';
// import User from './component/User';
// import Userc from './class_component/User';
// import VisitingCard from './component/Card';
// import ProfilePic from './component/ProfilePic';
// import TestPro from './component/TestPro';
import Navbar from './Zoutons/Task1/Navbar';
import SearchAppBar from './Zoutons/Task1/Search';
import StoreFeature from './Zoutons/Task1/StoreFeature';


import Signup from "./Zoutons/Task2/SignUp"
import SignIn from "./Zoutons/Task2/Signin"

function App() {
  

  return (
    <div className="App">
      <Signup/>
      <SignIn/>
      <SearchAppBar/>
      <Navbar/>
      <SearchAppBar/>
      <StoreFeature/>
      
      {/* <Navcomp/> */}
      {/* <TestPro/> */}
      {/* <ProfilePic/> */}
      {/* <VisitingCard  handleA={handleData}/> */}
      {/* <Test data = {"Hello data"} /> */}
      {/* <User data = {data}/> */}
      {/* <Userc/> */}
    </div>
  );
}

export default App;
