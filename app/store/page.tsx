import { Col, Row } from 'react-bootstrap'
import storeItems from "../data/items.json"
import { NavBar } from './NavBar'
import { StoreItem } from './StoreItem'

export default function Store(){
    return(
        <>
        <NavBar/>
        <Row md={2} xs={1} lg={5} className="g-3" >
            {storeItems.map(item =>(
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>
            ))}
        </Row>
        </>
    )
}