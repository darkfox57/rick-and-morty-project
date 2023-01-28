import React, { useState } from "react"
import styles from './form.module.css'
import { validate } from './validation.js'

export default function Form ({login}) {
 const [ userData, setUserData] = useState({
  username: '',
  password: ''
 })

 const [errors, setErrors] = useState({
  ...userData
 })

const handleInputChange = (e) => {
 setUserData({
  ...userData,
  [e.target.name] : e.target.value
 })
 setErrors(validate({
  ...userData,
  [e.target.name] : e.target.value
 }))
}

const handleSubmit = (e) => {
 login(userData)
}

 return (
  <div className={styles.loginForm}>
   <form onSubmit={handleSubmit}>
    <label >Username</label>
    <input 

    className={errors.usarname && 'warning'}
    type="text" 
    name='username' 
    value={userData.username} 
    onChange={handleInputChange} />
<p className='danger'>{errors.username}</p>


    <label >Password</label>
    <input 
    className={errors.password && 'warning'}
    type="text" 
    name='password' 
    value={userData.password} 
    onChange={handleInputChange} />
<p className='danger'>{errors.password}</p>

    <button type='submit' disabled={Object.keys(errors).length ? true : false} >LOGIN</button>
   </form>
  </div>
 )
}