import React, { useState } from 'react';
import { Form, Input, message} from 'antd'
import { Link, userNavigate } from "react-router-dom";
import axios from 'axios'
import Spinner from '../components/Spinner';

const Register = () => {
   const navigate= userNavigate();
   const [loading,setLoading] = useState(false)
   const submitHandler = async (values)=>{
      try{
         setLoading(true)
         await axios.post('/users/register',values)
         message.success('Registeration Successfull')
         setLoading(false)
         navigate('/login')
      } catch(error){
         setLoading(false)
        message.error('invalid username or password')
      };
   }
  return (
     <div className='register-page'>
       {loading && <Spinner />}
        <h1>Register Form</h1>
        <Form layout='vertical' onFinish={submitHandler}>
         <Form.Item label="Name" name="name">
           <Input />
        </Form.Item>
        <Form.Item label="Email" name="email">
           <Input type="email"/>
        </Form.Item>
        <Form.Item label="Password" name="password">
           <Input type="password"/>
        </Form.Item>

        <div className='d-flex justify-content-between'>
          <Link to="/login">Already Register ? Click here to login</Link>
          <button className='btn btn-primary' >Register</button>
        </div>
        </Form>
        
     </div>
  )
}

export default Register