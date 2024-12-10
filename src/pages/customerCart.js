import axios from 'axios'
import './css/customerCart.css'
import { useNavigate } from 'react-router-dom'
export const CustomerCart=()=>{
    let main_data = []
    axios.get('https://spring-deploy-production-2a84.up.railway.app/customercart/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    let username;

    setTimeout(()=>{
        username = localStorage.getItem('username')
    },100)

    let dressId = []

    let items_count=Number(0)
    let items_cost =Number(0)

    const delivery_charge = new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format("10")

    const platform_fee =new Intl.NumberFormat('en-IN', {
        style: 'currency',
        currency: 'INR',
    }).format("10")

    const navigate = useNavigate()

    const renderFunction=()=>{
        for(let i=0;i<main_data.length;i=i+1){
            let main_data_images = main_data[i].images;
            // console.log(main_data[i])
            if(main_data[i].customerId === username){

                let main_name_data = main_data[i].name
                let main_cost_data = Number(main_data[i].cost)

                let main_div = document.createElement('div')
                main_div.className='customercart_dress_holder'
                

                let img_ele = document.createElement('img')
                img_ele.className = 'customercart_dress_holder_image'
                img_ele.alt = 'image_'+i;
                img_ele.src = main_data_images[0]

                let mini_div = document.createElement('div')
                mini_div.className='customercart_dress_holder_desc'

                let p1 = document.createElement('p')
                p1.textContent = main_name_data
                p1.style.width="400px"
                
                let p2 = document.createElement('p')
                p2.textContent = "Size: "+localStorage.getItem('size')


                let p3 = document.createElement('p')
                p3.textContent = "Seller: "+main_data[i].publisher
                p3.style.fontWeight='100'
                p3.style.opacity='0.7'

                const formattedValue = new Intl.NumberFormat('en-IN', {
                    style: 'currency',
                    currency: 'INR',
                }).format(main_cost_data)
                let p4 = document.createElement('p')
                p4.textContent =formattedValue

                let p6 = document.createElement('p')
                p6.textContent ="Material Used: "+main_data[i].materialUsed
                p6.style.fontSize='14px'
                p6.style.opacity='0.7'

                let input_ele = document.createElement('input')
                input_ele.value=main_data[i].quantity
                input_ele.readOnly=true
                input_ele.className = 'inputNumberField'

                let label = document.createElement('label')
                label.textContent = "No.of Items"

                mini_div.appendChild(p1)
                mini_div.appendChild(p2)
                mini_div.appendChild(p3)
                mini_div.appendChild(p4)
                mini_div.appendChild(p6)
                
                let p5 = document.createElement('p')
                p5.textContent = 'Delivered By Seven Days from now if ordered today.'
                p5.style.alignSelf='start'
                p5.style.paddingTop="10px"
                p5.style.fontSize="12px"

                let button = document.createElement('button')
                button.innerHTML='Remove From Watchlist'
                button.style.position="absolute"
                button.style.marginLeft="500px"
                button.style.marginTop="200px"
                button.className='customercart_container_one_button'
                button.id=main_data[i].id
                button.addEventListener('click', (e)=>{
                    axios.delete('https://spring-deploy-production-2a84.up.railway.app/customercart/deleteCart/'+e.target.id).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                    window.location.reload()
                })

                main_div.appendChild(img_ele)
                main_div.appendChild(mini_div)
                main_div.appendChild(p5)

                main_div.appendChild(label)
                main_div.appendChild(input_ele)
                main_div.appendChild(button)
                
                items_count=items_count+main_data[i].quantity;
                items_cost=items_cost+(main_cost_data*main_data[i].quantity)

                dressId.push(main_data_images[0])

                document.getElementById('customercart_container_three_id').appendChild(main_div)

                
            }
        }
    }
    const calculate = () =>{
        document.getElementById('customercart_container_four_itemsCount').textContent = "Items:     "+items_count
        document.getElementById('customercart_container_four_itemsCost').textContent= new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(items_cost)
        document.getElementById('customercart_container_four_deliveryCharge').textContent = delivery_charge
        document.getElementById('customercart_container_four_platformFee').textContent = platform_fee
        document.getElementById('customercart_container_four_totalAmount').textContent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(items_cost+20)
    }

    setTimeout(() => {
        renderFunction()
        calculate()
    }, 2000);


    const handlebuyAllClick=()=>{
        setTimeout(() => {
            localStorage.removeItem('dressId')
            localStorage.setItem('dressId', JSON.stringify(dressId))
            localStorage.setItem('fromCart', true)
            navigate('/buyDress')
        }, 100);
    }
    const handleBackClick=()=>{
        navigate('/home')
    }
    return(
        <div id='customercart_container_one' className='customercart_container_one'>
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='customercart_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='customercart_container_two'>
                <div className='customercart_container_three' id='customercart_container_three_id'>
                </div>
                <div className='customercart_container_four' style={{position:"sticky", top:"0"}}>
                    <p style={{fontSize:"22px", weight:"bolder"}}>Order Details</p>
                    <hr style={{width:"100%", margin:"-20px 0px 0px 0px"}}></hr><br></br>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Price (<span id='customercart_container_four_itemsCount'></span>):</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='customercart_container_four_itemsCost'>Amount</p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Delivery Charges:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='customercart_container_four_deliveryCharge'>Amount</p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Platform Fee:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id = 'customercart_container_four_platformFee'>Amount</p>
                    </div>

                    <hr style={{width:"100%"}}></hr><br></br>
                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <strong style={{fontSize:"22px", weight:"bolder"}}>Total Amount:</strong>
                        <strong style={{fontSize:"22px", weight:"bolder"}} id='customercart_container_four_totalAmount'>Amount</strong>
                    </div>

                    <br></br>
                    <br></br>
                    <br></br>
                    <button className='customercart_container_one_button' onClick={handlebuyAllClick}>Proceed to Buy All</button>
                </div>
                <button className='customercart_container_one_button' onClick={handleBackClick} style={{marginLeft:"-1450px",width:"120px",position:"sticky",top:"0"}}>Back</button>
            </div>
        </div>
    )
}