import "./catalog.css";
import Product from "./product";
import React, { useEffect, useState} from 'react';
import DataService from "../services/dataServices";



const Catalog = () => {

    let[products, setProducts] = useState([]);

    const loadCatalog = () => {
        let service = new DataService();
        let data = service.getCatalog();
        setProducts(data);
        console.log("Retrieved", data);
    };
    useEffect(() => {

        loadCatalog();
    }, []); //[] = dependencies, when a dependency change, run fn again
    return (
        <div className="catalog">
            <h1>This is my awesome catalog</h1>
            <h3>We have {products.length} amazing products for you</h3>

            {products.map((prod) => (
               <Product key={prod._id} info={prod}></Product> 
            ))}           
        </div>
    );
};


export default Catalog;
    