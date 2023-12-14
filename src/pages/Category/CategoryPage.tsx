import React, { useEffect, useState } from "react";

const CategoryPage = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/category/jewelery")
      .then((res) => res.json())
      .then((json) => setCategory(json));
  }, []);
  console.log(category);
  return <></>;
};

export default CategoryPage;
