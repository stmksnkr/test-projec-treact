import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import User from './component/User';
import Userc from './class_component/User';
import VisitingCard from './component/Card';
import ProfilePic from './component/ProfilePic';
import TestPro from './component/TestPro';
function App() {
  const data =[ 

    {id: 1, name: 'John' ,email : "abc@gmail"},
    {id: 2, name: 'peter', email : "def@gmail"},
    {id: 3, name: 'satyam',email : "ghf@gmail"},
    {id: 4, name: 'abc',email : "adudf@gmail"},
    {id: 5, name: 'xyz',email : "dwhf=sd@gmail"},
    {id: 6, name: 'pQr',email : "gdwdehf@gmail"}
]
  return (
    <div className="App">
      {/* <TestPro/> */}
      {/* <ProfilePic/> */}
      <VisitingCard data={data} />
      {/* <Test data = {"Hello data"} /> */}
      {/* <User data = {data}/> */}
      {/* <Userc/> */}
    </div>
  );
}

export default App;
