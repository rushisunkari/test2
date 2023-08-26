import Cookies from 'js-cookie'
import {Redirect,Navigate} from 'react-router-dom'


const Blogs=()=>{
  
    const jwtToken = Cookies.get('jwt_token')
    if (jwtToken === undefined) {
    //   return <Redirect to="/login" />
      return  window.location.href="./login";
    }
          return (
            <div>
                Blogs app
          </div>
          );
        };
    


export default Blogs;