import './App.css';

// import Test from './component/Test';
// import User from './component/User';
// import Userc from './class_component/User';
// import VisitingCard from './component/Card';
// import ProfilePic from './component/ProfilePic';
// import TestPro from './component/TestPro';
import Navbar from './Zoutons/Navbar';
import SearchAppBar from './Zoutons/Search';

function App() {
  

  return (
    <div className="App">
      {/* <SearchAppBar/> */}
      <Navbar/>
      <SearchAppBar/>

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
