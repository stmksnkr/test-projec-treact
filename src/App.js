import logo from './logo.svg';
import './App.css';
import Test from './component/Test';
import User from './component/User';
function App() {
  const data =[ 

    {id: 1, name: 'John' ,email : "abc@gmail"},
    {id: 2, name: 'peter', email : "def@gmail"},
    {id: 3, name: 'satyam',email : "ghf@gmail"}
]
  return (
    <div className="App">
      {/* <Test data = {"Hello data"} /> */}
      <User data = {data}/>
      <h2>
        Hello react
      </h2>
    </div>
  );
}

export default App;
