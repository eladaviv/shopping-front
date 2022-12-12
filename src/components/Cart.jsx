import React, { useState, useEffect } from "react";
import UserDetails from "./UserDetails";
import Box from '@mui/material/Box';
import CartItem from "./CartItem";
import api from "../config/api";
import Swal from "sweetalert2";

const Cart = (props) => {

    const deleteItemFromCart = (itemId)=>{
        props.deleteItemFromCart(itemId);
    }

    const handleSubmit = (data) => {
        if (data.email === "" || data.firstName === "" || data.lastName === "") {
            Swal.fire(
                'failed to send!',
                'you need to fill all the above!',
                'warning'
            )
        } else {

            const dataToSend = {
                ...data,
                cart: {
                    totalQty: props.cart?.length,
                    totalPrice: props?.totalPrice,
                    items: props.cart?.map(item => {
                        return {
                            productId: item._id,
                            qty: 1,
                            price: item.price,
                            title: item.title
                        }
                    })
                }

            }
            api.post("orders/", { ...dataToSend }).then((response) => {
                Swal.fire(
                    'Good job!',
                    'your order has been uploaded to mongodb successfully!',
                    'success'
                )

                props.emptyCart();
            }).catch((error) => { console.log(error); });
        }
    };

    const renderCartItems = () => {
        return props.cart.map(item => { return <CartItem key={item._id} item={item} deleteFromCart={()=>deleteItemFromCart(item._id)}/> })
    };

    return (
        <>
            {props.cart?.length ? <>
                <UserDetails handleSubmit={handleSubmit} totalPrice={props.totalPrice} />
                {renderCartItems()}
            </> : <Box
                sx={{
                    // marginTop: 8,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            ><h1>no items in cart</h1></Box>}
        </>
    );
}

export default Cart;