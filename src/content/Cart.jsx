import styled from "styled-components";
import Heading from "../components/Heading";
import Announcements from "../components/Announcements";
import Footer from "../components/Footer";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import React, { useEffect, useState  } from "react";
import AlertPage from "../components/AlertPage";
import { useSelector } from "react-redux";
import Products from "../components/Products";
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from "./RequestMethod";
import { Link, useNavigate } from "react-router-dom";
import { updateCart , addProduct ,removeAllQuantity, dispatchAllProducts } from "../redux/CartRedux";
import { useDispatch } from "react-redux";
import { ImBin } from "react-icons/im";


const Container = styled.div``;
const Wrapper = styled.div`
  padding: 20px;
  @media screen and (max-width:470px) {
    padding: 10px;
  }
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: center;
  @media screen and (max-width:470px) {
    flex-direction: column;
  }
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${props => props.type === "filled" && "none"};
  background-color: ${props => props.type === "filled" ? "black" : "transparent"};
  color: ${props => props.type === "filled" && "white"};
  border-radius: 25px;
`;

const TopTexts = styled.div`
  @media screen and (max-width:470px) {
    display: none;
  }
`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Info = styled.div`
  flex: 3;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgrey;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const Image = styled.img`
  width: 170px;
  height: 200px;
  object-fit: contain;
    aspect-ratio: 3/2;
    mix-blend-mode: color-burn;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px; // Add margin here
  @media screen and (max-width:470px) {
    flex-direction: column;
  }
`;


const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductID = styled.span``;

const ProductColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border:1px solid black;
  background-color: ${props => props.color};
`;

const ProductSize = styled.span``;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-bottom: 20px;
  @media screen and (max-width:470px) {
    margin: 5px 15px;
  }
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  @media screen and (max-width:470px) {
    margin-bottom: 20px;
  }
`;

const COUNT = styled.div`
  font-size: 24px;
  margin: 5px;
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
  margin: 20px 0; // Add margin here
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${props => props.type === "total" && "500"};
  font-size: ${props => props.type === "total" && "24px"};
`;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const SummaryButton = styled.button`
  width: 100%;
  padding: 10px;
  background-color: black;
  color: white;
  font-weight: 600;
`;
const RemoveButton = styled.button`
  background-color: #d90429;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
  display: flex;
  align-items: center; /* Center the icon and text vertically */
  justify-content: center; /* Center the icon and text horizontally */
  .icon{
    
    visibility: hidden;
    margin-right:-10px;
    opacity: 0;
    transition: visibility 0s, opacity 0.3s ease;
  }
  &:hover {
    background: transparent;
    color: #d90429;
  }

  &:hover .text{
    display: none;
  }
  &:hover .icon{
    visibility: visible;
      opacity: 1;
  }
`;
const RemoveText = styled.span`
&:hover{
  display:none;
}
`
const RemoveIconss = styled(ImBin)`

  margin-right: 5px;


   /* Add some spacing between the icon and text */
`;
// Add a new styled component for the remove icon
const Cart = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.user); // Assuming user state is stored in Redux store
  console.log(user)
  const cart = useSelector((state) => state.cart);
  const navigate = useNavigate();
  const addToCart = (product) => {
    dispatch(addProduct(product));
  };
  const products = useSelector((state) => state.cart.products);
  const KEY = "pk_test_51OPdfHSJqp2Eim97slkP7D9StEmIP94k7XFry53Q9sH2PxIxRvnPH4PlC8ahmHkmrEkkVxFFrShOWln6tDLE07bv00uDbzGVNR";
  const [showAlert, setShowAlert] = useState(false);
  const [subtotal, setSubtotal] = useState(0);
  const Incum = (productId ) => {
    dispatch(updateCart({ productId, quantity: 1 }));
    const newSubtotal = subtotal ;
    setSubtotal(newSubtotal);
  };
 
  const Decum = (productId ) => {
    dispatch(updateCart({ productId, quantity: -1 }));
    const newSubtotal = subtotal ;
    setSubtotal(newSubtotal < 0 ? 0 : newSubtotal);
  };
  const removeProduct = (productId, size) => {
    dispatch(removeProduct({ productId , size }));
  };
  const closeAlert = () => {
    setShowAlert(false);
  };
  const removeFromCart = (productId) => {
    dispatch(removeAllQuantity(productId));
  };
  const summary = (products) =>{
    dispatch(dispatchAllProducts(products));
    navigate("/ordersummary")
  }
  console.log(products);
  useEffect(() => {
    const newSubtotal = cart.products.reduce((acc, product) => acc + product.price * product.count, 0);
    setSubtotal(newSubtotal);
  }, [cart.products]);
  const [stripeToken, setStripeToken] = useState(null);
  const shippingCharge = 40;
  const freeShippingThreshold = 250;
  const totals = (subtotal > freeShippingThreshold || subtotal === 0)
  ? subtotal
  : subtotal + shippingCharge;
  const onToken = (token) => {
    setStripeToken(token);
  };
    
  useEffect(() => {
    const makeRequest = async () => {
      try {
        const res = await userRequest.post('/checkout/payment', {
          tokenId: stripeToken.id,
          amount:50000,
        });
        if (res.success) {
          // Use navigate to go to the successful payment page
          navigate("/successfulpayment");
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

    if (stripeToken) {
      makeRequest();
    }
  }, [stripeToken, cart.total, navigate]);
  useEffect(() => {
    if (cart.count === 0) {
      navigate("/emptycart");
    }
  }, [cart.count, navigate]);
  return (
    <>
      <Container>
        <Heading />
        <Announcements />
        <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
            <TopButton>CONTINUE SHOPPING</TopButton>
            <TopTexts>
              <TopText>Shopping Bag({cart.products.length})</TopText>
              <TopText>Your Wishlist(0)</TopText>
            </TopTexts>
            <Link to="/ordersummary"><TopButton type="filled"  onClick={summary}>CHECKOUT NOW</TopButton></Link>
          </Top>
          <Bottom>
         
            <Info>
              {cart.products.map((product) => (
                <Product key={product.productId}>
                  <ProductDetail>
                  <Link to={`/productpage/${product._id}`}>
                    <Image src={product.img} />
                    </Link>
                    <Details>
                      <ProductName>
                        <br />
                        <b>Product:</b>
                        {product.title}
                      </ProductName>
                       <ProductID>
                        <br />
                        <b>ID:</b>{product._id.substring(5, 8)}
                      </ProductID> 
                      <ProductColor color={product.color} />
                      <ProductSize>
                        <b>Size:</b> {product.size}
                      </ProductSize>
                    </Details>
                  </ProductDetail>
                  <PriceDetail>
                    <ProductAmountContainer>
                    <RemoveIcon onClick={() => Decum(product._id, product.price)} />
            <COUNT>{product.count}</COUNT>
            <AddIcon onClick={() => Incum(product._id, product.price)} />
                    </ProductAmountContainer>
                    <ProductAmount>₹{product.price * product.count}</ProductAmount>
              <RemoveButton onClick={() => removeFromCart(product._id)}>
              <RemoveIconss className="icon"/>
              <RemoveText className="text">Remove</RemoveText>
            </RemoveButton>
                  </PriceDetail>
                  
                </Product>
              ))}
              
              <Hr />
            </Info>
            <Summary>
              <SummaryTitle>ORDER SUMMARY</SummaryTitle>
              <SummaryItem>
                <SummaryItemText>TOTAL</SummaryItemText>
                <SummaryItemPrice>₹{totals}</SummaryItemPrice>
              </SummaryItem>
              {(subtotal > freeShippingThreshold) || (subtotal === 0) ? (
                <SummaryItem>
                  <SummaryItemText>SHIPPING CHARGE</SummaryItemText>
                  <SummaryItemPrice>₹0</SummaryItemPrice>
                </SummaryItem>) : (
                <SummaryItem>
                  <SummaryItemText>SHIPPING CHARGE</SummaryItemText>
                  <SummaryItemPrice>₹{shippingCharge}</SummaryItemPrice>
                </SummaryItem>
              )}
              {console.log(cart.total)}
              <SummaryItem type="total">
                <SummaryItemText type="total">SUBTOTAL</SummaryItemText>
                <SummaryItemPrice>₹{subtotal}</SummaryItemPrice>
              </SummaryItem>
              <StripeCheckout 
              billingAddress
              shippingAddress
              description={`Your total is ${cart.total}`}
              amount={cart.total*100}
              token={onToken}
              stripeKey={KEY}
              >
              <SummaryButton>CHECKOUT NOW</SummaryButton>
              </StripeCheckout>
            </Summary>
          </Bottom>
        </Wrapper>
        <Footer />
      </Container>
      {showAlert && <AlertPage onClose={closeAlert} />}
    </>
  )
}

export default Cart;
