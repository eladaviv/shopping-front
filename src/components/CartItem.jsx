import React from "react"
import Button from '@mui/material/Button';
import './Item.css'

function CartItem(props) {
    const item = props.item;

    return (
<>
        <div className='item'>
            <div className='leftContainer'>
                <div className="item_title"> {item?.title}</div>
                <div className="item_price"> {item?.price}</div>
            </div>
            <Button variant="contained" color="error" onClick={props.deleteFromCart}>Delete Item</Button>
            <img className='item_image' src={require(`../assets/${item?.imagePath}`)} alt="itemImage" />
        </div>
</>

    );
}

export default CartItem;