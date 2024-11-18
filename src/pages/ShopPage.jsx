import React from "react";
import ProductCard from "../components/ProductCard"; 
import ReferralTips from "../components/ReferralTips"; 


function ShopPage() {
  return (
    <div className="shop-page">
      <div className="shop-content">
        <div className="product-section">
          <ProductCard />
        </div>
        <div className="tips-section">
          <ReferralTips />
        </div>
      </div>
    </div>
  );
}

export default ShopPage;
