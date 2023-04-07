import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import Container from '@mui/material/Container';
import {get_products} from '../products/productService'

export default function ProductList() {
  

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
      return (
        <Container maxWidth="sm">
        <ImageList sx={{ width: 500, height: 450 }} cols={2} rowHeight={300}>
          {products.map((item, index) => (
            <ImageListItem key={index}>
              <img
                src={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format`}
                srcSet={`https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?w=248&fit=crop&auto=format&dpr=2 2x`}
                alt={item.name}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.name}
                subtitle={<span>by: {item.name}</span>}
                position="below"
              />
            </ImageListItem>
          ))}
        </ImageList>
        </Container>
      );

    }
}