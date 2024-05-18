import Link from 'next/link'
import { Navbar } from 'react-bootstrap'

export default function Home(){
  return(
  <>
  <Navbar className="navbar">
    <Link href="/">Home</Link>
    <Link href="/store">Store</Link>
    <Link href="/about">About</Link>
  </Navbar>
    <h1>Welcome Innit!</h1>
  </>
  )
}