import React from 'react'
import "./Header.css"
import { HiUser , HiOutlineShoppingBag} from 'react-icons/hi';

import { FaHome } from 'react-icons/fa';

import {AiOutlineLogout} from "react-icons/ai"
import SearchIcon from '@material-ui/icons/Search';

import {Link, useHistory} from "react-router-dom"
import { useStateValue } from './StateProvider';
import { actionTypes } from './reducer'
import logo from "./golk.png";

function Header() {
    const [{user}, dispatch] = useStateValue();
    const history = useHistory();
    var logout = ()=>{
        localStorage.clear();
        dispatch({
            type:actionTypes.LOGOUT,
        })
    }

    return (
        <div className="header">
            <Link to="/">
              <img alt="loh" src={logo} className="header_icon" />
            </Link>
            <div className="header_center">
            <SearchIcon />
                <input type="text"  className="input" placeholder=" Search for best tourist place for stay"/>
               
            </div>

            <div className="header_right">
            <div className="item" onClick={()=>{history.push("/")}}>
                  <FaHome style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                  <span className="icon_desc">Home</span>
              </div>
              <div className="item under" onClick={()=>{history.push("/profile")}}>
                  <HiUser style={{fontSize:"16px",color:"grey",marginBottom:"5px"}}/>
                  <span className="icon_desc" >Profile</span>
              </div>
              <div className="item" onClick={()=>{history.push("/bookings")}}>
                  <HiOutlineShoppingBag style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                
                  <span className="icon_desc">Bookings</span>
              </div>

              
              <div className="item" >
                  <AiOutlineLogout style={{fontSize:"16px",color:"grey",marginBottom:"5px"}} />
                
                 {user ? <span onClick={logout} className="icon_desc">Logout</span> : <Link to="login">Login</Link>}
              </div>
            
            </div>
        </div>
    )
}

export default React.memo(Header)
