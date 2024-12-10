import './css/help.css'
import { Navbar } from './nav'
export const Help=()=>{

    setTimeout(()=>{
        localStorage.removeItem('fromCart')
    },100)

    function start(str){
        let main_div=document.getElementById('help_container_three_chat_div');

        let p_reply=document.createElement('p')
        p_reply.className="help_container_messageReceived";
        p_reply.innerHTML="Setting up things🤖 "

        let p1=document.createElement('span')
        p1.className='loading_animation'
        p1.innerHTML="•"

        let p2=document.createElement('span')
        p2.className='loading_animation'
        p2.innerHTML="•"

        let p3=document.createElement('span')
        p3.className='loading_animation'
        p3.innerHTML="•"

        p_reply.appendChild(p1)
        p_reply.appendChild(p2)
        p_reply.appendChild(p3)

        main_div.appendChild(p_reply)
        
        setTimeout(()=>{
            p_reply.innerHTML=str;
        }, 3090)

        
    }

    setTimeout(()=>{
        start("Hello there, How Can I help you.")
        document.getElementById('help_container_questions_div_p').style.pointerEvents='none'
        document.getElementById('navbar').style.pointerEvents='none'
    },10)

    setTimeout(()=>{
        document.getElementById('help_container_questions_div_p').style.pointerEvents=''
        document.getElementById('navbar').style.pointerEvents=''
    }, 3090)
    
    const handleQuestionClick=(e)=>{
        document.getElementById('help_container_questions_div_p').style.pointerEvents='none'
        document.getElementById('navbar').style.pointerEvents='none'
        let main_div=document.getElementById('help_container_three_chat_div');

        let p_reply=document.createElement('p')
        p_reply.className="help_container_messageReceived";

        let p1=document.createElement('span')
        p1.className='loading_animation'
        p1.innerHTML="•"

        let p2=document.createElement('span')
        p2.className='loading_animation'
        p2.innerHTML="•"

        let p3=document.createElement('span')
        p3.className='loading_animation'
        p3.innerHTML="•"

        p_reply.appendChild(p1)
        p_reply.appendChild(p2)
        p_reply.appendChild(p3)


        let p_question=document.createElement('p');
        p_question.innerHTML=e.target.innerHTML;
        p_question.className='help_container_messageSent';

        main_div.appendChild(p_question)

        main_div.appendChild(p_reply)
        main_div.scrollTop=main_div.scrollHeight

        if(e.target.innerHTML === " What is this XYZ bug? "){
            setTimeout(()=>{
                p_reply.innerHTML="This bug can be solved when our collaborator calls you."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Need to Update my details but can't able to? "){
            setTimeout(()=>{
                p_reply.innerHTML="Navigate to /home and login. Then proceed with right most option provided."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " How should I check my things? "){
            setTimeout(()=>{
                p_reply.innerHTML="All the required details will be shown once you go to home page."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Is there any refund feture in here? "){
            setTimeout(()=>{
                p_reply.innerHTML="The refund feature will only be applicable if you have valid reason."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " How good is your service? "){
            setTimeout(()=>{
                p_reply.innerHTML="This service is of 5 star, which even dominates amazon when it comes to handloom fashions."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Is this process trust worthy? "){
            setTimeout(()=>{
                p_reply.innerHTML="💯"
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " How should I complete my SignIn. "){
            setTimeout(()=>{
                p_reply.innerHTML="SignUp proces requires username, mobile number, DOB, gender password(Strong)."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Who developed this? "){
            setTimeout(()=>{
                p_reply.innerHTML="Developed by Azmatulla and Santhosh"
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Can I do this? "){
            setTimeout(()=>{
                p_reply.innerHTML="Yes, absolutely. But requires a good knowledge over designing and intermediate level knowledge of React and SpringBoot."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }else if(e.target.innerHTML === " Specify the process to complete a booking in this website. "){
            setTimeout(()=>{
                p_reply.innerHTML="This is a really big process, cannot be done in single reply...😮‍💨."
                document.getElementById('help_container_questions_div_p').style.pointerEvents=''
                document.getElementById('navbar').style.pointerEvents=''
            }, 3090)
        }
    }

    return(
        <div className='help_container_one'>
            <div id='navbar'>
                <Navbar />
            </div>
            <div className='help_container_two'>
                <img src={require('../images/help.png')} alt='img' className='help_container_two_img'/>
                <div className='help_container_three'>
                    <div className='help_container_three_chat_div' id='help_container_three_chat_div'>
                    </div>
                    <div className='help_container_questions_div'>
                        <p className='help_container_questions_div_p' id='help_container_questions_div_p'>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> What is this XYZ bug? </span> 
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Need to Update my details but can't able to? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> How should I check my things? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Is there any refund feture in here? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> How good is your service? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Is this process trust worthy? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> How should I complete my SignIn. </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Who developed this? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Can I do this? </span>
                            <span className='help_container_questions_div_span' onClick={handleQuestionClick}> Specify the process to complete a booking in this website. </span>
                        </p>
                     </div>
                </div>
            </div>
        </div>
    )
}

