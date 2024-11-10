import Image from "next/image";
export default function About() {
  return (
    <div>
      <div className="container">
        <div className="intro">
          <h1>This is my About Us Page</h1>
          <p>
            Our promise to you At Perfume Direct were committed to providing
            an exceptional shopping experience with an easy to use website fast
            shipping and outstanding customer service. Our Mission To supply the
            biggest fragrance and cosmetics brands at affordable prices to all.
            Orders Shipped 800k and counting...
          </p>
        </div>

        <section className="contact">
          <div className="aipic">
            <h1>Product 1</h1>
            <p>Step 1 Take A Warm Bath Dry Your Skin. ...</p>
            <Image
              src="/images 7.png"
              alt="Description of image"
              height={300}
              width={300}
            />
          </div>
          <div className="aipic">
            <h1>Product 2</h1>
            <p>Step 2 Moisturise. ...</p>
            <Image
              src="/images 8.png" 
              alt="Description of second image"
              height={300}
              width={300}
            />

            <div>
              <div className="aipic">
                <h1>product 3</h1>
                <p>Step 3 Apply Perfume Focusing On Pulse Points. ..</p>
                <Image
                  src="/image 13.png" 
                  alt="Description of first image"
                  height={300}
                  width={300}
                />
              </div>
              <div className="aipic">
                <h1>product 4</h1>
                <p>Step 4 Avoid Rubbing the Perfume on Your Body</p>
                <Image
                  src="/image 14.png" 
                  alt="Description of second image"
                  height={300}
                  width={300}
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
