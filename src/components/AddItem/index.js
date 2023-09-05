import {Container} from './styledComponents'
import { useNavigate } from 'react-router-dom';
import Popup from '../popup';


import './index.css'
import { Button } from '../home/styledComponents'
import { useState } from 'react';




const customerItems = [
    {
        id: 1,
        code: 12345,
        name: 'jay'
    },
    {
        id: 2,
        code: 12345,
        name: 'jay'
    },
    {
        id: 3,
        code: 12345,
        name: 'jay'
    },
    {
        id: 4,
        code: 12345,
        name: 'jay'
    },
    {
        id: 5,
        code: 12345,
        name: 'jay'
    },
    {
        id: 6,
        code: 12345,
        name: 'jay'
    }
]
const channelItems = [
    {
        id: 1,
        code: 12345,
        name: 'jay'
    },
    {
        id: 2,
        code: 12345,
        name: 'jay'
    },
    {
        id: 3,
        code: 12345,
        name: 'jay'
    },
    {
        id: 4,
        code: 12345,
        name: 'jay'
    },
    {
        id: 5,
        code: 12345,
        name: 'jay'
    },
    {
        id: 6,
        code: 12345,
        name: 'jay'
    }
]


let productItems = [
    {
        id: 1,
        code: 12345,
        name: 'jay',
        isMSL: false
    },
    {
        id: 2,
        code: 12345,
        name: 'jay',
        isMSL: false
    },
    {
        id: 3,
        code: 12345,
        name: 'jay',
        isMSL: false
    },
    {
        id: 4,
        code: 12345,
        name: 'jay',
        isMSL: false
    },
    {
        id: 5,
        code: 12345,
        name: 'jay',
        isMSL: false
    },
    {
        id: 6,
        code: 12345,
        name: 'jay',
        isMSL: false
    }
]




const AddItem = ()=>{


    const [showCustomerPopup, setShowCustomerPopup] = useState(false)
    const [showChannelPopup, setShowChannelPopup] = useState(false)
    const [showProductsPopup, setShowProductsPopup] = useState(false)


    // const [customerItems, setCustomerItems] = useState([])

    

    const navigate = useNavigate()

    const submitFormData = (e)=>{
        e.preventDefault()
        navigate('/view-items')
    } 

    
    // const openCustomerPopup = () => {
    //     setShowCustomerPopup(true);
    // };

    // const openChannelPopup = ()=>{
    //     setShowChannelPopup(true)
    // }
  
    const closeCustomerPopup = () => {
        setShowCustomerPopup(false);
    };

const closeChannelPopup = ()=>{
    setShowChannelPopup(false)
}

const closeProductsPopup = ()=>{
    setShowProductsPopup(false)
}

// const getData = async ()=>{
//     try{
//         const response = await fetch('http://localhost:3000/customer')
//         const data = await response.json()
//         return data
//     }catch(error){
//         console.error('Error fetching data:', error);
//         throw error;
//     }
// }

// useEffect(()=>{
//     getData()
//     .then((fetchedData) => {
//         setCustomerItems(fetchedData);
//     })
//     .catch((error) => {
//       console.error('Error:', error);
//     });
// }, [])


return(
    <>
    <h1>ADD ITEM LINKING</h1>
        <form onSubmit={(e)=> submitFormData(e)}>
        <Container>
            <p>select Group</p>
            <div className="radio-groups">
                <div className='radio1'>
                    <input onClick={()=> {
                        return(
                            setShowCustomerPopup(true),
                            setShowChannelPopup(false),
                            setShowProductsPopup(false)
                        )
                    }} on type="radio" id="customer" name="group"/>
                    <label htmlFor='customer'>Customer</label>
                </div>
                <div className='radio2'>
                    <input onClick={()=> {
                        return(
                            setShowChannelPopup(true),
                            setShowCustomerPopup(false),
                            setShowProductsPopup(false)
                        )
                    }} type="radio" id="channel" name="group"/>
                    <label htmlFor='channel'>Channel</label>
                </div>               
            </div>
        </Container>
        <Container>
            <p>Select Route</p>
            <select>
                <option>Retail</option>
                <option>Whole sell</option>
            </select>
        </Container>
        <Container>
            <p>Item List</p>
                <button  onClick={()=>{
                return(
                setShowProductsPopup(true),
                setShowCustomerPopup(false),
                setShowChannelPopup(false)
            )}} type="button">Select Here</button>
            
        </Container>

 
        <Popup
            show={showCustomerPopup}
            onClose={closeCustomerPopup}
            channelName='Customer'
            channelDetails='Customer Details'
            items={customerItems}
        />

        <Popup
            show={showChannelPopup}
            onClose={closeChannelPopup}
            channelName='Channel'
            channelDetails='Channel Details'
            items={channelItems}
        />

        <Popup
            show={showProductsPopup}
            onClose = {closeProductsPopup}
            channelName='Products'
            channelDetails='ItemCodeDescription'
            items={productItems}
        />


        <div className='buttons'>
            <Button type="button">Cancel</Button>
            <Button type="submit">Submit</Button>
        </div>
    </form>
    </>
)
}

export default AddItem