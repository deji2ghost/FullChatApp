import React, { useState } from 'react'
import FormInput from './InputLabel/FormInput'
import { Button } from '../ui/button'
import axios from 'axios'

const Login = () => {
    const [formData, setFormData] = useState({
        email: "",
        password: ""
    })

     const [ loading, setLoading ] = useState(false)

    const handleFormChange = (e) => {
      const { value, name } = e.target
      setFormData({
        ...formData,
        [name]: value
      })
    }

    const handleSubmit = async() => {
      if(!formData.email || !formData.password) return;
      setLoading(true)
      try{
        const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
        const response = await axios.post(``)
      }catch(error){

      }
    }
  return (
    <form onSubmit={handleSubmit}>
      <FormInput value={formData.email} name="email" type="text" handleChange={handleFormChange}/>
      <FormInput value={formData.password} name="password" type="text" handleChange={handleFormChange}/>
      <div>
        <Button>Go back</Button>
        <Button type='submit'>Login</Button>
      </div>
    </form>
  )
}

export default Login
