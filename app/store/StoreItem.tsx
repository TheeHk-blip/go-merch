import { Button, CardBody, CardImg, CardTitle } from 'react-bootstrap'
import Card from 'react-bootstrap/esm/Card'
import { formatCurrency } from '../utilities/formatCurrency'

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    const quantity = 1
    return(
        <Card className="card">
            <CardBody>
                <CardImg src={imgUrl} className="img"/>
                <CardTitle className="ctitle">
                    <span>{name}</span>
                    <span>{formatCurrency(price)}</span>
                </CardTitle>
                <div>
                    {quantity === 1?(
                        <Button>+Add To Cart</Button>):null}
                </div>
            </CardBody>
        </Card>
    )
}