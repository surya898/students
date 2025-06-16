import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { registerApi } from '../AllApis/allApis';

function Reg() {
    const nav=useNavigate()

    const [data,setData]=useState({
    username:"",email:"",password:""
    
      })

      const handleSubmit=async()=>{
        const {username,email,password}=data
        if(!username || !email || !password){
          alert("Enter Valid Input!")
        }
        else{
            try{
                const result=await registerApi(data)
                console.log(result)
                if(result.status==201){
                  toast.success("Registration successfull!!")
                  nav('/')
          
          
                }
                else{
                  toast.error("Registration Failed!!")
                }
            }
            catch(err){
                toast.warning("Registration Failed")
            }

        }

      }

  return (
    <>
        <div className='d-flex justify-content-center align-items-center container-fluid ' style={{height:'80vh'}}>
        <div className='w-50 border border-2 shadow p-4'>
            <h3 className='my-3 text-center text-secondary'>Login</h3>
            <FloatingLabel controlId="floatingInput" label="username" className='mb-3'>
                <Form.Control type="text" onChange={(e)=>{setData({...data,username:e.target.value})}} placeholder="user" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingInput" label="Email address"className="mb-3">
                <Form.Control type="email" onChange={(e)=>{setData({...data,email:e.target.value})}} placeholder="name@example.com" />
            </FloatingLabel>
            <FloatingLabel controlId="floatingPassword" label="Password">
                <Form.Control type="password" onChange={(e)=>{setData({...data,password:e.target.value})}} placeholder="Password" />
            </FloatingLabel>
            <div className='d-flex justify-content-between mt-4 '>
                <button className='btn btn-success' onClick={handleSubmit}>Login</button>
                <Link to={'/'}>Already a User ?</Link>


            </div>
        </div>
    </div>
    </>
  )
}

export default Reg