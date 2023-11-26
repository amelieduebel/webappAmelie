//import React from "react";
import { Link } from "react-router-dom";

export function Navbar() {
  return (
    <nav className="Nav">
      <a href="/" className="Hometitle">
        Home
      </a>
      <a href="calc">Calc</a>
      <a href="hello">Hello world</a>
      <a href="vite+react">Vite+React</a>
    </nav>
  );
}

/** </nav>
export function Navbar() {
  return (
    <nav className="Nav">
      <a href="/" className="Hometitle">
        Home
      </a>
      <ul>
        <li className="active">
          <a href="/products">Products</a>
        </li>
        <li>
          <a href="/about-us">About Us</a>
        </li>
      </ul>
    </nav>
  );
}
*/
