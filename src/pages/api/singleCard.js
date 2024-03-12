// pages/products/[id].js
import { useEffect, useState } from 'react';

const SingleCard = ({ product }) => {
  // State to hold the product data
  const [productData, setProductData] = useState(product);

  // Function to fetch product data based on ID
  const fetchProductData = async () => {
    try {
      const response = await fetch(`/api/singleCard/${productData.id}`);
      const data = await response.json();
      setProductData(data);
    } catch (error) {
      console.error('Error fetching product data:', error);
    }
  };

  useEffect(() => {
    // Fetch initial product data when the component mounts
    fetchProductData();
  }, []);

  return (
    <div>
      <h1>{productData.name}</h1>
      <p>Description: {productData.description}</p>
      <p>Price: ${productData.price}</p>
      {/* Add more details as needed */}
    </div>
  );
};

// This function runs at build time
export async function getStaticPaths() {
  // Fetch the list of product IDs from your data source
  // Replace this with your actual data fetching logic
  const productIds = fetchProductIds();

  // Generate paths based on the product IDs
  const paths = productIds.map((id) => ({
    params: { id: id.toString() },
  }));

  return { paths, fallback: false };
}

// This function runs at build time
export async function getStaticProps({ params }) {
  // Fetch the product data based on the ID from your data source
  // Replace this with your actual data fetching logic
  const product = fetchProductDataById(params.id);

  return {
    props: { product },
  };
}

export default SingleCard;
