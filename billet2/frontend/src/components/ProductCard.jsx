import React from "react";

const ProductCard = ({ product }) => {
  return (
    <div className="col-md-4">
      <div className="card mb-4">
        <img
          src={product?.Image}
          className="card-img-top"
          alt={product?.title || "Product"}
        />
        <div className="card-body">
          <h5 className="card-title">{product?.title || "No Title"}</h5>
          <p className="card-text">{product?.category || "No Category"}</p>
          <p className="card-text">
            <strong>${product?.price || "N/A"}</strong>
          </p>
          <button className="btn btn-primary">Detaylar</button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
