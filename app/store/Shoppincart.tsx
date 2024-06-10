import { Box, Drawer, List } from "@mui/material";
import { Button } from "@nextui-org/react";
import React from "react";
import { CartItem } from "./CartItem";
import { useStoreItem } from "./StoreItemContext";



export function ShoppingCart(){
    const {cartItems} = useStoreItem()
    const [open,setOpen ] = React.useState(false);

    const toggleDrawer = (newOpen:boolean) => () =>{
        setOpen(newOpen);
    }

    const DrawerList = (
        <Box sx={{width:250}}>
            <List>
                    {cartItems.map(item => (
                        <CartItem key={item.id} {...item} />
                    ))}
            </List>
        </Box>
    )

    return (
        <Button onClick={toggleDrawer(true)}>Open Cart
            <Drawer open={open} onClose={toggleDrawer(false)} >
                {DrawerList}
            </Drawer>
        </Button>
    )
}
