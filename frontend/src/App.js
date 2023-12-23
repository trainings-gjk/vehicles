import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css';
import Vehicles from './Vehicles';
import RegisterVehicle from './RegisterVehicle';
import UpdateVehicle from './UpdateVehicle';
import MakeVehicle from './MakeVehicle';

function App() {
  return (
    <div className="App">
     
     <BrowserRouter>
            <Routes>
                <Route path = '/' element = {<Vehicles />} />
                <Route path = '/register-vehicle' element = {<RegisterVehicle />} />
                <Route path = '/update-vehicle/:id' element = {<UpdateVehicle />} />
                <Route path = '/add-make' element = {<MakeVehicle />} />
            </Routes>
        </BrowserRouter>

    </div>
  );
}

export default App;
