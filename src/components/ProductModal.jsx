import * as React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: 'background.paper',
  border: '2px solid',
  boxShadow: 24,
  p: 4,
};

export default function ProductModal(props) {

  const addToCart = ()=>{
    props.addToCart(props?.item);
    props.closeModal();
  }

  return (
    <div>
      {props.item?.imagePath2 &&
        <Modal
          open={props.isOpen}
          onClose={props.closeModal}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Card sx={{ ...style }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  <img style={{ width: "150%" }} src={require(`../assets/${props.item.imagePath}`)} alt="" />
                </Avatar>
              }
              title={props.item?.title}
              subheader={`${props.item?.price} $`}
            />
            <CardMedia
              component="img"
              height="194"
              image={require(`../assets/${props?.item?.imagePath2}`)}
              alt="img"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {props.item?.description}
              </Typography>
              <Button variant="contained" onClick={addToCart}>Add To Cart</Button>

            </CardContent>

          </Card>
        </Modal>
      }
    </div>
  );
}