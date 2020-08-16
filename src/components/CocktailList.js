import React from "react";
import Cocktail from "./Cocktail";

export default function CocktailList(cocktails) {
  if (loading) {
    return <h2 className="section-title">loading....</h2>;
  }
  if (cocktails.lenth < 1) {
    return h2.section - title;
  }
  console.log(cocktails);
  return <h1>cocktailList component</h1>;
}
