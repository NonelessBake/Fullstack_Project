import React from 'react'
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../contexts/ContextProvider";
import "../assets/style/homeProducts.css";
import HomeProducts from './HomeProducts';

function ProductDetail() {
    const {
        productItem,
        formatNumber,
    } = useContext(Context);

    return (
        <div>
            {productItem.map((item) => (
                <div key={item.id} className="productDetail" style={{ marginBottom: "50px" }}>
                    <div className="detail d-flex">
                        <div className="img-detail d-flex flex-column" style={{ margin: "20px" }}>
                            <img src={item.img[0]} alt={item.name} className="img-detail-1" style={{ width: "500px", height: "500px" }} />
                            <div className="d-flex">
                                <img src={item.img[1]} alt={item.name} className="img-detail-2" style={{ width: "200px", height: "200px", margin: "10px" }} />
                                <img src={item.img[2]} alt={item.name} className="img-detail-3" style={{ width: "200px", height: "200px", margin: "10px" }} />
                            </div>
                        </div>
                        <div className="description" style={{ margin: "20px" }}>
                            <h4 className="">Description</h4>
                            <h1 className="">{item.name}</h1>
                            <p>
                                <span className="price-before" style={{ marginLeft: "20px", fontSize:"25px" }}>
                                    ${item.price.toFixed(2)}
                                </span>
                                <span className="new-price" style={{ marginLeft: "20px", fontSize:"25px" }}>
                                    ${formatNumber(item.price * (1 - item.discount / 100))}
                                </span>
                                <span className="discount" style={{ marginLeft: "20px", fontSize:"25px" }}>
                                    -{item.discount}%
                                </span>
                            </p>
                            <p>{item.discription}</p>
                            <p style={{fontSize:"25px", color:"red" }}>Hurry up !</p>
                            <div></div>
                            <div className="d-flex">
                                <div className="countChange d-flex" style={{ marginLeft: "20px", width: "150px" }}>
                                    <button className="decrease" style={{ width: "40px" }}>-</button>
                                    <div className="increase d-flex justify-content-center" style={{ width: "40px", fontSize:"25px"}}>1</div>
                                    <button style={{ width: "40px" }}>+</button>
                                </div>
                                <button className="addToCart" style={{ marginLeft: "20px", width: "200px"}}>Add To Cart</button>
                            </div>
                            <hr />
                            <div>
                                Categories: {`${item.category},`}
                            </div>
                            <div>
                                Tags: {`${item.tags},`}
                            </div>
                            <div className="share d-flex align-items-center">
                                Share in:
                                <ul className="social-link" style={{ marginLeft: "10px" }}>
                                    <li className="twitter link">
                                        <Link>
                                            <i className="uil uil-twitter"></i>
                                        </Link>
                                    </li>
                                    <li className="instagram link">
                                        <Link>
                                            <i className="uil uil-instagram"></i>
                                        </Link>
                                    </li>
                                    <li className="facebook link">
                                        <Link>
                                            <i className="uil uil-facebook-f"></i>
                                        </Link>
                                    </li>
                                    <li className="youtube link">
                                        <Link>
                                            <i className="uil uil-youtube"></i>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="reviews d-flex" style={{ marginLeft: "20px" }}>
                        <h4>Reviews</h4>
                        <div className="d-flex" style={{ marginLeft: "50px" }}>
                            <div className="">
                                <p>There are no reviews yet.</p>
                                <div className="cocoment">BE THE FIRST TO REVIEW {`"${item.name.toLocaleUpperCase()}".`}</div>
                                <form action="/action_page.php" style={{ marginTop: "10px" }}>
                                    <div>
                                        <label htmlFor="fname">First name:</label><br />
                                        <input type="text" id="fname" style={{ padding: "10px", width: "300px" }} name="fname" defaultValue="Henrry" /><br />
                                        <label htmlFor="lname">Last name:</label><br />
                                        <input type="text" id="lname" style={{ padding: "10px", width: "300px" }} name="lname" defaultValue="Pham" /><br />
                                        <input type="submit" style={{ marginTop: "5px", width: "200px" }} value="Submit" />
                                    </div>
                                </form>
                            </div>
                            <textarea name="cus-reviews" style={{ marginLeft: "50px", padding: "10px" }} cols="50" rows="10" placeholder="Your reviews"></textarea>
                        </div>
                    </div>
                    <hr/>
                </div>
            ))}
            <hr/>
            <div className="relatedProducts">
                <HomeProducts/>
            </div>
        </div>
    )
}

export default ProductDetail