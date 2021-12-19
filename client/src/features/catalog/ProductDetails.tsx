import { Typography } from "@mui/material"
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router"
import { Product } from "../../app/models/product";

export default function ProductDetails(){

    const {id} = useParams<{id:string}>();
    const [product,setProduct]=useState<Product | null>(null);

    const [loading,setLaoding] = useState(true);

    useEffect(()=>{
     axios.get(`http://localhost:5091/api/GetProducts/${id}`)
              .then(response=>setProduct(response.data))
              .catch(error=>console.log(error))
              .finally(()=>setLaoding(false));   
    },[id])

    if(loading) return <h3>Loading</h3>

    if(!loading) return <h3>Product not found</h3>

    return(
        <Typography variant='h2'>
        {
            product?.name
        }   
         </Typography>
    )
}