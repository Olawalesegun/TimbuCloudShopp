import '../App.css';

export function ProductCard({ product, addToCart }){

    return ( 
        <div className="product-card">
            {product.isNew && (<span  className="new-badge">NEW</span>)}
            <span className="favorite-icon">❤️</span>
            <img src={product.image} alt={product.name}/>
            <div className="shoeTitle">
                <div className="categr">
                    <h3>{product.name}</h3>
                    <p className="details">{product.category}</p>
                </div>
                <p className="price">₦ {product.price}</p>
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
    )
}   

 /* <div width="376px" height="556px" className="product-card"> */