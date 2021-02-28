import React from 'react'
import { Link } from 'react-router-dom'
import ProductCard from '../ProductCard/ProductCard'
import Button from './../Button/Button';
import "./CategoryListItem.css"


const CategoryListItem = ({category,products}) => {
    
    return (
        <div className="category-list-item">
             <h1 className="category-text"><Link to={`/CategoryProducts/${category}`}>{category}</Link></h1>
            {products.map((product)=><ProductCard key={product.title} {...product}/>)}
           {/* <Link to={`/CategoryProducts/${category}`}><Button fontSize={12} background="rgba(0,0,0,0.8)">View more </Button></Link>  */}
            <br/>
            {/* ----------------------------------------------------------------------------------- */}
        </div>
    )
}

export default CategoryListItem
