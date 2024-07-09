import { ProductCard } from "./ProductCard.jsx";
import { productList } from './Product.js';
import '../App.css';
import { useState } from 'react';

export function ProdDisplay(){
    const [cart, setCart] = useState([]);

    function addToCart(product){
        setCart([...cart, product])
    }
    return (
        <div className="product-display">
            {productList.map((item) => 
                <ProductCard key={item.id} product={item} addToCart={addToCart}/>
            )}
        </div>
    )
}
