import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import {Stack} from '@mui/material'

function RegisterVehicle() {

    const [make, setMake] = useState('');
    const [makes, setMakes] = useState([]);
    const [model, setModel] = useState('');
    const [year, setYear] = useState();
    const [type, setType] = useState('');
    const [volume, setVolume] = useState();

    const navigate = useNavigate()

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_SERVER_DOMAIN}/add-make`)
            .then(res => {
                setMakes(res.data)
                console.log(res.data)
            })
            .catch(err => {
                console.log(err)
            })
    },[])

    const handleSubmit = (event) => {
        event.preventDefault()
        // console.log({name, surname, email})
        axios.post(`${process.env.REACT_APP_SERVER_DOMAIN}/register-vehicle`, {make, model, year, type, volume})
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
                <h2>Add vehicle</h2>
                
                    <div className = 'mb-2'>
                        <label htmlFor=''>Make</label>
                        <Stack direction = 'row'>
                        
                            <select
                                type = 'text' 
                                placeholder = 'Enter Type of engine' 
                                className = 'form-control' 
                                onChange = {e => setMake(e.target.value)}
                            >
                                <option selected disabled></option>
                                {
                                    makes.map((m, index) => (
                                        <option key = {index}> {m.Make_of_vehicle} </option>   
                                    ))
                                }

                            </select>

                            <Link to = {`/add-make`} className = 'btn btn-primary'>Add make</Link>
                        
                        </Stack>
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
                        <option selected disabled></option>
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

                <button className = 'btn btn-success'>Submit</button>
            
            </form>
        
        </div>
      
    </div>
  )
}

export default RegisterVehicle


