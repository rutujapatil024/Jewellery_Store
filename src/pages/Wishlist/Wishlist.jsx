import React, { useContext } from 'react';
import './Wishlist.css';
import { StoreContext } from '../../Context/StoreContext';
import { useNavigate } from 'react-router-dom';

const Wishlist = () => {
    const { wishlistItems, product_list, removeFromWishlist } = useContext(StoreContext);

    return (
        <div className='wishlist'>
            <div className="wishlist-items">
                <div className="wishlist-items-title">
                    <p>Items</p>
                    <p>Title</p>
                    <p>Price</p>
                    <p>Remove</p>
                </div>
                <br />
                <hr />
                {product_list.map((item, index) => {
                    if (wishlistItems[item._id] > 0) {
                        return (
                            <div key={index}>
                                <div className='wishlist-items-title wishlist-items-item'>
                                    <img src={item.image} alt="" />
                                    <p>{item.name}</p>
                                    <p>Rs.{item.price}</p>
                                    <p>{wishlistItems[item._id]}</p>
                                    <p onClick={() => removeFromWishlist(item._id)} className='cross'>X</p>
                                </div>
                                <hr />
                            </div>
                        );
                    }
                    return null;
                })}
            </div>
        </div>
    );
}

export default Wishlist;
