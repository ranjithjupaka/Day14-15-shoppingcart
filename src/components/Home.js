import React from 'react'
import { CartState } from '../context/Context';
import './Styles.css'

const Home = () => {
    const { state : { products } } = CartState();
    console.log(products);

    return (
        <div className="home">
          { products.map((prod) => (
              {/* <span>{prod.name}</span> */}
          ))} 
        </div>
    )
}

export default Home
