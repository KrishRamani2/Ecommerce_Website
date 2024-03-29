import React, { useEffect, useState } from 'react';
import axios from 'axios';
import SearchBar from './Search';
import SearchResults from './SearchResults';
import { useSelector } from 'react-redux';
import { TbLayoutSidebarLeftCollapseFilled } from "react-icons/tb";
import { FaRegUser, FaVideo } from "react-icons/fa";
import { FaUpload } from "react-icons/fa6";
import { Layout, Menu, Button, theme, Space, Dropdown, Tooltip } from 'antd'; // Import Space and Dropdown from 'antd'
import { TbLayoutSidebarRightCollapseFilled } from "react-icons/tb";
import AlertSearch from './AlertSearch';
import SearchItem from './SearchPageItem';
import { Carousel } from 'antd';
import Products from './Products'; 
import { TbCategory } from "react-icons/tb";
import { Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const SearchPage = ({ cat }) => {
  const [results, setResults] = useState([]);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [value, setValue] = useState('');
  const count = useSelector(state => state.cart.count);
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false); // State to manage dropdown visibility
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  const handleClick = () => {
    setClicked(!clicked);
  };

  const onChange = (event) => {
    setValue(event.target.value);
  };

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:3000/api/product?category=${cat}`
            : 'http://localhost:3000/api/product'
        );
        setProducts(res.data);
        console.log('Products fetched:', res.data);
      } catch (error) {
        console.log('Error fetching products:', error);
        setError(true);
      }
    };
    getProducts();
  }, [cat]);

  const onSearch = (event) => {
    event.preventDefault();
    const searchWords = value.toLowerCase().split(' ');
    const filteredResults = products.filter(product => {
      // Convert product name to lowercase for case-insensitive comparison
      const productName = product.name.toLowerCase();

      // Check if all search words are present in the product name
      return searchWords.every(word => productName.includes(word));
    });

    // Remove duplicate products
    const uniqueResults = Array.from(new Set(filteredResults.map(result => result.id)))
      .map(id => {
        return filteredResults.find(result => result.id === id);
      });

    // Update the results state with unique filtered results
    setResults(uniqueResults);
  }

  const handleCategoryClick = () => {
    setDropdownVisible(!dropdownVisible); // Toggle dropdown visibility
  }

  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  return (
    <>
      <Header style={{ backgroundColor: '#e9ecef', padding: '0 16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderBottom: '1px solid #f0f0f0' }}>
        <div>
          <h1 style={{fontSize:"20px"}}>ZENARA</h1>
        </div>
        <div style={{ flex: 1, marginLeft: 16 }}> 
          <Dropdown
            overlay={<SearchResults results={results} />}
            placement="bottomLeft" // Adjust placement as needed
            overlayStyle={{background:"#f6fff8"}}
          >
            <Space style={{alignItems:"center" }}>
              <SearchBar setResults={setResults} style={{ width: '100%' }} />
            </Space>
          </Dropdown>
        </div>
        <div>
          <Space>
            <Dropdown 
              overlay={
                <Menu>
                  <Menu.Item key="0">
                    <Link href="https://www.antgroup.com">Eyeware & Accessories</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="1">
                  <Link href="https://www.antgroup.com">Mobiles & Accessories</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">TVs & Electronics</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Office & Kitchen Appliance</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Tools & Accessories</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Books & Sports</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Hardware & Electricals</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Furniture,Decor & Furnishing</Link>
                  </Menu.Item>
                  <Menu.Divider />
                  <Menu.Item key="3">                    
                  <Link href="https://www.antgroup.com">Health & Personal Care</Link>
                  </Menu.Item>
                  <Menu.Divider />
                </Menu>
              }
              visible={dropdownVisible} // Control the visibility of the dropdown
              onClick={handleCategoryClick} // Open dropdown on click
            >
              <Tooltip title="Search By Category">
                <Button><TbCategory /></Button>
              </Tooltip>
            </Dropdown>
          </Space>
        </div>
      </Header>
      <Carousel autoplay style={{margin:"35px",marginBottom:"-35px"}}>
        <div>
          <img src="https://m.media-amazon.com/images/G/31/IMG20/Furniture/2024/March/WSD24/4/SLEEP-HEADERPC._SX3000_QL85_.jpg" />
        </div>
        <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img22/Networking_devices/1500X300_-Networking_devices.jpg" />
        </div>
        <div>
          <img src="https://m.media-amazon.com/images/G/31/img24/securefest-march/1500x400_securefest._CB579230815_.jpg" />
        </div>
        <div>
          <img src="https://images-eu.ssl-images-amazon.com/images/G/31/AmazonBusiness/BBD_newstyleguide/1173_AB_BB_Store_TopBanner_1500x300.gif" />
        </div>
      </Carousel>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: "35px" }}>
        <Products />
      </div>
    </>
  )
}

export default SearchPage;
