import React,{useState,useEffect} from 'react'
import axios from "axios"
import { useHistory } from "react-router-dom";
import {MdEmail} from "react-icons/md"
import {RiLockPasswordFill} from "react-icons/ri" 
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer'
import { Link } from 'react-router-dom';

import swal from 'sweetalert';

function Login() {
    const [{}, dispatch] = useStateValue();
    var [email,setEmail]=useState('');
    var [password,setPassword]=useState('');
    var history = useHistory();

    const login_in = async ()=>{

      /*
       await axios.get("/admin").then(
           (res)=>{
               console.log(res.data);
           }
       );
       */
            if(email.trim()!==" "&& password.trim()!==" "){          
             await axios.post(`/login/customer/${email}/${password}`, { })
               .then( (res) => { 
                   if(res.data === true){
                console.log('response is : ' + res.data);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('userId', res.data.userId);
                localStorage.setItem('details', JSON.stringify(res.data.rowData[0]));
                localStorage.setItem('isAuth', res.data);

                const remainingMilliseconds = 60 * 60 * 1000;
                const expiryDate = new Date( new Date().getTime() + remainingMilliseconds );
                localStorage.setItem('expiryDate', expiryDate.toISOString());
                        
                console.log(JSON.stringify(res.data.rowData[0]));
                  
                dispatch({
                        type:actionTypes.SET_USER,
                        user:res.data.rowData[0].cust_name,
                        token: res.data.token,
                        isAuth: res.data
                    });
              
                dispatch({
                    type:actionTypes.USER_INFO,
                    user_details:res.data.rowData[0]
                })

                swal( "Login" ,  "Login is succesfully !" ,  "success" );
                    history.push("/");  
                }else{
                    swal( "Login" ,  "Incorrect username or password !" ,  "error" );
                }
            })
            .catch(err=>{
                console.log(err);
                swal( "Login" ,  "Failed !" ,  "error" ); 
            });

            }
            else{
                swal( "Login" ,  "Please Input Correct Details !" ,  "error" );
            }
    }
            
    return (
        <div style={{backgroundColor:"#ff3f6c",position:'relative'}}>
        <div className="box" >
        <div className="box-fluid">
           
                    <h2 style={{textAlign:"center"}}>Login</h2>
                    <div className="group">
                        <label for="user" className="label" style={{paddingLeft:"0px"}}><MdEmail /> E-mail</label>
                        <input id="user" type="email" className="input"  onChange={(e)=>{setEmail(e.target.value)}}/>
                    </div>
                    <div className="group">
                        <label for="pass" className="label" style={{paddingLeft:"0px"}}><RiLockPasswordFill />Password</label>
                        <input id="pass" type="password" className="input" onChange={(e)=>{setPassword(e.target.value)}} data-type="password" />
                    </div>
                    <div className=" ">
                        <input id="check" type="checkbox" className="check" />
                        <label for="check" style={{cursor:"pointer"}}><span className="icon"></span> Keep me Signed in</label>
                    </div>
                    <div className="actions">
                            <button className="actionButton" onClick={login_in}>Sign In</button>
                             <Link to="/user_register" className="actionButton">Register</Link>          
                    </div>
                    <div className="foot-lnk">
                        <Link to="#forgot">Forgot Password?</Link>
                    </div>
                </div>
               
                </div>
            </div>
      

    )
}

export default Login;

