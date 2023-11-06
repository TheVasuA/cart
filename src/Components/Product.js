import { useState, useEffect } from "react";
import axios from "axios";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products")
      .then((res) => setProducts(res.data));
  }, []);
  console.log(products);
  const newJSON = JSON.stringify(products);
  return (
    <div className="card_all ">
      {products.slice(0, 19).map((product) => {
        const { id, title, image, price, description } = product;
        return (
          <li key={id} className="card_single ">
            <img className="img__card" src={image} alt={description} />
            <div className="card__content">
              <h4 className="card__title">{title}</h4>
              <p className="mb-2 leading-normal">
                {description.slice(0, 100)} ...
              </p>
            </div>
            <div className="">
            <button className="card__button">Buy   &#8377;{price}</button>
            </div>
            
          </li>
        );
      })}
    </div>
  );
};
export default Product;
