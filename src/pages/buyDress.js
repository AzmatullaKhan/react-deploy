import './css/buyDress.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

export const BuyDress=()=>{
    const navigate = useNavigate()

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

    setTimeout(()=>{
        document.getElementById('name').value = localStorage.getItem('username')
        document.getElementById('mobileNumber').value = localStorage.getItem('mobileNumber')
    },100)

    let main_data=[]
    axios.get('https://spring-deploy-production-2a84.up.railway.app/images/all').then(res=>{main_data=res.data}).catch(err=>{console.log(err)})

    let cart_data=[]
    axios.get('https://spring-deploy-production-2a84.up.railway.app/customercart/all').then(res=>{cart_data=res.data}).catch(err=>{console.log(err)})

    let size,dressId;
    setTimeout(()=>{
        size = localStorage.getItem('size')
        dressId = JSON.parse(localStorage.getItem('dressId'))
    }, 100)

    const renderFunction=()=>{
        console.log(dressId)
        let main_data_from_cartOrdress =[]
        if(localStorage.getItem('fromCart'))
            main_data_from_cartOrdress = cart_data
        else
            main_data_from_cartOrdress = main_data

            let new_id = 1
            if(main_data_from_cartOrdress.length>0){
                new_id = Number(main_data_from_cartOrdress[main_data_from_cartOrdress.length-1].id)+1
            }
            main_data_from_cartOrdress.push({
                id:new_id,
                cost:"5500",
                images:[
                    require('../images/trial0/one.png'),
                    require('../images/trial0/two.png'),
                    require('../images/trial0/three.png'),
                    require('../images/trial0/four.png'),
                    require('../images/trial0/five.png')
                ],
                description:"Dive into the deep hues of indigo with our kalamkari short dress. Adorned with velvet embroidery and playful tassels, this outfit is ideal for everyday wear.",
                materialUsed:"Cotton,Silk",
                name:"Velvet embroidered, indigo kalamkari cotton summer dress",
                publisher:"publisher name"
        })
        for(let j = 0;j<dressId.length;j=j+1){
            for(let i=0;i<main_data_from_cartOrdress.length;i=i+1){
                let main_data_images = main_data_from_cartOrdress[i].images;
                if(dressId[j] === main_data_images[0] || dressId[j].substring(21, dressId[j].length+1)=== main_data_images[0] || dressId[j].substring(28, dressId[j].length+1)=== main_data_images[0] ){
    
                    let main_name_data = main_data_from_cartOrdress[i].name
                    let main_cost_data = Number(main_data_from_cartOrdress[i].cost)
    
                    let main_div = document.createElement('div')
                    main_div.className='buyDress_dress_holder'
                    
    
                    let img_ele = document.createElement('img')
                    img_ele.className = 'buyDress_dress_holder_image'
                    img_ele.alt = 'image_'+i;
                    img_ele.src = main_data_images[0]
    
                    let mini_div = document.createElement('div')
                    mini_div.className='buydress_dress_holder_desc'
    
                    let p1 = document.createElement('p')
                    p1.textContent = main_name_data
                    
                    let p2 = document.createElement('p')
                    p2.textContent = "Size: "+size
                    p2.style.fontSize="12px"
                    p2.style.marginTop="-20px"
    
    
                    let p3 = document.createElement('p')
                    p3.textContent = "Seller: "+main_data_from_cartOrdress[i].publisher
                    p3.style.fontWeight='100'
                    p3.style.opacity='0.7'
    
                    const formattedValue = new Intl.NumberFormat('en-IN', {
                        style: 'currency',
                        currency: 'INR',
                    }).format(main_cost_data)
                    let p4 = document.createElement('p')
                    p4.textContent =formattedValue
    
                    let p6 = document.createElement('p')
                    p6.textContent ="Material Used: "+main_data_from_cartOrdress[i].materialUsed
                    p6.style.fontSize='14px'
                    p6.style.opacity='0.7'
    
                    mini_div.appendChild(p1)
                    mini_div.appendChild(p2)
                    mini_div.appendChild(p3)
                    mini_div.appendChild(p4)
                    mini_div.appendChild(p6)
                    
                    let p5 = document.createElement('p')
                    p5.textContent = 'Delivered By Seven Days from now.'
                    p5.style.alignSelf='start'
                    p5.style.paddingTop="10px"
                    p5.style.fontSize="12px"

                    let numberInput = document.createElement('input')
                    numberInput.className = 'inputNumberField'
                    numberInput.readOnly=true
                    if(localStorage.getItem('fromCart'))
                        numberInput.value = main_data_from_cartOrdress[i].quantity
                    else
                        numberInput.value = localStorage.getItem('quantity')

                    let label = document.createElement('label')
                    label.textContent = "no.of items"
                    // numberInput.style.position="absolute"
    
                    main_div.appendChild(img_ele)
                    main_div.appendChild(mini_div)
                    main_div.appendChild(p5)
                    main_div.appendChild(label)
                    main_div.appendChild(numberInput)
                    
                    if(localStorage.getItem('fromCart')){
                        items_count=items_count+main_data_from_cartOrdress[i].quantity;
                        items_cost=items_cost+(main_cost_data*main_data_from_cartOrdress[i].quantity)
                    }
                    else
                    {
                        items_count=items_count+Number(localStorage.getItem('quantity'));
                        items_cost=items_cost+(main_cost_data*Number(localStorage.getItem('quantity')))
                    
                    }
    
                    document.getElementById('buydress_container_three_id').appendChild(main_div)
    
                    
                }
            }
        }
    }
    // const renderFunction=()=>{
    //     for(let j = 0;j<dressId.length;j=j+1){
    //         for(let i=0;i<main_data.length;i=i+1){
    //             let main_data_images = main_data[i].images;
    //             if(dressId[j] === main_data_images[0]){
    
    //                 let main_name_data = main_data[i].name
    //                 let main_cost_data = Number(main_data[i].cost)
    
    //                 let main_div = document.createElement('div')
    //                 main_div.className='buyDress_dress_holder'
                    
    
    //                 let img_ele = document.createElement('img')
    //                 img_ele.className = 'buyDress_dress_holder_image'
    //                 img_ele.alt = 'image_'+i;
    //                 img_ele.src = main_data_images[0]
    
    //                 let mini_div = document.createElement('div')
    //                 mini_div.className='buydress_dress_holder_desc'
    
    //                 let p1 = document.createElement('p')
    //                 p1.textContent = main_name_data
                    
    //                 let p2 = document.createElement('p')
    //                 p2.textContent = "Size: "+size
    //                 p2.style.fontSize="12px"
    //                 p2.style.marginTop="-20px"
    
    
    //                 let p3 = document.createElement('p')
    //                 p3.textContent = "Seller: "+main_data[i].publisher
    //                 p3.style.fontWeight='100'
    //                 p3.style.opacity='0.7'
    
    //                 const formattedValue = new Intl.NumberFormat('en-IN', {
    //                     style: 'currency',
    //                     currency: 'INR',
    //                 }).format(main_cost_data)
    //                 let p4 = document.createElement('p')
    //                 p4.textContent =formattedValue
    
    //                 let p6 = document.createElement('p')
    //                 p6.textContent ="Material Used: "+main_data[i].materialUsed
    //                 p6.style.fontSize='14px'
    //                 p6.style.opacity='0.7'
    
    //                 mini_div.appendChild(p1)
    //                 mini_div.appendChild(p2)
    //                 mini_div.appendChild(p3)
    //                 mini_div.appendChild(p4)
    //                 mini_div.appendChild(p6)
                    
    //                 let p5 = document.createElement('p')
    //                 p5.textContent = 'Delivered By Seven Days from now.'
    //                 p5.style.alignSelf='start'
    //                 p5.style.paddingTop="10px"
    //                 p5.style.fontSize="12px"
    
    //                 main_div.appendChild(img_ele)
    //                 main_div.appendChild(mini_div)
    //                 main_div.appendChild(p5)
                    
    //                 items_count=items_count+1;
    //                 items_cost=items_cost+main_cost_data
    
    //                 document.getElementById('buydress_container_three_id').appendChild(main_div)
    
                    
    //             }
    //         }
    //     }
    // }

    setTimeout(()=>{
        renderFunction()
        console.log(main_data)
    },2000)
    const calculate = () =>{
        // document.getElementById('buydress_container_four_itemsCount').textContent = "Items:     "+items_count
        // document.getElementById('buydress_container_four_itemsCost').textContent= new Intl.NumberFormat('en-IN', {
        //     style: 'currency',
        //     currency: 'INR',
        // }).format(items_cost)
        document.getElementById('buydress_container_four_deliveryCharge').textContent = delivery_charge
        document.getElementById('buydress_container_four_platformFee').textContent = platform_fee
        document.getElementById('buydress_container_four_totalAmount').textContent = new Intl.NumberFormat('en-IN', {
            style: 'currency',
            currency: 'INR',
        }).format(items_cost+20)
    }
    setTimeout(()=>{
        calculate()
    }, 2100)

    const handlePlaceOrderClick = (e) =>{
        e.preventDefault()
        let name = document.getElementById("name").value
        let mobileNumber = document.getElementById("mobileNumber").value
        let pincode = document.getElementById("pincode").value
        let locality = (document.getElementById("locality").value === "")?"NOT SET":document.getElementById("locality").value
        let address = document.getElementById("address").value
        let city = document.getElementById("city").value
        let district = document.getElementById("district").value
        let landmark = (document.getElementById("landmark").value === "")?"NOT SET":document.getElementById("locality").value
        let alternateNumber = document.getElementById("alternateNumber").value
        
        
        var options = {
            "key": "rzp_test_KpueYt3bEtdBmw",
            "amount": (items_cost+20)*100,
            "currency": "INR",
            "name": "LoomCraft",
            "description": "Buying the Selected Items",
            "image": "https://example.com/your_logo",
            "order_id": localStorage.getItem('OrderId'), 
            "handler": function (response){
                FormData.orderStatus = "success"
                console.log(response)
                setTimeout(()=>{
                    for(let j = 0;j<dressId.length;j=j+1){
                        let main_data_from_cartOrdress = []
                        if(localStorage.getItem('fromCart'))
                            main_data_from_cartOrdress = cart_data
                        else
                            main_data_from_cartOrdress = main_data
    
                        console.log(main_data_from_cartOrdress)
                        for(let i=0;i<main_data_from_cartOrdress.length;i=i+1){
                            let main_data_images = main_data_from_cartOrdress[i].images;
                            if(dressId[j] === main_data_images[0]){

                                let amount = Number(main_data_from_cartOrdress[i].cost)
                                let quantity="0"
                                if(localStorage.getItem('fromCart'))
                                    quantity = main_data_from_cartOrdress[i].quantity
                                else
                                    quantity = localStorage.getItem('quantity')

                                const FormData = {name, mobileNumber, pincode, locality, address, city, district, landmark, alternateNumber, amount, quantity}
                                FormData.orderStatus="paid"
                                
                                let dressname = main_data_from_cartOrdress[i].name
                                let data1 = main_data_images[0]
                                let dresspublisher = main_data_from_cartOrdress[i].publisher            
                                let buyername = FormData.name
                                let buyernumber = FormData.mobileNumber
                                let buyersize = localStorage.getItem('size')
                                let deliveredstatus = 'notDone' 
                                let dresscost = Number(main_data_from_cartOrdress[i].cost)


                                let IndividualForm = {dressname, dresscost, data1, dresspublisher, buyername, buyernumber, buyersize, deliveredstatus, quantity}
                                

                                axios.post('https://spring-deploy-production-2a84.up.railway.app/order/createOrder', FormData).then(res=>{console.log(res)}).catch(err=>{console.log(err)})
                                
                                axios.post('https://spring-deploy-production-2a84.up.railway.app/employeeOrder/createOrder', IndividualForm).then(res=>console.log(res)).catch(err=>{console.log(err)})
        
                                if(localStorage.getItem('fromCart'))
                                    axios.delete('https://spring-deploy-production-2a84.up.railway.app/customercart/deleteCart/'+main_data_from_cartOrdress[i].id).then((res)=>{console.log(res)}).catch((err)=>{console.log(err)})
                            }
                        }
                    }
                    navigate('/home')
                
                },500)

                },
            "prefill": { 
                "name": name, 
                "email": "NA@gmail.com", 
                "contact": mobileNumber
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
            
        };
        var rzp1 = new window.Razorpay(options);
        rzp1.on('payment.failed', function (response){
            alert('Payment Failed')

        });
        
        rzp1.open();
        e.preventDefault();
        
    }
    const handleBackClick=()=>{
        navigate('/home')
    }
    return(
        <div className='buyDress_container_one'>
            <div style={{position:"absolute",top:'0', zIndex:'1'}} className='buyDress_container_animation'>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/><br></br>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
                <img src={require('../images/logo.png')} alt='img' style={{width:"373px",height:"425px",opacity:'0.1'}}/>
            </div>
            <div className='buyDress_container_two'>
                <div className='buydress_container_three' id='buydress_container_three_id'>
                    
                </div>
                <div className='buydress_container_four' style={{position:"sticky", top:"0"}}>
                    <p style={{fontSize:"22px", weight:"bolder"}}>Order Details</p>
                    <hr style={{width:"100%", margin:"-20px 0px 0px 0px"}}></hr><br></br>

                    {/* <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Price (<span id='buydress_container_four_itemsCount'></span>):</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='buydress_container_four_itemsCost'>Amount</p>
                    </div> */}

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Delivery Charges:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id='buydress_container_four_deliveryCharge'>Amount</p>
                    </div>

                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <p style={{fontSize:"18px", weight:"bolder"}}>Platform Fee:</p>
                        <p style={{fontSize:"18px", weight:"bolder"}} id = 'buydress_container_four_platformFee'>Amount</p>
                    </div>

                    <hr style={{width:"100%"}}></hr><br></br>
                    <div style={{display:"flex",justifyContent:"space-between",margin:"10px 0px"}}>
                        <strong style={{fontSize:"22px", weight:"bolder"}}>Total Amount:</strong>
                        <strong style={{fontSize:"22px", weight:"bolder"}} id='buydress_container_four_totalAmount'>Amount</strong>
                    </div>

                    <form className='buydress_container_five' onSubmit={handlePlaceOrderClick}>
                            <p style={{fontSize:"22px", weight:"bolder"}}>Address Here</p>
                            <input type='text' placeholder="Name*" id='name' className='buydress_container_five_input' readOnly/>
                            <input type='text' placeholder="Mobile Number*" id='mobileNumber' className='buydress_container_five_input' readOnly/>
                            <input type='text' placeholder="Pincode*" id='pincode' className='buydress_container_five_input' required/>
                            <input type='text' placeholder="Locallity" id='locality' className='buydress_container_five_input'/>
                            <textarea style={{height:"80px", width:"380px",marginBottom:"20px",outline:"none"}} id='address' placeholder="Enter your address***" required></textarea>
                            <input type='text' placeholder="City*" id='city' className='buydress_container_five_input' required/>
                            <input type='text' placeholder="District*" id='district' className='buydress_container_five_input' required/>
                            <input type='text' placeholder="LandMark (Optional)" id='landmark' className='buydress_container_five_input'/>
                            <input type='text' placeholder="Alternate Mobile Number*" id='alternateNumber' className='buydress_container_five_input' required/>
                            <button type='submit' className='buyDress_container_one_button'>Place Order on Cash On Delivery</button>
                    </form>
                </div>
            </div>
            <button className='buyDress_container_one_button' onClick={handleBackClick} style={{margin:"10px", width:"120px"}}>Back</button>
        </div>
    )
}
        // <div className='buyDress_dress_holder'>
        //                     <img src={require('../images/about.png')} className='buyDress_dress_holder_image' alt='test'/>
        //                     <div className='buydress_dress_holder_desc'>
        //                         <p>Name</p>
        //                         <p>Size</p>
        //                         <p>Seller</p><br></br>
        //                         <p>Cost</p>
        //                     </div>
        //                     <p style={{alignSelf:"start", paddingTop:"10px"}}>Delivered by</p>
        //                 </div>