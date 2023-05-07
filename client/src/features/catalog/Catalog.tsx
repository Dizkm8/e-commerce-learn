import { Product } from "../../app/models/product";
import { Button } from "@mui/material";
import ProductList from "./ProductList";
import { useEffect, useState } from "react";

export default function Catalog() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        fetch('http://localhost:5000/api/products')
            .then(response => response.json())
            .then(data => setProducts(data))
    }, []);

    function addProduct() {
        setProducts(prevState => [...prevState,
        {
            id: prevState.length + 101,
            name: 'whono ' + (prevState.length + 1),
            price: (prevState.length + 1) * 2 + 150,
            brand: 'some brand',
            description: 'description',
            pictureUrl: 'http://picsum.photos/200',
        }])
    }
    return (
        <>
            <ProductList products={products} ></ProductList>
        </>
    )
}