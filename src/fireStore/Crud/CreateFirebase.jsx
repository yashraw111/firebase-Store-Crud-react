import { addDoc, collection, deleteDoc, doc, getDoc, getDocs } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { NavLink } from 'react-router-dom'
import dbFire from './FireStore'
import { Bounce, toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'; 

const CreateFirebase = () => {
    const{register,handleSubmit,formState:{errors},reset}=useForm()
    const [user,SetUSers]= useState([])
    async function CreateFire(data) {
        const result = await addDoc(collection(dbFire,"users"),data)
        reset()
        toast.success('🦄 User added successfully!', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
      });
        ShowFireBase()
        
    }
    async function ShowFireBase() {
        const res = await getDocs(collection(dbFire,"users"))
        const userList = []
        console.log(userList);
        
        res.forEach((doc)=>{
        userList.push({id:doc.id,...doc.data()})
        })
        SetUSers(userList)
    }
    console.log(user);
    useEffect(()=>{
        ShowFireBase()
    },[])
    

    async function trash(id) {
      if(window.confirm("Do you Want to delete this item ?")){
        await deleteDoc(doc(dbFire,"users" ,id))
        ShowFireBase()
      }
    }

  return (
    <>

    <div className="container d-flex justify-content-center align-items-center">
        <div className="col-5 shadow p-3">
            <h4>Regist Form</h4>
      <form onSubmit={handleSubmit(CreateFire)}>
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
              
<div className="container mt-5">
      <h2 className="text-center mb-4">User List</h2>
      <div className="table-responsive">
        <table className="table table-hover table-bordered">
          <thead className="thead-dark bg-dark text-white">
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Mobile No</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {user.length > 0 ? (
              user.map((user) => (
                <tr key={user.id}>
                  <td>{user.username}</td>
                  <td>{user.Email}</td>
                  <td>{user.MobileNo}</td>
                  <td>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={()=>trash(user.id)}

                    >
                      Delete
                    </button>

                   
                <NavLink className="btn btn-warning  btn-sm ms-4" to={`/UpdateRedux/${user.id}`}>Update</NavLink>
                <NavLink className="btn btn-warning  btn-sm ms-4" to={`/SingleUser/${user.id}`}>SingleUser</NavLink>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center">
                  No users found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>

<ToastContainer></ToastContainer>

    </>


  )
}

export default CreateFirebase