import './App.css';
import { Navbar } from './MyComponents/Navbar';
import { AddEmp } from './MyComponents/AddEmp';
import { EmpData } from './MyComponents/EmpData';

function App() {
  const addEmp = (name, gender, email, phone) => {
    console.log("I am adding this data", name, gender, email, phone);
  }

  const emp = [
    {
      id: 1,
      name: "Laxmi Gowthami Ittappa",
      gender: "Female",
      email: "laxmi@gmail.com",
      phone: 9876543234,
      salary: "$1000000"
    },
    {
      id: 2,
      name: "Sindhu Ittappa",
      gender: "Female",
      email: "sindhu@gmail.com",
      phone: 9876543234,
      salary: "$1000000"
    },
  ]

  return (
    <div className="App">
      <Navbar />
      <AddEmp addEmp={addEmp}/>
      <EmpData emp={emp} /> 
    </div>
  );
}

export default App;
