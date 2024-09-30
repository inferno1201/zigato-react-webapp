import React, { useLayoutEffect } from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/components/Header";
import Body from "./src/components/Body";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Body />
    </>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<AppLayout />);

// header
//    logo
//    navbar
// body
//    searchbar / button
//    item-cards
// footer
//    copyright/ links/ etc
