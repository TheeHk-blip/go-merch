import { Col, Row } from 'react-bootstrap';
import storeItems from "../data/items.json";
import { NavBar } from './NavBar';
import { Shoppingcart } from './Shoppincart';
import { StoreItem } from './StoreItem';
import { StoreItemPovider } from './StoreItemContext';


export default function Store(){
    
    return(
        <>
        <StoreItemPovider>
        <NavBar/>
        <Row md={2} xs={1} lg={5} className="g-3" >
            {storeItems.map(item =>(
                <Col key={item.id}>
                    <StoreItem {...item}/>
                </Col>
            ))}
        </Row>
        <Shoppingcart/>
        </StoreItemPovider>
        </>
    )
}


