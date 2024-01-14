import {Link} from 'react-router-dom'

export const Navbar = () => {
        return (
            <div>
                <h3>
                    Navigation bar 
                    <Link to = "/">  Home  </Link>
                    <Link to = "/contact">  Contact Us  </Link>
                </h3>
            </div>
        )
}