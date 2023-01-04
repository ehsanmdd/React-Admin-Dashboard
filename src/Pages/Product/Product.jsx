import React from 'react'
import { Link } from 'react-router-dom';
import Chart from '../../Components/Chart/Chart';
import { monthlySales } from '../../Datas';
import "./Product.css";



function Product() {
    return (

        <div className='product'>

            <div className="product__container">
                <h1 className="product__container--title">Product</h1>
                <Link to="/newProduct">
                </Link>
            </div>

            <div className="product__top">
                <div className="product__top__right">
                    <div className="product__top__right__info">
                        <img
                            src="../images/Products/BreitlingChronomat-15.jpg"
                            alt="Product Item"
                            className='product__top__right__info--img' />
                        <span className='product__top__right__info--name'>Breitling Chronomat SilverBronz</span>
                    </div>
                    <div className="product__bottom__right">
                        <div className="product__bottom__right--item">
                            <div className="product__bottom__right__item--key">ID :</div>
                            <div className="product__bottom__right__item--value">132</div>
                        </div>
                        <div className="product__bottom__right--item">
                            <div className="product__bottom__right__item--key">Name :</div>
                            <div className="product__bottom__right__item--value">Breitling Chronomat SilverBronz</div>
                        </div>
                        <div className="product__bottom__right--item">
                            <div className="product__bottom__right__item--key">Sales :</div>
                            <div className="product__bottom__right__item--value">$32.000.00</div>
                        </div>
                        <div className="product__bottom__right--item">
                            <div className="product__bottom__right__item--key">Active :</div>
                            <div className="product__bottom__right__item--value">Yes</div>
                        </div>
                        <div className="product__bottom__right--item">
                            <div className="product__bottom__right__item--key">Warehouse Capacity :</div>
                            <div className="product__bottom__right__item--value">8</div>
                        </div>
                    </div>
                </div>
                <div className="product__top__left">
                    <Chart title="Sale In Month" data={monthlySales} dataKey="sales" className="product__top__left--chart" />
                </div>
            </div>

            <div className="product__bottom">
                <form className="product__bottom__form">
                    <div className="product__bottom__form--left">
                        <label htmlFor="">Product Name</label>
                        <input type="text" placeholder='Breitling Chronomat SilverBronz' />

                        <label htmlFor="">In Werehouse</label>
                        <select id="In Werehouse">
                            <option value="Yes">Yes</option>
                            <option value="No">No</option>
                        </select>

                        <label htmlFor="">Active</label>
                        <select id=""></select>
                    </div>


                    <div className="product__bottom__form__right">
                        <button className='product__bottom__form__right--btn'>Save Data</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Product
