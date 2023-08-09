import { useState } from "react";
import "./login.css";
function Login({ password, setPassword, loginFunc }) {
  const [showAlert, setShowAlert] = useState(false);
  function handleClick(e) {
    loginFunc(e)
    setShowAlert(true)
    setTimeout(()=> {setShowAlert(false)}, 2000)
    setPassword('')
  }
  return (
    <div className="container">
      <form action="">
        <input type="text" value={password} placeholder='Enter Password' onChange={(e) => setPassword(e.target.value)} />
        {/* {showAlert && <span className="incorrectPassword"></span> }   */}
        <span className={`${showAlert? 'incorrectPassword' : ''}`}> { !showAlert ? 'hint: what food do you not trust other people to cook for you' : 'Password is incorrect😌' }</span>
        <button className="loginBtn" onClick={(e) => handleClick(e)}>Login</button>
      </form>
    </div>
  );
}

export default Login;
