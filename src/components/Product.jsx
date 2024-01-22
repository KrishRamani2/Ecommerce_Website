import styled from "styled-components";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IoIosSearch } from "react-icons/io";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from 'react-router-dom';
const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.1);
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5fbfd;
  position: relative;
  margin-top: 70px;
  margin-bottom: -15px;
  cursor: pointer;
  &:hover ${Info} {
    opacity: 1;
    transition: all 0.5s ease;
  }
  @media screen and (max-width:470px) {
    padding: 10px;
  flex-direction: column;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  cursor: pointer;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
    color: white;
  }
`;

const Images = styled.img`
  height: 75%;
  z-index: 2;
  transition: all 0.5s ease;
  filter: brightness(0.9) contrast(1.2);

  ${Container}:hover & {
    /* content: ${(props) => `url(${props.item.bimg})`}; */
    
  }
  @media screen and (max-width:470px) {
    width:75%;
  }
`;

const ProductItem = ({ item }) => {
  return (
    <Container>
      <Circle />
      <Images src={item.img} item={item} />
      <Info>
        <Icon>
          <ShoppingCartOutlinedIcon />
        </Icon>
        <Icon>
        <Link to={`/productpage/${item._id}`} >
          <IoIosSearch />
          </Link>
        </Icon>
        <Icon>
          <FavoriteBorderRoundedIcon />
        </Icon>
      </Info>
    </Container>
  );
};

export default ProductItem;
