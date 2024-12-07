import './css/landingpage.css'
import { useNavigate } from 'react-router-dom'

export const Landing = ()=>{

    setTimeout(()=>{
        localStorage.removeItem('fromCart')
    },100)

    let navigate = useNavigate();

    const handleExploreFashionClick=()=>{
        document.getElementById('image1').className='landing_container_two_changeAnimation1'
        document.getElementById('image2').className='landing_container_two_changeAnimation2'
        document.getElementById('image3').className='landing_container_two_changeAnimation3'
        document.getElementById('image4').className='landing_container_two_changeAnimation4'
        document.getElementById('image5').className='landing_container_two_changeAnimation5'
        document.getElementById('image6').className='landing_container_two_changeAnimation6'
        document.getElementById('landing_container_three').className='landing_container_three_changeAnimation'
        document.getElementById('center_div').className='landing_container_centerdiv_changedAnimation'

        setTimeout(()=>{
            navigate('/home')
        }, 1400)
        
    }

    const handleJoinWithUsMouseMove=()=>{
        document.getElementById('landingpae_div_hidden').className='landingpae_div_visible'
    }
    const handleJoinWithUsMouseOut=()=>{
        setTimeout(()=>{
            document.getElementById('landingpae_div_hidden').className='landingpae_div_hidden'
        }, 1300)
    }
    const handleJoinWithUsSignUpClick=()=>{
        document.getElementById('image1').className='landing_container_two_changeAnimation1'
        document.getElementById('image2').className='landing_container_two_changeAnimation2'
        document.getElementById('image3').className='landing_container_two_changeAnimation3'
        document.getElementById('image4').className='landing_container_two_changeAnimation4'
        document.getElementById('image5').className='landing_container_two_changeAnimation5'
        document.getElementById('image6').className='landing_container_two_changeAnimation6'
        document.getElementById('landing_container_three').className='landing_container_three_changeAnimation'
        document.getElementById('center_div').className='landing_container_centerdiv_changedAnimation'
        setTimeout(()=>{
            navigate('/signUpEmployee')
        },1400)
    }
    const handleJoinWithUsLoginClick=()=>{
        document.getElementById('image1').className='landing_container_two_changeAnimation1'
        document.getElementById('image2').className='landing_container_two_changeAnimation2'
        document.getElementById('image3').className='landing_container_two_changeAnimation3'
        document.getElementById('image4').className='landing_container_two_changeAnimation4'
        document.getElementById('image5').className='landing_container_two_changeAnimation5'
        document.getElementById('image6').className='landing_container_two_changeAnimation6'
        document.getElementById('landing_container_three').className='landing_container_three_changeAnimation'
        document.getElementById('center_div').className='landing_container_centerdiv_changedAnimation'
        setTimeout(()=>{
            navigate('/loginEmployee')
        },1400)
    }
    return(
        <div className="landing_container_one">
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='main_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div style={{display:"flex", justifyContent:"space-evenly"}}>
                <img className="landing_container_two_image1" id='image1' src={require("../images/landing_dress1.png")} style={{height:"500px"}} alt="imae1"/>
                <img className="landing_container_two_image2" id='image2' src={require("../images/landing_dress2.png")} style={{height:"750px"}} alt="imae2"/> 
                <img className="landing_container_two_image3" id='image3' src={require("../images/landing_dress3.png")} style={{height:"500px"}} alt="imae3"/>
                <img className="landing_container_two_image4" id='image4' src={require("../images/landing_dress4.png")} style={{height:"750px"}} alt="imae4"/> 
                <img className="landing_container_two_image5" id='image5' src={require("../images/landing_dress5.png")} style={{height:"500px"}} alt="imae5"/>
                <img className="landing_container_two_image6" id='image6' src={require("../images/landing_dress6.png")} style={{height:"750px"}} alt="imae6"/> 
            </div>
            <div className="landing_container_three" id='landing_container_three'>
                <span className="landing_container_three_head">LoomCraft</span>
                <span style={{fontStyle:"italic"}}>-Welcome to our website<span style={{fontStyle:"normal"}}>😊</span></span>
            </div>
            <center id='center_div' style={{position:"relative", zIndex:"2"}}>
                <button className="landingpage_button" onClick={handleExploreFashionClick}>Explore Fashion 🤓</button>
                <button className="landingpage_button" onMouseOver={handleJoinWithUsMouseMove} onMouseOut={handleJoinWithUsMouseOut}>Join With Us 🤝</button>
                <div className='landingpae_div_hidden' id='landingpae_div_hidden'>
                    <hr style={{width:"50px",position:"absolute",marginLeft:"-250px",marginTop:"-30px",transform:"rotate(-45deg)",height:"2px"}}></hr>
                    <button className="landingpae_div_hidden_button" onClick={handleJoinWithUsLoginClick}>Login🤓</button><br></br>
                    <hr style={{width:"50px",position:"absolute",marginLeft:"-250px",marginTop:"40px",transform:"rotate(45deg)",height:"2px"}}></hr>
                    <button className="landingpae_div_hidden_button" onClick={handleJoinWithUsSignUpClick}>SignUp🛂</button>
                </div>
            </center>
        </div>
    )
}