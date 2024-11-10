import React from "react";
import { FaFacebook } from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="footer-parent">
            <ul className="footer-child">
                <li>
                    A perfume is a liquid mixture used to emit a pleasant odour. It is formed from fragrant essential oils derived from plants and spices or synthetic aromatic compounds. Cosmetic fragrances applied to a persons body to emit a pleasant smell include perfume.
                </li>
                <li className="facebook">
                    Facebook: <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">Visit our Facebook page</Link>
                    <FaFacebook size={"20px"}/>
                </li>
            </ul>
        </div>
    );
}