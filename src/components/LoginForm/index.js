import React from 'react';
import './index.css';
import { Navigate,Link } from 'react-router-dom';
import Webcam from '../Webcam'
import Cookies from 'js-cookie'

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
    };
  }

  handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

   onSubmitSuccess = (data) => {
  //   const {history} = this.props
  //   Navigate('/')
  Cookies.set('jwt_token', data, {expires: 30})
  window.localStorage.setItem("token",data.data);
  window.location.href="./Webcam";
   }
 

  handleSubmit = async (e) => {
    e.preventDefault();
    // Do something with the form data, e.g., submit it to the server
    //console.log(this.state);
  
    const response=await fetch("http://localhost:5000/login", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data, "userLogin");
        if(data.status==="ok"){
          alert("login successfull")
           this.onSubmitSuccess(data.data)
        
            //  window.localStorage.setItem("token",data.data);
            //  window.location.href="./Blogs";
         }
      })
      .catch((error) => {
        console.error("Error submitting form data:", error);
      });

    //   const data = await response.json()
    // if (response.ok === true) {
    //   this.onSubmitSuccess()
    // }
  };

  

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
            />
          </div>
          <button type="submit">Log In</button>
        </form>
        <br/>
        <div>
        <Link to="/register">new user register</Link>
        </div>
      </div>
    );
  }
}

export default LoginForm;
