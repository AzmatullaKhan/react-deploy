import './css/signUpEmployee.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export const SignUpEmployee = () =>{

    setTimeout(()=>{
        localStorage.removeItem('fromCart')
    },100)

    const navigate = useNavigate()

    const validateName=(e)=>{
        let signup_username= document.getElementById('signup_username')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z')|| (char>='0' && char<='9') || char==='@' || char==='$' || char==='_')){
            signup_username.value=signup_username.value.slice(0, signup_username.value.length-1);
            document.getElementById('username_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('username_label').style.animation=''
            },1000)
        }
    }

    const handleEyeClick=()=>{
        let t=document.getElementById('signup_password').type
        if(t==='password'){
            document.getElementById('signup_password').type='text'
            document.getElementById('signupEmployee_container_two_input_small_eye_cross').style.opacity=0;
        }
        else{
            document.getElementById('signup_password').type='password'
            document.getElementById('signupEmployee_container_two_input_small_eye_cross').style.opacity=1;  
        }
    }

    const validateNumber=()=>{
        let signup_number=document.getElementById('signup_number');
        let last_char=signup_number.value[signup_number.value.length-1];
        if(!(last_char>='0' && last_char<='9')){
            signup_number.value=signup_number.value.slice(0, signup_number.value.length-1);
            document.getElementById('number_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            document.getElementById('signup_home').style.pointerEvents='none'
            setTimeout(()=>{
                document.getElementById('number_label').style.animation=''
                document.getElementById('signup_home').style.pointerEvents=''
            },2000)
        }
        else if(signup_number.value.length>3){
            let v=signup_number.value
            document.getElementById('signup_container_three_numberLast').textContent=v.slice(v.length-3, v.length)
        }
    } 
    function getTodayDate(){
        let d=new Date();
        let today=d.getFullYear()+"-";
        if(d.getMonth()<=8)
            today+="0"+(Number(d.getMonth())+1)+"-"
        else
            today+=(Number(d.getMonth())+1)+"-"
        today+=d.getDate();
        return today;
    }

    const handleBackClick=()=>{
        navigate('/')
    }

    function validatePassword(pass){
        let cap=Number(0);
        let sp=Number(0);
        let num=Number(0);
        for(let i=0;i<pass.length;i++){
            if((pass[i]>='A' && pass[i]<='Z') && !cap)
                cap=1;
            if((pass[i]==='@' || pass[i]==='#' || pass[i]==='$' || pass[i]==='_' || pass[i]==='&') && !sp)
                sp=1;
            else if((pass[i]>='0' && pass[i]<='9') && !num)
                num=1;
        }
        return (cap && sp && num)
    }

    function getGender(){
        if(document.getElementById('signup_genderMale').checked)
            return 'Male'
        else if(document.getElementById('signup_genderFemale').checked)
            return 'Female'
        else
            return 'Others'
    }

    const validate=(e)=>{
        e.preventDefault();
        let pass=validatePassword(document.getElementById('signup_password').value)

        if(!pass){
            document.getElementById('password_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            document.getElementById('signup_home').style.pointerEvents='none'
            setTimeout(()=>{
                document.getElementById('password_label').style.animation=''
                document.getElementById('signup_home').style.pointerEvents=''
            },2000)
        }

        if(pass){
            let username =document.getElementById('signup_username').value
            let mobileNumber =document.getElementById('signup_number').value
            let pass1;
            let pass2;

            axios.get('https://spring-deploy-production-2a84.up.railway.app/employee/checkUsername/'+username)
            .then(res=>{(localStorage.setItem('respponseUsername', res.data))})
            .catch((err)=>{console.log(err.message+"1")})

            
            axios.get('https://spring-deploy-production-2a84.up.railway.app/employee/checkMobileNumber/'+mobileNumber)
            .then(res=>{localStorage.setItem('responseMobileNumber',res.data)})
            .catch((err)=>{console.log(err.message)})
            
            setTimeout(()=>{
                pass1=(localStorage.getItem('respponseUsername'))
                pass2=(localStorage.getItem('responseMobileNumber'))

                if(pass1==='stop' && pass2==='stop')
                    alert('A user with same mobile number and username already exist')
                else if(pass1==='stop')
                    alert('A user with same Username already exists')
                else if(pass2==='stop')
                    alert('A user with same Mobile Number already exist')
                else{
                    document.getElementById('signupEmployee_container_three').className='signupEmployee_container_three_visible'
                    document.getElementById('signUpEmployee_container_two').style.pointerEvents='none'
                }
            },100)


        }
    }

    const handleOtpChange=(e)=>{
        if(e.target.value>='0' && e.target.value<='9'){
            e.target.type='text'; 
            setTimeout(()=>{e.target.type='password'}, 1000)
        }
        else{
            e.target.value=''
        }
    }

    const otpValidation=(e)=>{
        e.preventDefault()

        let v1=document.getElementById('signupEmployee_container_three_input_1').value
        let v2=document.getElementById('signupEmployee_container_three_input_2').value
        let v3=document.getElementById('signupEmployee_container_three_input_3').value
        let v4=document.getElementById('signupEmployee_container_three_input_4').value

        if(v1==='1' && v2==='2' && v3==='3' && v4==='4'){
            let username =document.getElementById('signup_username').value
            let password =document.getElementById('signup_password').value
            let mobileNumber =document.getElementById('signup_number').value
            let dateOfBirth =document.getElementById('signup_date').value
            let gender= getGender()

            const Employee={
                username:username,
                password:password,
                mobile_number:mobileNumber,
                date_of_birth:dateOfBirth,
                gender:gender
            }

            axios.post('https://spring-deploy-production-2a84.up.railway.app/employee/saveEmployee',Employee)
            .then(res=>{return res})
            .catch((err)=>{console.log(err.message)})

            navigate('/loginEmployee')
        }
        else{
            alert('Enter Correct OTP, hint:1234')
        }

    }

    return(
        <div className="signUpEmployee_container_one">
            <form action='#' onSubmit={validate} className='signUpEmployee_container_extra'>
                <div className='signUpEmployee_container_extra_one'>
                    <strong style={{fontSize:"16px",textAlign:"center",width:"200px",position:"absolute",marginTop:"-450px"}}>We as a team can acheive anything that is possible through this.</strong>
                    <strong style={{fontSize:"16px", textDecoration:"underline"}}>Benefits by collaborating with us🤝</strong>
                    <p style={{fontSize:"14px"}}>1. Access to Global Market.🌍</p>
                    <p style={{fontSize:"14px"}}>2. Increased Brand Visibility.📈</p>
                    <p style={{fontSize:"14px"}}>3. Collaborative Network.🛜</p>
                    <p style={{fontSize:"14px"}}>4. Sustainability Advocacy.👐</p>
                    <p style={{fontSize:"14px"}}>5. Digital Transformation Support.</p>
                    <strong style={{fontSize:"16px",textAlign:"center",width:"200px",position:"absolute",marginTop:"450px"}}>Thank You🙏</strong>
                </div>
                <div className="signUpEmployee_container_two" id='signUpEmployee_container_two'><br></br><br></br>
                    <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                        <div style={{alignSelf:"center"}}><label className='signUpEmployee_container_two_label' id='username_label'>Username</label><span className='signupEmployee_container_two_label_errormessage' id='signUpEmployee_container_two_label_one'>  *Use only (@,$,_) in your name</span></div>
                        <input type="text" className='signupEmployee_container_two_input' placeholder='***** Enter name you want to register *****' id="signup_username" required onChange={validateName}/>
                    </div><br></br>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start", margin:"10px 0px", height:"70px"}}>
                        <label className='signUpEmployee_container_two_label' id='password_label'>Password</label>
                        <input type="password" className='signupEmployee_container_two_input' placeholder='***** Enter Password *****' required id='signup_password' minLength={8}/>
                        <div className='signupEmployee_container_two_input_small_eye' onClick={handleEyeClick}>👁️<p id='signupEmployee_container_two_input_small_eye_cross' style={{position:'relative', top:'-32px', left:'3px', fontSize:"24px", opacity:'1', marginTop:"7px"}}>/</p></div>
                    </div><br></br>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",margin:"10px 0px", height:"70px"}}>
                        <div  style={{alignSelf:"center"}}><label className='signUpEmployee_container_two_label' id='number_label'>Number</label><span className='signupEmployee_container_two_label_errormessage'> *Only Numbers(0-9)</span></div>
                        <input type="text" className='signupEmployee_container_two_input' placeholder='***** Enter your mobile number *****' required onChange={validateNumber} id='signup_number' maxLength={10} minLength={10}/>
                    </div><br></br>
                    <div style={{display:'flex', flexDirection:'column', justifyContent:"flex-start",margin:"10px 0px", height:"70px"}}>
                        <label className='signUpEmployee_container_two_label'>Date Of Birth</label>
                        <input type="date" className='signupEmployee_container_two_input' max={getTodayDate()} required id="signup_date"/>
                    </div><br></br>
                    <div style={{display:'flex', flexDirection:'column',width:"100%",margin:"10px 0px", height:"70px"}}>
                        <div style={{alignSelf:"center"}}><label className='signUpEmployee_container_two_label' id='gender_label'>Gender</label><span className='signupEmployee_container_two_label_errormessage' id='signup_container_two_label_two'>  *Must select gender</span></div>
                        <div className='signupEmployee_container_two_div_radio'>
                            <input type="radio" value="Male" name="gender" id='signup_genderMale' defaultChecked/> Male<p style={{marginRight:"12px"}} ></p>
                            <input type="radio" value="Female" name="gender" id='signup_genderFemale' /> Female<p style={{marginRight:"12px"}} ></p>
                            <input type="radio" value="Other" name="gender" id='signup_genderOther' /> Other<p style={{marginRight:"12px"}} ></p>
                        </div>
                    </div>
                    <div style={{display:"flex",alignSelf:"center"}}>
                        <button className='signup_container_two_button' type='submit'>SignUp</button>
                        <button className='signup_container_two_button' type='button' id='signup_home' onClick={handleBackClick}>Back</button>
                    </div>
                </div>
            </form>
            <div className='signupEmployee_container_three_hidden' id='signupEmployee_container_three'>
                <button className='signupEmployee_container_three_button_close' type='button' onClick={()=>{window.location.reload()}}>X</button>
                <h2>OTP has been sent to the number ending </h2>
                <h2 style={{marginTop:'-12px', display:'flex', alignItems:'center'}}>with ***** **<p id='signup_container_three_numberLast'></p> ✅</h2>
                <p>* Might take some while to receive a OTP</p>
                <form onSubmit={otpValidation}>
                    <div style={{display:'flex'}}>
                        <input type='text' className='signupEmployee_container_three_input' id='signupEmployee_container_three_input_1' onChange={handleOtpChange} minLength={1} maxLength={1} required/>
                        <input type='text' className='signupEmployee_container_three_input' id='signupEmployee_container_three_input_2' onChange={handleOtpChange} minLength={1} maxLength={1} required/>
                        <input type='text' className='signupEmployee_container_three_input' id='signupEmployee_container_three_input_3' onChange={handleOtpChange} minLength={1} maxLength={1} required/>
                        <input type='text' className='signupEmployee_container_three_input' id='signupEmployee_container_three_input_4' onChange={handleOtpChange} minLength={1} maxLength={1} required/>
                    </div>
                    <button className='signupEmployee_container_three_button' type='submit'>Submit</button>
                 </form>
            </div>  
        </div>
    )
}