
import {Link} from 'react-router-dom'
import SignUpForm  from '../SignUpForm'
import LoginForm from '../LoginForm'

const Home=()=>{
    return(
        <ul>
            <Link to="/register"><li>signup</li></Link>
            <Link to="/login"><li>login</li></Link>
        </ul>
    )
}

export default Home;