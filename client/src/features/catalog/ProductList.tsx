import {Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";


interface Props {

    products:Product[];
    addProduct:()=>void;
}

export default function ProductList({products,addProduct}:Props){
    return( 
        <Grid container spacing={4}>
        {
          products.map(product=>(
            <Grid item xs={4}   key={product.id}>
                 <ProductCard product={product}></ProductCard>
            </Grid>
        ))
        }
      </Grid>  
    )
}