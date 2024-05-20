import { Col, Row } from 'react-bootstrap';
import StoreItems from '../data/items.json';
import { NavBar } from './NavBar';
import { StoreItem } from './StoreItem';
export default function Store(){
  return(
  <>
    <NavBar/>
    <Row>
        {StoreItems.map(item=>(
          <Col key={item.id} className="col">
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
  </>
  )
}