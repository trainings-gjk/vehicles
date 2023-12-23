import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom';


function Vehicles() {

    const [vehicles, setVehicles] = useState([]);
   

    useEffect(() => {
        axios.get(process.env.REACT_APP_SERVER_DOMAIN)
            .then(res => {
                setVehicles(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

   

    const handleDelete = async (id) => {
        try{
            await axios.delete(`${process.env.REACT_APP_SERVER_DOMAIN}/vehicle/${id}`)
            window.location.reload()
        } catch(err){
            console.log(err)
        }
    }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>
      
        <div className = 'w-50 bg-white rounded p-3'>
                <Link to = '/register-vehicle' className = 'btn btn-success'>Add new vehicle</Link>
                
                <table className = 'table'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Make of vehicle</th>
                            <th>Model of vehicle</th>
                            <th>Year</th>
                            <th>Type of engine</th>
                            <th>Volume of engine</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            vehicles.map((vehicle,index) => (
                                <tr key = {index}>
                                    <td>{vehicle.ID_vehicle}</td>
                                    <td>{vehicle.Make_of_vehicle}</td>
                                    <td>{vehicle.Model_of_vehicle}</td>
                                    <td>{vehicle.Year}</td>
                                    <td>{vehicle.Type_of_engine}</td>
                                    <td>{vehicle.Volume_of_engine}</td>
                                    <td>
                                        <Link to = {`update-vehicle/${vehicle.ID_vehicle}`} className = 'btn btn-primary'>Update</Link>
                                        {/* <Link to = {`update`} className = 'btn btn-primary'>Update</Link> */}
                                        <button className = 'btn btn-danger ms-2' onClick = {e => handleDelete(vehicle.ID_vehicle)}>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
        </div>

    </div>
  )
}

export default Vehicles


