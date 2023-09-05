import ViewHeader from "../viewHeader"

import {Link} from 'react-router-dom'

import {ViewItemContainer, Button} from './styledComponents'
import './index.css'

const viewItemsList = [
        {id:1, code: '102728', name:'Smartphone'},
        {id:2, code: '102728', name:'Smartphone'},
        {id:3, code: '102728', name:'Smartphone'},
        {id:4, code: '102728', name:'Smartphone'}
]
const ViewItems = ()=>(
    <>
    <div className="view-container">
        <div>
            <p>Group Type</p>
            <p className="bold">Customer</p>
        </div>
        <div>
            <p>Group Name</p>
            <p className="bold">Marketing Company</p>
        </div>
        <div>
            <p>#SKU</p>
            <p className="bold">24</p>
        </div>
        <div>
            <p>#MSL</p>
            <p className="bold">16</p>
        </div>
    </div>
        <ViewHeader/>
        {
            viewItemsList.map((eachItem)=>{
                const {id, code, name} = eachItem
                return (
                    <ViewItemContainer key={id}>
                    <p>{code}</p>
                    <p>{name}</p>
                    <input type="checkbox"/>
                </ViewItemContainer>
                )
            })
        }
        <Link to="/">
            <Button>Back</Button>
        </Link>
    </>
)
export default ViewItems