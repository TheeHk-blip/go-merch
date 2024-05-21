import { Button } from '@nextui-org/button'
import { Card, CardBody, CardFooter, CardHeader } from '@nextui-org/card'
import { Image } from '@nextui-org/react'
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
    <Card
    className="py-4 column"
    isFooterBlurred
    radius='lg'
    shadow='sm'
    >
        <CardHeader>
            <span className="text-xl">{name}</span>
        </CardHeader>
        <Image
            isZoomed
            isBlurred
            alt=""
            className="object-cover h-full"
            src={imgUrl}
            width={200}
        />
    <CardBody className="py-2 ">
        
        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1  before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
            <div className="d-flex align-items-center flex-row">
            <Button className="button" variant='solid' color='secondary' disableRipple={true}>+Add To Cart</Button>
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