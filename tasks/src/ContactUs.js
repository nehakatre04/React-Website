import React, { useEffect, useState } from 'react'
import './App.css'

const ContactUs = () => {
  const countries = [
    { id: "1", name: "INDIA" },
    { id: "2", name: "USA" },
    { id: "3", name: "CANADA" },
    { id: "4", name: "FRANCE" },
    { id: "5", name: "BRAZIL" }
  ];


  const [country, setCountry] = useState([]);




  useEffect(() => {
    setCountry(countries)
  }, [])



  return (
    <div className='formCenter'>

      <h1 className='text-center text-dark my-5'>Contact Us</h1>
      <div className='form-group mb-4'>
        <label htmlFor='Country'>Country</label>
        <select id="ddlCountry" className='form-control' >
          <option value="0">select Country</option>
          {
            country &&
              country !== undefined ?
              country.map((ctr, index) => {
                return (
                  <option key={index} value={ctr.id}>{ctr.name}</option>
                )
              })
              : "No Country"
          }
        </select>
      </div>
      <div className='form-group mb-4'>
        <lable htmlFor='name'>Name</lable>
        <input type='name' className='form-control' />

      </div>
      <div className='form-group mb-4'>
        <lable htmlFor='email'>Email</lable>
        <input type='email' className='form-control' />

      </div>
      <div className='form-group mb-4'>
        <lable htmlFor='mobail'>mobail</lable>
        <input type='number' className='form-control' />

      </div>
      <div className='form-group mb-4 '>
        <lable htmlFor='description'>Description</lable>
        <textarea rows="4" cols="50"  className='form-control' />

      </div>
      <button type='submit' className='btn btn-primary mt-2'>Submit</button>

    </div>
  )
}

export default ContactUs