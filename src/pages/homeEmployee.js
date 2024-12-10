import './css/homeEmployee.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios';
import { PieChart } from '@mui/x-charts/PieChart';
export const HomeEmployee=()=>{

    let piechart_data1 = []
    let piechart_data2 = []

    // const data1 = [
    //     { label: 'Group A', value: 400 },
    //     { label: 'Group B', value: 300 },
    //     { label: 'Group C', value: 300 },
    //     { label: 'Group D', value: 200 },
    //     { label: 'Group E', value: 278 },
    //     { label: 'Group F', value: 189 },
    //   ];
      
    //   const data2 = [
    //     { label: 'Group A', value: 2400 },
    //     { label: 'Group B', value: 4567 },
    //     { label: 'Group C', value: 1398 },
    //     { label: 'Group D', value: 9800 },
    //     { label: 'Group E', value: 3908 },
    //     { label: 'Group F', value: 4800 },
    //   ];

    setTimeout(()=>{
        localStorage.removeItem('fromCart')
    },100)
    
    let navigate= useNavigate();

    let main_data = []

    axios.get('http://localhost:9001/images/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    setTimeout(()=>{
        document.getElementById('employee_username').textContent=localStorage.getItem('username_employee')
        document.getElementById('homeEmployee_main_container_three_mail_containerOne_name').value = localStorage.getItem('username_employee')
    },10)
    setTimeout(()=>{
        let main_div = document.getElementById('homeEmployee_main_container_four')
        console.log(main_data)
        if(main_div.childNodes.length===1){
            for(let i=0;i<main_data.length;i=i+1){
                if(main_data[i].publisher === document.getElementById('employee_username').textContent){
    
                    let div = document.createElement('div')
                    div.className = 'homeEmployee_main_container_four_one'
    
                    let p1 = document.createElement('p')
                    p1.style.maxWidth = "40px"
                    p1.style.minWidth = "40px"
                    p1.textContent = (i+1)
    
                    let p2 = document.createElement('p')
                    p2.style.maxWidth = "250px"
                    p2.style.minWidth = "250px"
                    p2.textContent = main_data[i].name
    
                    let p3 = document.createElement('p')
                    p3.style.minWidth = "100px"
                    p3.style.maxWidth = "100px"
                    p3.textContent = main_data[i].cost
    
                    let p4 = document.createElement('p')
                    p4.style.minWidth = "200px"
                    p4.style.maxWidth = "200px"
                    p4.textContent = main_data[i].materialUsed
    
                    let p5 = document.createElement('p')
                    p5.style.minWidth = "600px"
                    p5.style.maxWidth = "600px"
                    p5.textContent = main_data[i].description
    
                    let p6 = document.createElement('p6')
                    p6.style.minWidth = "50px"
                    p6.style.maxWidth = "50px"
                    p6.textContent = main_data[i].id
    
                    div.appendChild(p1)
                    div.appendChild(p2)
                    div.appendChild(p3)
                    div.appendChild(p4)
                    div.appendChild(p5)
                    div.appendChild(p6)
    
                    main_div.appendChild(div)
                }
            }
        }
    },3000)

    const handleLogoutClick=()=>{
        localStorage.removeItem('username_employee')
        localStorage.removeItem('password_employee')
        localStorage.removeItem('mobileNumber_employee')
        localStorage.removeItem('dateOfBirth_employee')
        localStorage.removeItem('gender_employee')
        localStorage.setItem('isLoggedIn_employee', false)
        localStorage.removeItem('error_employee')
        // localStorage.removeItem('piechart1')
        // localStorage.removeItem('piechart2')
        navigate('/loginEmployee')
    }
    const handlePostOrderClick=()=>{
        document.getElementById('homeEmployee_main_container_three_postOrder').className='homeEmployee_main_container_three_postOrder_visible'
        document.getElementById('homeEmployee_main_container_three_postOrder').style.animation='homeEmployee_main_container_three_postOrder_visible-animation 1s ease 0s'

    }
    const validateName=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z') || char===" ")){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name_label').style.animation=''
            },1000)
        }
    }
    const validateCost=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost')
        let char=e.target.value;
        char=char[char.length-1]
        if(!(char>='0' && char<='9')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost_label').style.animation=''
            },1000)
        }
    }
    const validateMaterialUsed=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials')
        let char=e.target.value;
        char=char[char.length-1]
        if(!((char>='a' && char<='z') ||(char>='A' && char<='Z') || char===',')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials_label').style.animation=''
            },1000)
        }
    }






    const validateNoOfPhotos=(e)=>{
        let name= document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos')
        let char=e.target.value;
        char=char[char.length-1]
        if(!(char>='5' && char<='7')){
            name.value=name.value.slice(0, name.value.length-1);
            document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label').style.animation='error_animation-animation 1s ease-in-out 0s'
            let main_div = document.getElementById('image_container_postorder');
            while(main_div.firstChild){
                main_div.removeChild(main_div.firstChild)
            }
            setTimeout(()=>{
                document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label').style.animation=''
            },1000)
        }else{
            let main_div = document.getElementById('image_container_postorder');
            while(main_div.firstChild){
                main_div.removeChild(main_div.firstChild)
            }
            for(let i=1;i<=Number(char);i=i+1){
                let photo = document.createElement('input')
                photo.type='file'
                photo.id='photo_'+i;
                photo.accept='image/*'
                photo.className='photo_input_holder'
                main_div.appendChild(photo)
            }
            let button = document.createElement('button')
            button.className='homeEmployee_main_container_three_postOrder_button'
            button.innerHTML="Submit"
            button.type='submit'
            button.onclick=handleSubmit
            main_div.appendChild(button)
        }
    }
    const handleSubmit = async () => {
        const formData = new FormData();
        const numberOfPhotos = document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos').value;
        
        formData.append('name', document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name').value);
        formData.append('cost', document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost').value);
        formData.append('materialused', document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials').value);
        formData.append('description', document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_desc').value);
        formData.append('publisher', document.getElementById('employee_username').textContent)
        
        for (let i = 1; i <= numberOfPhotos; i++) {
            const photo = document.getElementById(`photo_${i}`);
            if (photo.files[0]) {
                formData.append(`data${i}`, photo.files[0]);
            }
        }
    
        try {
            const response = await axios.post('http://localhost:9001/images/upload', formData);
            handleClosePostOrderClick();
            alert('Data rendered successfully')
            console.log(response)
        } catch (error) {
            alert('Error Submitting Order')
        }
    };
    



    const handleClosePostOrderClick = () =>{
        document.getElementById('homeEmployee_main_container_three_postOrder').style.animation='homeEmployee_main_container_three_postOrder_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_postOrder').className='homeEmployee_main_container_three_postOrder_hidden'
        },900)
        let main_div = document.getElementById('image_container_postorder');
        while(main_div.firstChild){
            main_div.removeChild(main_div.firstChild)
        }
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_cost').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_materials').value=""
        document.getElementById('homeEmployee_main_container_three_postOrder_containerOne_name').value=""
    }
    const handleMailClick=()=>{
        document.getElementById('homeEmployee_main_container_three_mail').className='homeEmployee_main_container_three_mail_visible'
        document.getElementById('homeEmployee_main_container_three_mail').style.animation='homeEmployee_main_container_three_mail_visible-animation 1s ease 0s'
    }
    const handleCloseMailClick = () =>{
        document.getElementById('homeEmployee_main_container_three_mail').style.animation='homeEmployee_main_container_three_mail_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_mail').className='homeEmployee_main_container_three_mail_hidden'
        },900)
        document.getElementById('homeEmployee_main_container_three_mail_containerOne_name').value =""
        document.getElementById('homeEmployee_main_container_three_mail_containerOne_email').value=""
        document.getElementById('homeEmployee_main_container_three_mail_containerOne_subject').value=""
        document.getElementById('homeEmployee_main_container_three_mail_containerOne_desc').value=""
    }
    const handleOrderClick=()=>{
        // console.log(document.getElementById('orders_container_one').childNodes.length)
        if(document.getElementById('orders_container_one').childNodes.length===1){
            renderFunction()
        }
        document.getElementById('homeEmployee_main_container_three_orders').className='homeEmployee_main_container_three_orders_visible'
        document.getElementById('homeEmployee_main_container_three_orders').style.animation='homeEmployee_main_container_three_orders_visible-animation 1s ease 0s'
    }
    const handleCloseOrdersClick = () =>{
        document.getElementById('homeEmployee_main_container_three_orders').style.animation='homeEmployee_main_container_three_orders_hidden-animation 1s ease 0s'
        if(document.getElementById('orders_container_one').childNodes.length!==1){
            for(let i=0;i<order_data.length;i=i+1){
                let val = document.getElementById(order_data[i].id).textContent
                let status = order_data[i].deliveredstatus
                if(val === "✅" && status!=='delivered')
                    axios.post('http://localhost:9001/employeeOrder/updateStatus/'+order_data[i].id+"/delivered").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                else if(val === "❌" && status!=='notDone')
                    axios.post('http://localhost:9001/employeeOrder/updateStatus/'+order_data[i].id+"/notDone").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                else if(val === "🚚" && status!=='exporting')
                    axios.post('http://localhost:9001/employeeOrder/updateStatus/'+order_data[i].id+"/exporting").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                else if(val === "🗑️" && status!=='deleted')
                    axios.post('http://localhost:9001/employeeOrder/updateStatus/'+order_data[i].id+"/deleted").then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})

            }
        }
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_orders').className='homeEmployee_main_container_three_orders_hidden'
        },900)
    }
    const handleReportClick=()=>{
        if(document.getElementById('homeEmployee_main_container_three_report').childNodes.length ===2){
            renderReportOrders()
        }
        document.getElementById('homeEmployee_main_container_three_report').className='homeEmployee_main_container_three_report_visible'
        document.getElementById('homeEmployee_main_container_three_report').style.animation='homeEmployee_main_container_three_report_visible-animation 1s ease 0s'
    }
    const handleCloseReportClick = () =>{
        document.getElementById('homeEmployee_main_container_three_report').style.animation='homeEmployee_main_container_three_report_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_report').className='homeEmployee_main_container_three_report_hidden'
        },900)
    }
    const handleRevenueClick=()=>{
        document.getElementById('homeEmployee_main_container_three_revenue').className='homeEmployee_main_container_three_revenue_visible'
        document.getElementById('homeEmployee_main_container_three_revenue').style.animation='homeEmployee_main_container_three_revenue_visible-animation 1s ease 0s'
    }
    const handleCloseRevenueClick = () =>{
        document.getElementById('homeEmployee_main_container_three_revenue').style.animation='homeEmployee_main_container_three_revenue_hidden-animation 1s ease 0s'
        setTimeout(()=>{
            document.getElementById('homeEmployee_main_container_three_revenue').className='homeEmployee_main_container_three_revenue_hidden'
        },900)
    }

    const handleFormSubmit=(e)=>{
        e.preventDefault()
    }

    const handleMailSubmit = (e) =>{
        e.preventDefault();
        let username = document.getElementById('homeEmployee_main_container_three_mail_containerOne_name').value
        let email = document.getElementById('homeEmployee_main_container_three_mail_containerOne_email').value
        let subject = document.getElementById('homeEmployee_main_container_three_mail_containerOne_subject').value
        let description = document.getElementById('homeEmployee_main_container_three_mail_containerOne_desc').value

        let Email = {
            username, email, subject, description
        }

        axios.post('http://localhost:9001/employee/employeeEmail',Email)
        .then(res=>{return res})
        .then(handleCloseMailClick())
        .catch((err)=>{console.log(err.message)})
    }



    let username;

    setTimeout(()=>{
        username= localStorage.getItem('username_employee')
    },100)
    let order_data=[]
    axios.get('http://localhost:9001/employeeOrder/all').then(res=>{order_data=res.data}).catch(err=>{console.log(err)})

    let book_data =[]
    axios.get('http://localhost:9001/order/all').then((res)=>{book_data=res.data}).catch((err)=>{console.log(err)})
    

    const renderFunction=()=>{

        console.log(book_data)
        console.log(order_data)

        for(let i=0;i<order_data.length;i=i+1){
            let main_data_images = order_data[i].data1;
            if(order_data[i].dresspublisher === username){

                let main_div = document.createElement('div')
                main_div.className='orders_container_auto'
                

                let img_ele = document.createElement('img')
                img_ele.style.width="100px"
                img_ele.style.height="100px"
                img_ele.style.margin="0px 2px"
                img_ele.style.borderRadius="12px"
                img_ele.alt = 'image_'+i;
                img_ele.src = main_data_images

                let p1 = document.createElement('p')
                p1.textContent = i+1
                p1.style.width = '30px'
                p1.style.margin="0px 2px"
                p1.style.textAlign='center'

                let p2 = document.createElement('p')
                p2.style.width="130px"
                p2.style.margin="0px 2px"
                p2.textContent = order_data[i].buyername
                p2.style.textAlign='center'

                let p3 = document.createElement('p')
                p3.style.width ="130px"
                p3.style.textAlign='center'
                p3.style.margin="0px 2px"
                p3.textContent = order_data[i].buyernumber

                let p4 = document.createElement('p')
                p4.style.width = "40px"
                p4.textContent = order_data[i].buyersize
                p4.style.textAlign='center'
                p4.style.margin="0px 2px"

                let p5 = document.createElement('p')
                p5.style.width = "250px"
                p5.style.textAlign='center'
                p5.textContent =order_data[i].dressname
                p5.style.margin="0px 2px"

                let p6 = document.createElement('p')
                p6.style.textAlign='center'
                p6.style.width = "300px"
                p6.style.margin="0px 2px"
                p6.textContent = book_data[i].pincode +","+book_data[i].district+","+
                          book_data[i].city+","+book_data[i].address   


                let p7 = document.createElement('p')
                p7.style.textAlign='center'
                p7.style.width = "80px"
                p7.textContent=order_data[i].quantity

                let p9 = document.createElement('p')
                p9.textContent = "1"

                let p8 = document.createElement('p')
                p8.style.textAlign='center'
                p8.style.width = "80px"
                p8.id = order_data[i].id
                if(order_data[i].deliveredstatus==="notDone")
                    p8.textContent = "❌"
                else if(order_data[i].deliveredstatus==="exporting")
                    p8.textContent="🚚"
                else if(order_data[i].deliveredstatus==="delivered")
                    p8.textContent="✅"
                else if(order_data[i].deliveredstatus==="deleted")
                    p8.textContent="🗑️"
                if(p8.textContent!=="🗑️"){
                    p8.addEventListener('click',(e)=>{
                        let count = Number(p9.textContent)
                        if(count === 0)
                            document.getElementById(e.target.id).textContent = "❌"
                        else if(count === 1)
                            document.getElementById(e.target.id).textContent = "🚚"
                        else if (count === 2)
                            document.getElementById(e.target.id).textContent = "✅"
                        else if(count === 3)
                            document.getElementById(e.target.id).textContent = "🗑️"
                        count=(count+1)%4;
                        p9.textContent=count
                    })
                }

                

                main_div.appendChild(p1)
                main_div.appendChild(p2)
                main_div.appendChild(p3)
                main_div.appendChild(p4)
                main_div.appendChild(p5)
                main_div.appendChild(img_ele)
                main_div.appendChild(p6)
                main_div.appendChild(p7)
                main_div.appendChild(p8)

                document.getElementById('orders_container_one').appendChild(main_div)

                
            }
        }

    }


    const renderReportOrders = () =>{

        const mapUndone = new Map()
        const mapDone = new Map()
        let count = "1"

        for(let i=0;i<order_data.length;i=i+1){
            if(order_data[i].dresspublisher === username){
                if(mapUndone.get(order_data[i].dressname)){
                    mapUndone.set(order_data[i].dressname, mapUndone.get(order_data[i].dressname)+"1")
                    if(order_data[i].deliveredstatus === "delivered")
                        mapDone.set(order_data[i].dressname, mapDone.get(order_data[i].dressname)+"1")
                }
                else{
                    mapUndone.set(order_data[i].dressname, count)
                    if(order_data[i].deliveredstatus === "delivered")
                        mapDone.set(order_data[i].dressname, "1")
                    else
                        mapDone.set(order_data[i].dressname, "0")
                }
            }
        }
            
        let index = Number(1)
        mapUndone.forEach(function(val, key) {
            let main_div = document.createElement('div')
            main_div.className = 'report_container_auto'

            let p1 = document.createElement('p')
            p1.textContent = index
            p1.style.width = "50px"
            p1.style.textAlign = "center"

            let p2 = document.createElement('p')
            p2.style.textAlign = "center"
            p2.style.width = "250px"
            p2.textContent = key

            let p3 = document.createElement('p')
            p3.style.textAlign = "center"
            p3.style.width = "100px"
            p3.textContent = val

            let p4 = document.createElement('p')
            p4.style.textAlign = "center"
            p4.style.width = "100px"
            p4.textContent = (mapDone.get(key)==="0")?"0":mapDone.get(key).length


            main_div.appendChild(p1)
            main_div.appendChild(p2)
            main_div.appendChild(p3)
            main_div.appendChild(p4)

            document.getElementById('homeEmployee_main_container_three_report').appendChild(main_div)

            index = index+1

        });

    }

    const renderPiechartData = () =>{

        const mapUndone = new Map()
        const mapDone = new Map()
        const mapCost = new Map()
        let count = "1"

        localStorage.removeItem('piechart1')
        localStorage.removeItem('piechart2')

        for(let i=0;i<order_data.length;i=i+1){
            if(order_data[i].dresspublisher === username){
                if(mapUndone.get(order_data[i].dressname)){
                    mapUndone.set(order_data[i].dressname, mapUndone.get(order_data[i].dressname)+"1")
                    if(order_data[i].deliveredstatus === "delivered")
                        mapDone.set(order_data[i].dressname, mapDone.get(order_data[i].dressname)+"1")
                }
                else{
                    mapUndone.set(order_data[i].dressname, count)
                    mapCost.set(order_data[i].dressname, order_data[i].dresscost)
                    if(order_data[i].deliveredstatus === "delivered")
                        mapDone.set(order_data[i].dressname, "1")
                    else
                        mapDone.set(order_data[i].dressname, "0")
                }
            }

        }
        // console.log(mapUndone)
        // console.log(mapDone)
        // console.log(mapCost)

        mapUndone.forEach(function(val, key) {
            piechart_data1.push({label:key, value:val}) 
            piechart_data2.push({label:key, value:Number(mapCost.get(key))*Number(val)})
        });

        localStorage.setItem('piechart1', JSON.stringify(piechart_data1))
        localStorage.setItem('piechart2', JSON.stringify(piechart_data2))
        }

        setTimeout(()=>{
            renderPiechartData()
        },2000)

    return(
        <div className="homeEmployee_main_container_one">
            <div className="homeEmployee_main_container_two">
                <h1 style={{fontFamily:"cursive", margin:"4px"}}>Welcome,<span id="employee_username">Username</span></h1>
                <p style={{fontFamily:"cursive", margin:"4px"}}>Check the revenue generated💰</p>
            </div>
            <div className="homeEmployee_main_container_three">
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleRevenueClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/revenue.png')} alt='revenue' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Revenue</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleReportClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/report.png')} alt='report' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Report</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleOrderClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/order.png')} alt='order' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Orders</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleMailClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/mails.png')} alt='mail' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Mail</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handlePostOrderClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/createOrder.png')} alt='createOrder' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Post Order</p>
                </div>
                <div style={{display:"flex", alignItems:"center",flexDirection:"column", height:"100px", margin:"10px"}} onClick={handleLogoutClick}>
                    <button className="homeEmployee_main_container_three_button"><img src={require('../images/logout.png')} alt='logout' style={{height:"60px", width:"60px"}}/></button>
                    <p style={{margin:"0", fontWeight:"bold", fontSize:"18px"}}>Logout</p>
                </div>
            </div>
            <hr></hr>
            <p style={{textAlign:"center"}}>The List of Items You Published🤝</p>
            <div className="homeEmployee_main_container_four" id='homeEmployee_main_container_four'>
                <div className='homeEmployee_main_container_four_one' style={{backdropFilter:"blur(22px)", position:"sticky", top:"0"}}>
                    <p style={{position:"absolute", marginLeft:"-1375px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>Sno</p>
                    <p style={{position:"absolute", marginLeft:"-1200px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>Name</p>
                    <p style={{position:"absolute", marginLeft:"-650px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>Cost</p>
                    <p style={{position:"absolute", marginLeft:"-350px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>Material Used</p>
                    <p style={{position:"absolute", marginLeft:"100px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>Description</p>
                    <p style={{position:"absolute", marginLeft:"1290px", textDecoration:"underline", fontWeight:"bold",fontStyle:"italic"}}>ID</p>
                </div>
            </div>
       
            <div className='homeEmployee_main_container_three_postOrder_hidden' id='homeEmployee_main_container_three_postOrder'>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleClosePostOrderClick}>X</span>
                <div className='homeEmployee_main_container_three_postOrder_constraints_visible' id='homeEmployee_main_container_three_postOrder_constraints'>
                    <strong style={{color:"#fff"}}>Make sure to remember</strong>
                    <p style={{margin:"0"}}>1. Once the order is created, you cannot revert it.</p>
                    <p style={{margin:"0"}}>2. Becareful with the data being entered.</p>
                    <p style={{margin:"0"}}>3. If you want to remove the item,a mail need to be sent to company.</p>
                </div>
                <hr></hr>
                <form className='homeEmployee_main_container_three_postOrder_containerOne' onSubmit={handleFormSubmit}>
                    <div style={{height:"400px"}}>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_name_label'>Name</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Alphabets(A-Z, a-z)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_name' placeholder='***** Enter name of the dress *****' required onChange={validateName}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_cost_label'>Cost</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Numbers(0-9)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_cost' placeholder='***** Enter cost of the dress *****' required onChange={validateCost}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_materials_label'>Material Used</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Alphabets(A-Z, a-z)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_materials' placeholder='***** Enter material used(seperated by ,) *****' required onChange={validateMaterialUsed}/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_desc_label'>Description</label>
                                <span className='signup_container_two_label_errormessage'>  *Use Anything</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_desc' placeholder='***** Enter description *****' required/>
                        </div>
                        <div style={{display:'flex', flexDirection:'column', margin:"10px 0px", height:"70px"}}>
                            <div>
                                <label className='homeEmployee_main_container_three_postOrder_containerOne_label' id='homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos_label'>No.of photos</label>
                                <span className='signup_container_two_label_errormessage'>  *Use only Numbers(5-7)</span>
                            </div>
                            <input type="text" className='homeEmployee_main_container_three_postOrder_containerOne_input' id='homeEmployee_main_container_three_postOrder_containerOne_numberOfPhotos' placeholder='***** Enter no.of photos minimum 5, maximum 7*****' required onChange={validateNoOfPhotos} minLength={1} maxLength={1}/>
                        </div>
                    </div>
                    <div style={{height:"400px", width:"300px",padding:"20px"}} id='image_container_postorder'>
                         
                    </div>
                </form>
            </div>
            <form className='homeEmployee_main_container_three_mail_hidden' id='homeEmployee_main_container_three_mail' onSubmit={handleMailSubmit}>
                <span style={{position:"absolute",margin:"0px 0px 0px 760px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseMailClick}>X</span>
                <div className='homeEmployee_main_container_three_mail_constraints_visible' id='homeEmployee_main_container_three_mail_constraints'>
                    <strong style={{color:"#fff"}}>Make sure to remember</strong>
                    <p style={{margin:"0"}}>1. Once the mail is sent, it won't be visible to you.</p>
                    <p style={{margin:"0"}}>2. You can only view your email, when you hear back from us.</p>
                    <p style={{margin:"0"}}>3. If you are satisfied then proceed with email .</p>
                </div>
                <hr></hr>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_name_label'>Name</label>
                        <input type="text" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_name' readOnly />
                </div>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_email_label'>Email</label>
                        <input type="email" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_email' placeholder='***** Enter email for which you receive reply *****' required/>
                </div>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_subject_label'>Subject</label>
                        <input type="text" className='homeEmployee_main_container_three_mail_containerOne_input' id='homeEmployee_main_container_three_mail_containerOne_subject' placeholder='***** Enter subject *****' required/>
                </div><br></br>
                <div style={{display:'flex', flexDirection:'column',justifyContent:"center", margin:"10px 0px", height:"70px"}}>
                        <label className='homeEmployee_main_container_three_mail_containerOne_label' id='homeEmployee_main_container_three_mail_containerOne_desc_label'>Description</label>
                        <textarea type="text" rows={60} cols={50} style={{minHeight:"90px", outline:"none"}} id='homeEmployee_main_container_three_mail_containerOne_desc' placeholder='***** Enter Description, be clear about your issue. If you want to remove an item, please provide it unique id. *****' required></textarea>
                </div>
                <button className='homeEmployee_main_container_three_mail_button'>Send</button>
            </form>
            <div className='homeEmployee_main_container_three_orders_hidden' id='homeEmployee_main_container_three_orders'>
                <span style={{position:"absolute",margin:"0px 0px 0px 1150px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseOrdersClick}>X</span>
                <div className='orders_container_one' id = 'orders_container_one'>
                    <div className='orders_container_two'>
                        <p style={{width:"30px",margin:"0px 2px"}}>S.no</p>
                        <p style={{width:"130px",textAlign:"center", margin:"0px 2px"}}>Name</p>
                        <p style={{width:"130px",textAlign:"center", margin:"0px 2px"}}>Mob Num</p>
                        <p style={{width:"40px",textAlign:"center", margin:"0px 2px"}}>Size</p>
                        <p style={{width:"250px",textAlign:"center", margin:"0px 2px"}}>Dress Name</p>
                        <p style={{width:"100px",textAlign:"center", margin:"0px 2px"}}>Dress Image</p>
                        <p style={{width:"300px",textAlign:"center", margin:"0px 2px"}}>Address</p>
                        <p style={{width:"80px",textAlign:"center", margin:"0px 2px"}}>Qunatity</p>
                        <p style={{width:"100px",textAlign:"center", margin:"0px 2px"}}>Status</p>
                    </div>
                </div>
            </div>
            <div className='homeEmployee_main_container_three_report_hidden' id='homeEmployee_main_container_three_report'>
                <span style={{position:"absolute",margin:"0px 0px 0px 450px", color:"red",fontSize:"28px",cursor:"pointer"}} onClick={handleCloseReportClick}>X</span>
                <div id='report_container_one' className='report_container_one'>
                    <p style={{width:"50px",textAlign:"center"}}>S.No</p>
                    <p style={{width:"250px",textAlign:"center"}}>Dress Name</p>
                    <p style={{width:"100px",textAlign:"center"}}>Ordered</p>
                    <p style={{width:"100px",textAlign:"center"}}>Completed</p>
                </div>
            </div>
            <div className='homeEmployee_main_container_three_revenue_hidden' id='homeEmployee_main_container_three_revenue'>
                <span style={{position:"absolute",margin:"0px 0px 0px 450px", color:"red",fontSize:"28px",cursor:"pointer", zIndex:"9"}} onClick={handleCloseRevenueClick}>X</span>
                <p style={{marginTop:"40px", textAlign:"center", fontWeight:"bolder", fontSize:"22px", color:"#fff", textDecoration:"underline"}}>Charts Regarding Your Revenue</p>
                <p style={{margin:"120px 0px 0px -250px", textAlign:"center", fontWeight:"bolder", fontSize:"16px", color:"#000", position:"absolute", textDecoration:"underline"}}>Orders Obtained:</p>
                <p style={{margin:"380px 0px 0px -250px", textAlign:"center", fontWeight:"bolder", fontSize:"16px", color:"#000", position:"absolute", textDecoration:"underline"}}>Money Obtained:</p>
                <PieChart
                    series={[
                        {
                          outerRadius: 100,
                          data: JSON.parse(localStorage.getItem('piechart1')),
                        //   data: data1,
                          cx: 250,
                          cy: 125
                        },
                        {
                          data: JSON.parse(localStorage.getItem('piechart2')),
                        //   data: data2,
                          cx: 250,
                          cy: 380,
                          innerRadius: 50,
                          outerRadius: 100,
                        },
                      ]}
                      height={500}
                      slotProps={{
                        legend: { hidden: true },
                      }}
                    />
            </div>
        </div>
    )
}