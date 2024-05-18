import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Button } from '@mui/material';
import Link from 'next/link';
import { Navbar } from 'react-bootstrap';
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
    <h1>Welcome Innit!</h1>
  </>
  )
}