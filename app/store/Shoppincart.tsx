import { Stack } from "react-bootstrap";
import { CartItem } from "./CartItem";
import { useStoreItem } from "./StoreItemContext";

export function Shoppingcart (){
    const {cartItems} = useStoreItem()
    return(
    <Stack>
        {cartItems.map (item =>(
            <CartItem key={item.id} {...item} />
        ))}
    </Stack>
    )
}
