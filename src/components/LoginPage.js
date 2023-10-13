import { useState } from 'react'
import './styles/LoginPage.css'

const LoginPage = (props) => {

  
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  
  const handleLoginChange = (e) => {
    setLogin(e.target.value)
  }
  const handlePasswordChange = (e) =>{
    setPassword(e.target.value)
  }

  const handleLogin = (e) => {
    e.preventDefault();
    props.setUserName(login);
    props.setIsLoggedIn(true);
    props.history.push('/mainpage');
  }



  return(

    <form onSubmit={handleLogin}>
      <div className="Auth_Parrent">
        <div className='Auth_Child'>
          <h1 className='authH1'>Authorization</h1>
          <div className="authInputs">
            <input 
              className='authInput' 
              type='text' 
              placeholder='Login' 
              required
              onChange={handleLoginChange}
            ></input>
            <input 
              className='authInput'
              type='password' 
              placeholder='Password' 
              required
              onChange={handlePasswordChange}
            ></input>
          </div>
          <button className='authButton' type='submit'>Log In</button>
        </div>
      </div>
    </form>

    

  ) 
}
export default LoginPage;