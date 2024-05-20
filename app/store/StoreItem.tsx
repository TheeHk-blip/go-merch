import Button from '@mui/material/Button'
import { Card, CardBody, CardFooter, Image } from '@nextui-org/react'
import Row from 'react-bootstrap/esm/Row'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    return(
    <>
    <Card className="column z-1">
        
    <CardBody className="d-flex flex-column py-2">
        <Image
            alt=""
            className="img"
            src={imgUrl}
            width={200}
        />
        <CardFooter className="footer">
            <Row>
            <span className="text-xl">{name}</span>
            <span className="float-right text-base">{formatCurrency(price)}</span>
            </Row>
            <div className="d-flex align-items-center flex-row">
            <Button className="button" variant='contained' disableRipple={true}>+Add To Cart</Button>
            </div>
            
        </CardFooter>
    </CardBody>
    </Card>
    </>
    )
}