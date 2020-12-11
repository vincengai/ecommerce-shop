import React from 'react'
import { Card, CardMedia, CardContent, CardActions, Typography, IconButton } from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';

import useStyles from './styles';
import classes from './Product.module.css';

const Product = (props) => {
    let {id, name, description, price, image} = props.product;
    let {setShoppingCart} = props;

    // const handleClick = (e) => {
    //     e.preventDefault();

    //     setShoppingCart(props.product)        
    // }

    // const classes = useStyles();

    return (
        <div>
            <Card className={classes.root}>
                <CardMedia className={classes.media} image={image} title={name}/>
                <CardContent>
                    <div className={classes.cardContent}>
                        <Typography variant="h5" gutterBottom>
                            {name}
                        </Typography>
                        <Typography variant="h5" >
                            {price}
                        </Typography>
                    </div>
                    <Typography variant="body2" color="textSecondary">  {description} </Typography>
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
