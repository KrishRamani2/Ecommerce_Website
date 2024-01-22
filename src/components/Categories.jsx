import styled from "styled-components"
import { categories } from "../content/data"
import CategoryItem from "./CategoryItem"
const Container = styled.div`
display:flex;
padding:20px;
justify-content: space-between;
@media screen and (max-width: 470px) {
    padding: 0px;
    flex-direction: column;
  }
`


const Categories = () => {
  return (
    <Container>
        {categories.map(item=>(
            <CategoryItem item={item}/>
        ))}
    </Container>
  )
}

export default Categories