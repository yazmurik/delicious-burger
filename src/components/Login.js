function Login (){
  return (
    <form>
      <h1>Login to start creating a burger!</h1>
      <label htmlFor="username">Username</label>
      <input type="text" name="username" id="username"/>
      <br/>
      <label htmlFor="user-pw">Password:</label>
      <input id="user-pw" type="password" name="user-pw"/>
      <br/>
      <input type="button" value="Login"/>
    </form>
  )
}

export default Login;