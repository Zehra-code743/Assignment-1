import React from "react";
import Image from "next/image";

const Product = () => {
  return (
    <div className="perfume">
      <h1 className="perfume">Eau de Parfum</h1>
      <Image src="/perfume12.png" alt="Perfume" width="0" height={0} />

      <p className="perfume">
        Experience the essence of elegance with our exclusive Eau de Parfum.
        Perfect for any occasion.
      </p>
      <span className="perfume"></span>

      <button className="perfume">Add to Cart</button>

      
      <h2 className="perfume">Another Variant</h2>
      <Image
        className="perfume"
        src="/perfume13.png"
        alt="Another Perfume Variant"
        width={500} 
        height={500} 
      />
      <p className="perfume">
        Discover a new scent with our additional perfume variant. Ideal for
        those who want something different.
      </p>
      <div className="perfume">
        <span className="perfume">$89.99</span>
      </div>
      <button className="perfume">Add to Cart</button>

      
      <h2 className="perfume">Limited Edition</h2>
      <Image
        className="perfume"
        src="/perfume14.png" 
        alt="Limited Edition Perfume"
        width={500} 
        height={500} 
      />
      <p className="perfume">
        Celebrate a special occasion with our limited edition perfume.
      </p>
      <div className="perfume">
        <span className="perfume">$99.99</span>
      </div>
      <button className="perfume">Add to Cart</button>
    </div>
  );
};

export default Product;
