import { doc, getDoc } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { NavLink, useParams } from 'react-router-dom'
import dbFire from './FireStore'

const SingleUser = () => {

    const{id} = useParams()
    // console.log(id);
    const [user,SetUser]=useState({})


    async function  Showdata() {
      const res =  await getDoc(doc(dbFire,"users",id))
      console.log(res.data());
      SetUser(res.data())
      
    }
    console.log(user.username);
    

    useEffect(()=>{
      Showdata()

    },[])

  return (
    <>
     <div className="singleUserView">
      <div className="container ">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-md-8">
            { user? (
              <div className="card shadow border-0 rounded-4">
                <div className="card-header bg-dark text-white text-center rounded-top-4">
                  <h3 className="mb-0  text-light">User Details</h3>
                </div>
                <div className="card-body p-4">
                  <div className="mb-3">
                    <h5 className="">Username:</h5>
                    <p className=" text-dark">{user.username}</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="">Email:</h5>
                    <p className=" text-dark">{user.Email}</p>
                  </div>
                  <div className="mb-3">
                    <h5 className="">Mobile:</h5>
                    <p className=" text-dark">{user.MobileNo}</p>
                  </div>
                </div>
                <div className="card-footer text-center bg-light rounded-bottom-4">
                  <NavLink to="/">
                    <button className="btn btn-dark px-4">
                      <i className="fa-solid fa-arrow-left me-2"></i>Back to Users
                    </button>
                  </NavLink>
                </div>
              </div>
          ) : ( 
              <div className="alert alert-warning text-center">
                <h5>User not found!</h5>
              </div>
            )} 
          </div>
        </div>
      </div>
      </div>
    </>
  )
}

export default SingleUser