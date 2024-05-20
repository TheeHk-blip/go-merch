import Button from '@mui/material/Button'
import { Card, CardBody, CardFooter, CardHeader, Image } from '@nextui-org/react'
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
    <Card className="column border-none "
    isFooterBlurred
    radius='lg'
    style={{width:"300px" }}>
        <CardHeader>
            <span className="text-xl">{name}</span>
        </CardHeader>
    <CardBody className="d-flex flex-column py-2 border-none ">
        <Image
            alt=""
            className="object-cover"
            src={imgUrl}
            width={200}
        />
        <CardFooter className="justify-between border-1">
            <div className="d-flex align-items-center flex-row">
            <Button className="button" variant='contained' disableRipple={true}>+Add To Cart</Button>
            </div>
            <Row>
            <span className="float-left text-base">{formatCurrency(price)}</span>
            </Row>
        </CardFooter>
    </CardBody>
    </Card>
    </>
    )
}