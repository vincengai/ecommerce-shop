import React from 'react';
import {useState, useEffect} from 'react'
import {Navbar, Products} from './components/index';
import {commerce} from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

  const fetchProductsAPI = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
  };


    useEffect( () => {
        fetchProductsAPI();
    }, [])

    // console.log(products, 'my products from commerce.js')
    return (
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
    )
}

export default App; 
 
