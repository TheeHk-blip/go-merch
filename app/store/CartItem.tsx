import { Button } from "@nextui-org/react"
import Image from "next/image"
import { Stack } from "react-bootstrap"
import storeItems from '../data/items.json'
import { formatCurrency } from "../utilities/formatCurrency"
import { useStoreItem } from "./StoreItemContext"

type CartItemProps = {
    id: number
    quantity: number
}

export function CartItem({id, quantity}:CartItemProps){
    const {removeFromCart} = useStoreItem()
    const item = storeItems.find( i=> i.id === id )
    if (item == null) return null
    return(
        <Stack direction='horizontal'>
            < Image
            alt={''}
            src={item.imgUrl}
            style={{width:'125px', height:'75px', objectFit:'cover'}}
            />
            <div>
                <div>
                    {item.name} {quantity > 1 && (
                        <span>
                            x{quantity}
                        </span>
                    ) }
                </div>
                <div>{formatCurrency(item.price * quantity)}</div>
                <Button onClick={() => removeFromCart(item.id)}>&times;</Button>
            </div>
        </Stack>
    )
}