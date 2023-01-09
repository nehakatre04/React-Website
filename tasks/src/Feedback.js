import React from 'react'
import './App.css';
import ContactUs from './ContactUs';
import { useForm } from 'react-hook-form'


const Feedback = () => {
    const { register, handleSubmit,
        formState: { errors }, } = useForm()

    const onSubmit = (values) => console.log(values);
    return (
        <div className='formCenter'>
        
            <h1 className='text-center text-warning my-5'>Feedback</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group mb-4'>
                    <lable htmlFor='name '>First Name</lable>
                    <input type='text' className='form-control' {...register("name", {
                        required: true,
                    })} />
                    {errors.name && (<span className='field_level_error'> Name is required</span>)}
                </div>


                <div className='form-group mb-4'>
                    <lable htmlFor='email'>Email</lable>
                    <input type='email' className='form-control' {...register("email", {
                        required: true,
                    })} />
                    {errors.email && (<span className='field_level_error'>Email is required</span>)}

                </div>
                <div className='form-group mb-4'>
                    <lable htmlFor='phone'>Phone</lable>
                    <input type='number' className='form-control' {...register("phone", {
                        required: true,
                    })} />
                    {errors.phone && (<span className='field_level_error'>Phone Number is required</span>)}

                </div>
                <div className='form-group mb-4'>
                    <lable htmlFor='description'>Description</lable>
                    <textarea rows="4" cols="50" className='form-control' {...register("description", {
                        required: true,
                    })} />
                    {errors.description && (<span className='field_level_error'>Description is required</span>)}

                </div>
                <button type='submit' className='btn btn-primary mt-2'>Submit</button>
            </form>
            
        </div>
    )
}

export default Feedback



