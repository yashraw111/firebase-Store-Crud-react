import { collection, doc, getDoc, getDocs, updateDoc } from 'firebase/firestore';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dbFire from './FireStore';
import { useForm } from 'react-hook-form';

const UpdateFire = () => {

    const{register,handleSubmit,formState:{errors},reset}=useForm()

    const{id}=useParams()
    console.log(id);
    const redirect = useNavigate()

    async function SingleUser() {
        const SingleData = await getDoc(doc(dbFire,"users",id)) 
        reset(SingleData.data())
        console.log(SingleData.data());
        
    }

    useEffect(()=>{

        SingleUser()
    },[])

    async function UpdateFire(data) {
        await updateDoc(doc(dbFire,"users",id),data)
        redirect('/')
    
        
    }

  return (
    <>
    
    <div className="container d-flex justify-content-center align-items-center">
        <div className="col-5 shadow p-3">
            <h4>Regist Form</h4>
      <form onSubmit={handleSubmit(UpdateFire)}>
                <div className="form-group mb-3">
                  <label htmlFor="username" className="form-label">Username</label>
                  <input
                    type="text"
                    id="username"
                    className="form-control"
                    placeholder="Enter your name"
                    {...register('username', { required: true })}
                  />
                  {errors.username && <small className="text-danger">Username is required</small>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="form-control"
                    placeholder="Enter your email"
                    {...register('Email', { required: true })}
                  />
                  {errors.Email && <small className="text-danger">Email is required</small>}
                </div>

                <div className="form-group mb-3">
                  <label htmlFor="mobileNo" className="form-label">Mobile Number</label>
                  <input
                    type="text"
                    id="mobileNo"
                    className="form-control"
                    placeholder="Enter your mobile number"
                    {...register('MobileNo', { required: true })}
                  />
                  {errors.MobileNo && <small className="text-danger">Mobile number is required</small>}
                </div>

                <div className="text-center ">
                  <button type="submit" className="btn btn-dark px-4">Submit</button>
                </div>
              </form>
              </div>

    </div>
    
    </>
  )
}

export default UpdateFire