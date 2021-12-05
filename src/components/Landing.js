import React , {useState , useEffect} from 'react';
import { getCoin } from '../services/api';
import Coin from './Coin';
import './Landing.css';


const Landing = () => {
    const [coins , setCoins] = useState([]);
    const [search , setSearch] = useState("");
    useEffect(() => {
        const fetchAPI = async () => {
            const data = await getCoin();
            console.log(data)
            setCoins(data)
        }
        fetchAPI()
    } , [])
    const searchHandler = (event) => {
        setSearch(event.target.value)
    }
    const searchCoins = coins.filter(coin =>
        coin.name.toLowerCase().includes(search.toLowerCase())
        )
    return (
        <>
        <input type="text" value={search} onChange={searchHandler} placeholder="Serach" className="input" />
        <div className="coinContainer">
            {
                searchCoins.map(coin => <Coin
                             key={coin.id}
                             name={coin.name}
                             image={coin.image}
                             symbol={coin.symbol}
                             price={coin.current_price}
                             priceChange={coin.price_change_percentage_24h}
                             marketCap ={coin.market_cap}

                />
                    )
            }
        </div>

        </>
    );
};

export default Landing;