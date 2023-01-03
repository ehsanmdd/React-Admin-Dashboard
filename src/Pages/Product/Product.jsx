import React from 'react'
import "./Product.css";
import { Link } from 'react-router-dom';

function Product() {
    return (
        <div className='product'>
            <div className="product__container">
                <h1 className="product__container--title">Product</h1>
                <Link to="/newProduct">
                    <button className='product__container-addbtn'>Create</button>
                </Link>
            </div>
        </div>
    )
}

export default Product
