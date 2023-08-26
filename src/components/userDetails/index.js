
import React,{Component} from 'react'

export default class userDetails extends Component{
    componentDidMount(){
        fetch("http://localhost:5000/userData", {
            method: "POST",
            crossDomain: true,
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
              "Access-Control-Allow-Origin": "*",
            },
            body: JSON.stringify({
              token:window.localStorage.getItem("token")
            }),
          })
            .then((res) => res.json())
            .then((data) => {
              console.log(data, "userRegister");
            })
            .catch((error) => {
              console.error("Error submitting form data:", error);
            });

    }
    render() {
      return (
        <div>
          Name<h1>Adarsh</h1>
          Email<h1>adarsh@email.com</h1>
        </div>
      )
    }
}