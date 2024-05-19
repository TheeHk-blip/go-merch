import { Card } from '@mui/material'
import CardBody from 'react-bootstrap/esm/CardBody'
import CardImg from 'react-bootstrap/esm/CardImg'

type StoreItemProps={
    id:number
    name:string
    imgUrl:string
    price:number
}

export function StoreItem({id, name, imgUrl, price}:StoreItemProps){
    return(
        <Card>
            <CardBody>
                <CardImg src={imgUrl} className="img"></CardImg>
            </CardBody>
        </Card>
    )
}