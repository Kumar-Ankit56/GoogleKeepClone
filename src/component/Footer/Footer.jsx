import React, { Component } from "react";
const Year = new Date().getFullYear();
import './Footer.css';

export default function Footer() {
  return (
    <>
    <footer>
      <p>CopyWrite @ {Year} Build with Love By Ankit kumar</p>
    </footer>
    </>
  );
}
