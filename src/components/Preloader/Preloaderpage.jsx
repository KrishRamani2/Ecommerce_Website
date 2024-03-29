import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import MenuIcon from '@mui/icons-material/Menu';
import { IoCartOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
const App = () => {
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  return (
    <>
      <Button  onClick={showDrawer} style={{border:"none"}}>
        <MenuIcon />
      </Button>
      <Drawer title="Menu" onClose={onClose} open={open}>
        <p>LOGIN</p>
       <Link to ="/search"> <p>Search</p></Link>
        <p>WISHLIST</p>
        <p>BECOME A SELLER</p>
        <p style={{fontSize:"15px"}}>CART </p>
      </Drawer>
    </>
  );
};
export default App;