import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function MakeVehicle() {

    const [makes, setMakes] = useState('');

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log({name, surname, email})
        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/add-make`, {makes})
            .then(res => {
                console.log(res)
                navigate('/register-vehicle')
            })
            .catch(err => {
                console.log(err)
            })
    }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>

        <div className = 'w-50 bg-white rounded p-3'>
            
            <form onSubmit = {handleSubmit}>
                <h2>Add make of vehicle</h2>
                
                <div className = 'mb-2'>
                    <label htmlFor=''>Make</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter make of vehicle' 
                        className = 'form-control' 
                        onChange = {e => setMakes(e.target.value)}
                    />
                </div>
                
                

                <button className = 'btn btn-success'>Submit</button>
            
            </form>
        
        </div>
      
    </div>
  )
}

export default MakeVehicle

