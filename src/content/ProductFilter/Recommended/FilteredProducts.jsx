import styled from "styled-components";
import "./FilteredProduct.css"
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { IoIosSearch } from "react-icons/io";
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import { Link } from 'react-router-dom';
import { MdAddShoppingCart } from "react-icons/md";
import { AiFillStar } from "react-icons/ai";
import { BsFillBagHeartFill, BsFillHeartFill } from "react-icons/bs";
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

const FilteredItem = ({ item }) => {
  const renderStars = () => {
    const stars = [];
    for (let i = 0; i < item.star; i++) {
      stars.push(<AiFillStar key={i} className="rating-star" />);
    }
    return stars;
  };

  return (
    <Link to={`/productpage/${item._id}`} className="link">
      <section className="card-container">
        <section className="card">
          <img src={item.img} alt={item.categories} className="card-img" />
          <div className="card-details">
            <section className="card-reviews">
              {renderStars()}
              <span className="total-reviews">{item.star}</span>
            </section>
            <section className="card-price">
              <div className="price">
                ₹{item.price} <del>₹{item.prevPrice}</del>
              </div>
              <div className="card-discount">
                {(((item.prevPrice - item.price) / item.prevPrice) * 100).toFixed(2)}%
              </div>
              <div className="bag">
                <BsFillBagHeartFill className="bag-icon" />
              </div>
            </section>
          </div>
        </section>
      </section>
    </Link>
  );
};

export default FilteredItem;