import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import classes from './Product.module.css';

const Product = ({product}) => {
    // let {setShoppingCart} = props;
    console.log(product)    
    
    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={product.media.source} title={product.name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" >
                            {product.price.formatted_with_symbol}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">  {product.description} </Typography>
                </CardContent>

                <CardActions disableSpacing className={classes.cardActions}> 
                    <IconButton  aria-label="Add to Card" value=''>
                        <AddShoppingCart />
                    </IconButton>
                </CardActions>
            </Card>
        </div>
    )
}

export default Product
