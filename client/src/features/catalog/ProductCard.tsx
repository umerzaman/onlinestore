import { Avatar, CardMedia, Card, CardContent, Typography, CardActions, Button, CardHeader } from "@mui/material";
import { Link } from "react-router-dom";
import { Product } from "../../app/models/product";


interface Props {
    product:Product
}

export default function ProductCard({product}:Props){



    return(
        <>

        <Card>
            <CardHeader
            avatar={
                <Avatar sx={{bgcolor:'secondary.main'}}>
                    {product.name.charAt(0).toUpperCase()}
                </Avatar>
            }

            title={product.name}

            titleTypographyProps={{
                sx:{
                    fontWeight:'bold',
                    colro:'primary.main'
                }
            }}

           />
          
            <CardMedia
              sx={{height:140, backgroundSize:'contain', 
              bgcolor:'primary.light'
            }}
              image="http://picsum.photos/200" 
              title={product.name}
            />
            <CardContent>
                <Typography color='secondary' gutterBottom variant='h5' component='div' >
                        ${(product.price / 100).toFixed(2)}
                </Typography>
                <Typography  variant='body2' color='text.secondary' >
                        {product.brand} / {product.type}
                </Typography>
            </CardContent>        
            <CardActions>
            <Button size='small'>
                Add To Cart
            </Button>
            
            <Button component={Link} to={`/catalog/${product.id}`} size='small'>
                View
            </Button>
            </CardActions>    
        </Card>
        </>
    )

}