import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Col, Navbar, Row } from 'react-bootstrap';
import StoreItems from '../data/items.json';
import { StoreItem } from './StoreItem';
export default function Store(){
  return(
  <>
  <Navbar className="navbar" >
    <Link href="/">Home</Link>
    <Link href="/store">Store</Link>
    <Link href="/about">About</Link>
    <Button variant="outlined" style={{marginLeft:"200px"}}>
    <ShoppingCartIcon/>
    <div>2</div>
    </Button>
  </Navbar>
      <Row  md={2} lg={3} xl={4} className="g-3">
        {StoreItems.map(item=>(
          <Col key={item.id}>
            <StoreItem {...item}/>
          </Col>
        ))}
      </Row>
  </>
  )
}