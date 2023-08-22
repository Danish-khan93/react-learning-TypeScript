import { Box } from "@mui/material";
import axios from "axios";
import ProductCard from "./ProductCard";
import { useEffect, useState } from "react";

type RESTYPE = {
  id: 1;
  title: string;

  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const ProductList = () => {
  const [product, setProduct] = useState<RESTYPE[]>([]);
  const fetchData = async () => {
    const response = await axios.get("https://fakestoreapi.com/products");
    console.log(response.data);
    setProduct(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const listOfProduct = product.map((value: RESTYPE, index: number) => {
    return (
      <ProductCard
        key={`product-${index}`}
        imageLink={value.image}
        productName={value.title}
        price={value.price}
      />
    );
  });

  return <Box className="flex justify-evenly flex-wrap gap-5 my-5">{listOfProduct}</Box>;
};

export default ProductList;
