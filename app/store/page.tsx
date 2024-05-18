import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Link from 'next/link';
import { Button, Navbar } from 'react-bootstrap';
export default function Store(){
  return(
  <>
  <Navbar className="navbar">
    <Link href="/">Home</Link>
    <Link href="/store">Store</Link>
    <Link href="/about">About</Link>
    <Button style={{width:"3rem", position:"relative"}} variant="outline-primary"
    className="rounded-circle">
      <ShoppingCartIcon/>
      <div>5</div>
    </Button>
  </Navbar>
    <h1>Welcome Innit!</h1>
  </>
  )
}