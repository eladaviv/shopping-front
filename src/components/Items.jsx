import React,{useState,useEffect} from "react"
import Item from "./Item";
import ProductModal from "./ProductModal";
// import Header from "./Header";
import api from "../config/api";

function Items(props) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});
  const [items, setItems] = useState([]);

  useEffect(() => {
    api.get('products/').then(({data}) => {
      setItems(data);
    }).catch((error) => {
      console.log(error);
    })
  }, [])
  
  const openModal = () => {
      setModalIsOpen(true);
  }
  const closeModal = () => {
      setModalIsOpen(false);
  }
const onItemSelected = (item)=>{
  setSelectedItem(item)
  openModal();
}
  
  const renderItems = () => {
    return items.length && items.map(item => {
      return <Item
        onSelectedItem={onItemSelected}
        key={item._id}
        item={item}
      />
    })
  }
  return (
    <div>
      <h2 style={{ textAlign: "center" }}> car shopping list</h2>
      {items.length && renderItems()}
      <ProductModal
        isOpen={modalIsOpen}
        closeModal={closeModal}
        item={selectedItem}
        addToCart={props.addToCart}
      />
    </div>
  );
}

export default Items;
