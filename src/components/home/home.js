import React from 'react'
import {get_products} from '../products/productService'

export default function Home() {
    const [error, setError] = React.useState(null);
    const [isLoaded, setIsLoaded] = React.useState(false);
    const [products, setProducts] = React.useState([]);
    React.useEffect(() => {
        get_products().then(
            (result) => {
                setIsLoaded(true);
                setProducts(result);
            },
            (error) => {
                setIsLoaded(true);
                setError(error);
            }
        );     
      }, []);
    if (error) {
        return (<div>Error: {error.message}</div>)
    } else if (!isLoaded) {
        return (<div>Loading...</div>)
    } else {
        return products ? <div>
                {
                    products.map((element, index) => {
                       return <h2>{element.name}</h2>
                    }) 
                } 
            </div>
            : <h2>No products</h2>
    }
}

 