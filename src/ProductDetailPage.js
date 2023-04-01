import React, { useContext, useState, useEffect, useRef } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CartContext } from './CartContext';
import './ProductDetailPage.css';

const productImages = [
  'https://via.placeholder.com/150x150.png?text=Image+1',
  'https://via.placeholder.com/150x150.png?text=Image+2',
  'https://via.placeholder.com/150x150.png?text=Image+3',
  'https://via.placeholder.com/150x150.png?text=Image+4',
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const { add } = useContext(CartContext);
  const [images, setImages] = useState([]);
  const scrollRef = useRef(null);

  const handleAddToCart = () => {
    const product = { id, name: `Product ${id}` };
    add(product);
  };

  useEffect(() => {
    // Create an infinite loop for the scrolling images
    const clonedImages = [...productImages, ...productImages];
    setImages(clonedImages);
  }, []);

  useEffect(() => {
    // Scroll the images automatically
    const scrollWidth = scrollRef.current.scrollWidth;
    let scrollPosition = 0;
    const intervalId = setInterval(() => {
      if (scrollPosition >= scrollWidth / 2) {
        scrollPosition = 0;
      } else {
        scrollPosition += 1;
      }
      scrollRef.current.scrollTo(scrollPosition, 0);
    }, 20);
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="product-detail-page">
      <h1>Product Detail Page</h1>
      <img src={images[id % 4]} alt={`Product ${id} image`} />
      <p>Product {id}</p>
      <div
        className="scrolling-images-container"
        ref={scrollRef}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Product ${id} image ${index}`}
            className="scrolling-image"
          />
        ))}
      </div>
      <button onClick={handleAddToCart}>Add to Cart</button>
      <Link to="/">Back to Landing Page</Link>
    </div>
  );
};

export default ProductDetailPage;
