import React from "react";
import Victus from '../images/victus.png';
import Headset from '../images/Headset.png';
import UHD_Monitor from '../images/UHD Monitor.png';
import NC_headset from '../images/NC_Headset.png';
import VR_Glasses from "../images/VR_Glasses.png";
import Wireless_Mouse from "../images/Wireless_Mouse.png";
import BT_Cam from "../images/BT_Cam.png";
import Laptop_Stand from "../images/Laptop_Stand.png";

const featuredProducts = [
  { id: 1, name: "Hp Victus 16", price: "GHC 13,500.00", image: Victus },
  { id: 2, name: "Oraimo Headset", price: "GHC 500.00", image: Headset },
  { id: 3, name: "UltraHD 4K Monitor", price: "GHC 7000.00", image: UHD_Monitor },
  { id: 4, name: "Wireless Noise-Canceling Headphones", price: "GHC 400.00", image: NC_headset },
  { id: 5, name: "PC Stand", price: "GHC 300.00", image: Laptop_Stand },
  { id: 6, name: "Bluetooth Camera", price: "GHC 300.00", image: BT_Cam },
  { id: 7, name: "VR Glasses", price: "GHC 5700.00", image: VR_Glasses },
  { id: 8, name: "Wireless Mouse", price: "GHC 100.00", image: Wireless_Mouse },
];

function ProductCard() {
  return (
    <div className="product-card-scroll">
      {featuredProducts.map((product) => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} className="product-image" />
          <h2 className="product-name">{product.name}</h2>
          <div className="product-price">{product.price}</div>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
