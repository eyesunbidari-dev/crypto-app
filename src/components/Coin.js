import React from 'react';

import  "./Coin.css"

const Coin = ({name , image , symbol , price , priceChange , marketCap}) => {
    return (
        <div  className="container">
            <img src={image} alt={name}  className="image"/>
            <span className="name">{name}</span>
            <span className="symbol">{symbol.toUpperCase()}</span>
            <span className="currentPrice">$ {price.toLocaleString()}</span>
            <span className={
                    priceChange > 0 ? "greenPriceChange" : "redPriceChange"
                }>
                    {priceChange.toFixed(2)}
            </span>
            <span className="marketCap">$ {marketCap.toLocaleString()}</span>
            
        </div>
    );
};

// import styles from "./Coin.module.css"

// const Coin = ({name , image , symbol , price , priceChange , marketCap}) => {
//     return (
//         <div  className={styles.container}>
//             <img src={image} alt={name}  className={styles.image}/>
//             <span className={styles.name}>{name}</span>
//             <span className={styles.symbol}>{symbol.toUpperCase()}</span>
//             <span className={styles.currentPrice}>{price.toLocaleString()}</span>
//             <span className={
//                     priceChange > 0 ? styles.greenPriceChange : styles.redPriceChange
//                 }>
//                     {priceChange}
//             </span>
//             <span className={styles.marketCamp}>{marketCap.toLocaleString()}</span>
            
//         </div>
//     );
// };

export default Coin;