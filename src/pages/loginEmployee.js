import './css/loginEmployee.css'
import { useNavigate } from 'react-router-dom'
import axios from "axios"

export const LoginEmployee = () =>{

    setTimeout(()=>{
        localStorage.removeItem('fromCart')
    },100)

    let navigate= useNavigate();

    const handleBackClick=()=>{
        navigate('/');
    }

    const validate=(e)=>{
        e.preventDefault()
        let username=document.getElementById('login_username').value
        axios.get('http://localhost:9001/employee/login/'+username)
        .then(res=>{
            localStorage.setItem('username_employee',res.data.username)
            localStorage.setItem('password_employee',res.data.password)
            localStorage.setItem('mobileNumber_employee',res.data.mobile_number)
            localStorage.setItem('dateOfBirth_employee',res.data.date_of_birth)
            localStorage.setItem('gender_employee',res.data.gender)
            localStorage.setItem('error_employee', res.data)
        })
        .catch(err=>{
            localStorage.removeItem('username_employee')
            localStorage.removeItem('password_employee')
            localStorage.removeItem('mobileNumber_employee')
            localStorage.removeItem('dateOfBirth_employee')
            localStorage.removeItem('gender_employee')
            localStorage.setItem('isLoggedIn_employee', false)
            localStorage.setItem('error_employee', err.data)
        })

        let err;
        setTimeout(()=>{
            err=(localStorage.getItem('error_employee'))
            
            if(err!=="Stop"){
                let password = document.getElementById('login_password').value
                if(password === localStorage.getItem('password_employee')){
                    localStorage.setItem('isLoggedIn_employee', true)
                    navigate('/homeEmployee')
                }
                else   
                    alert('Incorrect Password')
            }else{
                alert("A user with provided username doesn't exist")
            }
       },100)

    }

    const validateName=(e)=>{
        let login_username= document.getElementById('login_username')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')|| (char>='0' && char<='9') || char==='@' || char==='$' || char==='_')){
            login_username.value=login_username.value.slice(0, login_username.value.length-1);
            document.getElementById('loginEmployee_container_three_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('loginEmployee_container_three_label').style.animation=''
            },1000)
        }
    }

    const handleEyeClick=()=>{
        let t=document.getElementById('login_password').type
        if(t==='password'){
            document.getElementById('login_password').type='text'
            document.getElementById('loginEmployee_container_three_input_small_eye_cross').style.opacity=0;
        }
        else{
            document.getElementById('login_password').type='password'
            document.getElementById('loginEmployee_container_three_input_small_eye_cross').style.opacity=1;  
        }
    }
    return(
        <div className="loginEmployee_container_one">
            <div className="loginEmployee_container_two">
                <div className='loginEmployee_container_extra'>
                    <strong style={{fontSize:"16px", width:"280px",textAlign:"center", position:"absolute", marginTop:"-300px"}}>Welcome partner. LogIn to your account to know all the details regarding our Sales.</strong><br></br>
                    <strong style={{textDecoration:"underline"}}>Details Like</strong>
                    <p>1. Revenue generated 💲</p>
                    <p>2. A detailed report regarding your sales 📃</p>
                    <p>3. Orders placed ✅</p>
                    <p>4. Mails regarding or from the customers 📲</p>
                </div>
                <form onSubmit={validate}>
                    <div className='loginEmployee_container_three'>
                        <h1>Login 🔐</h1><br></br>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <label className='loginEmployee_container_three_label' id='loginEmployee_container_three_label'>Username</label>
                            <input type="text" className='loginEmployee_container_three_input' id='login_username' placeholder='***** Enter your registered username *****' required onChange={validateName}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px 30px 0px"}}>
                            <label className='loginEmployee_container_three_label'>Password</label>
                            <input type="password" className='loginEmployee_container_three_input' id='login_password' placeholder='***** Enter the respective password *****' required minLength={8}/>
                            <div className='loginEmployee_container_three_input_small_eye' onClick={handleEyeClick}>👁️<p id='loginEmployee_container_three_input_small_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>
                        </div>
                        <button className='loginEmployee_container_three_button_href' type='button'>forgot password? reset here</button><br></br>
                        <button className='loginEmployee_container_three_button' type='submit'>Login</button>
                        <button className='loginEmployee_container_three_button' onClick={handleBackClick} type='button'>Back</button>
                    </div>
                </form>
            </div>
        </div>
    )
}