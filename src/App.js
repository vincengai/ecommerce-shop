import React from 'react';
import {useState, useEffect} from 'react'
import {Navbar, Products} from './components/index';
import {commerce} from './lib/commerce';

const App = () => {
    const [products, setProducts] = useState([]);

    const fetchProducts = async () => {
    const { data } = await commerce.products.list();

    setProducts(data);
    };


    useEffect( () => {
        fetchProducts();
    }, [])

    console.log(products, 'my products from commerce.js')
    return (
        <div>
            <Navbar />
            <Products products={products}/>
        </div>
    )
}

export default App; 
 
