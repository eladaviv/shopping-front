import React from "react"
import './Item.css'

function Item(props) {
    const item = props.item;

    const openModal = () => {
        props.onSelectedItem(item)
    }

    return (
        <>
            <div className='item' onClick={openModal}>
                <div className='leftContainer'>
                    <div className="item_title"> {item?.title}</div>
                    <div className="item_price"> {item?.price}</div>
                </div>
                <img className='item_image' src={require(`../assets/${item?.imagePath}`)} alt="itemImage" />
            </div>
        </>
    );
}

export default Item;