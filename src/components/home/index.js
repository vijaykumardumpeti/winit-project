import ItemHeader from '../itemHeader'
import {Link} from 'react-router-dom'
import {HomeContainer,ButtonsContainer,Button,ItemContainer} from './styledComponents'
import './index.css'
import { AiFillEye } from 'react-icons/ai';

const items = [
    {id:1, groupeType: 'Electronics', groupeName:'Smartphone', routeType:'Online', noOfSKU:500, noOfMSL:150},
    {id:1, groupeType: 'Electronics', groupeName:'Smartphone', routeType:'Online', noOfSKU:500, noOfMSL:150},
    {id:1, groupeType: 'Electronics', groupeName:'Smartphone', routeType:'Online', noOfSKU:500, noOfMSL:150},
    {id:1, groupeType: 'Electronics', groupeName:'Smartphone', routeType:'Online', noOfSKU:500, noOfMSL:150},
]

console.log(items)
const Home = ()=>(
    <HomeContainer>
        <ButtonsContainer>
            <div className='container-1'>
                <Button type="button">Check All</Button>
                <Button type="button">Clear All</Button>
                <Button type="button">Delete Checked</Button>
            </div>
            <div className='container-2'>
                <Link to="/add-item">
                    <Button type="button">ADD</Button>
                </Link>
            </div>
        </ButtonsContainer>
        <ItemHeader/>
        {
            items.map((eachItem)=>{
                const {id,groupeType,groupeName,routeType, noOfSKU, noOfMSL} = eachItem
                return (
                    <ItemContainer key={id}>
                        <input type="checkbox"/>
                    <p>{groupeType}</p>
                    <p>{groupeName}</p>
                    <p>{routeType}</p>
                    <p>{noOfSKU}</p>
                    <p>{noOfMSL}</p>
                    <AiFillEye className='icon-styling'/>
                </ItemContainer>
                )
            })
        }
    </HomeContainer>
)

export default Home