import Link from "next/link";
import Image from "next/image";

export default function Header() {
  return (
    <div className="header">
      <div className="logo">
        <Image 
          src="/logo.png" 
          alt="Logo" 
          width={200} 
          height={200}
        />
      </div>
      
      <ul className="header-buttons">
        <Link href="/"><li>Home</li></Link>
        <Link href="/about-us"><li>About Us</li></Link>
        <Link href="/contact-us"><li>Contact Us</li></Link>
        <Link href="/blog"><li>Blog</li></Link>
        <Link href="/product"><li>Product</li></Link>

        <Link href="/start" passHref>
          <li className="start-button">Start</li>
        </Link>
      </ul>
    </div>
  );
}
