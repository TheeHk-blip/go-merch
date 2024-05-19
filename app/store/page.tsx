import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Col, Navbar, Row } from 'react-bootstrap';
import StoreItems from '../data/items.json';
import { StoreItem } from './StoreItem';
import './store.css';

export default function Store(){
  return(
  <>
  <div className="static">
  <Navbar>
    <Link href="/">Home</Link>
    <Link href="/store">Store</Link>
    <Link href="/about">About</Link>
    <Button className="float-right ,my-2" variant="outlined">
    <ShoppingCartIcon/>
    <div>2</div>
    </Button>
  </Navbar>
  </div>
      <Row className="g-3">
        {StoreItems.map(item=>(
          <Col key={item.id} className="col">
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
  </>
  )
}