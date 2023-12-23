import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function UpdateVehicle() {

    const [make, setMake] = useState('');
    const [model, setModel] = useState('');
    const [year, setYear] = useState();
    const [type, setType] = useState('');
    const [volume, setVolume] = useState();
    const {id} = useParams()

    const navigate = useNavigate()

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log({name, surname, email})
        axios.put(`${process.env.REACT_APP_SERVER_DOMAIN}/update-vehicle/${id}`, {make, model, year, type, volume})

            .then(res => {
                console.log(res)
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
    
    }

  return (
    <div className = 'd-flex vh-100 bg-primary justify-content-center align-items-center'>

        <div className = 'w-50 bg-white rounded p-3'>
            
            <form onSubmit = {handleSubmit}>
                <h2>Update vehicle</h2>
                
                <div className = 'mb-2'>
                    <label htmlFor=''>Make</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter Make of vehicle' 
                        className = 'form-control' 
                        onChange = {e => setMake(e.target.value)}
                    />
                </div>
                
                <div className = 'mb-2'>
                    <label htmlFor = ''>Model</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter Model of vehicle' 
                        className = 'form-control' 
                        onChange = {e => setModel(e.target.value)}
                    />
                </div>
                
                <div className = 'mb-2'>
                    <label htmlFor = ''>Year</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter Year of production' 
                        className = 'form-control' 
                        onChange = {e => setYear(e.target.value)}
                    />
                </div>
                
                <div className = 'mb-2'>
                    <label htmlFor = ''>Type</label>
                    <select
                        type = 'text' 
                        placeholder = 'Enter Type of engine' 
                        className = 'form-control' 
                        onChange = {e => setType(e.target.value)}
                    >
                        <option>Petrol</option>
                        <option>Diesel</option>
                        <option>Electric</option>
                    </select>
                   
                </div>
                
                <div className = 'mb-2'>
                    <label htmlFor = ''>Volume</label>
                    <input 
                        type = 'text' 
                        placeholder = 'Enter Volume of engine' 
                        className = 'form-control' 
                        onChange = {e => setVolume(e.target.value)}
                    />
                </div>

                <button className = 'btn btn-success'>Update</button>
            
            </form>
        
        </div>
      
    </div>
  )
}

export default UpdateVehicle


