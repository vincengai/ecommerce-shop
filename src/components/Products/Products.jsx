import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product';

import useStyles from './styles.js';

// const products = [
//     {id: 1, name: 'shoes', description: 'running shoes lee loo', price:'$50', image: 'https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg'},
//     {id: 2, name: 'macbook', description: 'apple macbook lee looo', price: '500', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQm_GgRXGxPOLUIr5mcnex3xa9oILF30x1ztg&usqp=CAU'}
//     // {id: 3, name: 'shoes', description: 'running shoes lee loo'}
//     // {id: 4, name: 'shoes', description: 'running shoes lee loo'}
// ]

const Products = ({products}) => {
    const classes = useStyles();

    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container justify='center' spacing={4}>
                {products.map( (product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <Product product={product}/>
                    </Grid>
                ))}
            </Grid>
        </main>
    )
}

export default Products

