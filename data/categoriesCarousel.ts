import { StaticImageData } from "next/image";
import marvel from "../assets/images/marvel.jpg";
import pokemon from "../assets/images/pokemon.jpg";
import dcComics from "../assets/images/dc.png";
import starWars from "../assets/images/starwars.png";
import dragonBall from "../assets/images/dragonball.jpg";
import disney from "../assets/images/disney.jpg";
import harryPotter from "../assets/images/harry-potter.png";
import strangerThings from "../assets/images/stranger-things.jpg";
import pixar from "../assets/images/pixar.jpg";

interface ICategoriesCarousel {
  id: string;
  name: string;
  image?: StaticImageData;
}

const categoriesCarousel: ICategoriesCarousel[] = [
  {
    id: "cl6kx9riz0148cswxv8n0x7g5",
    name: "Marvel",
    image: marvel,
  },
  {
    id: "cl6kxaold0176cswx0mxroayq",
    name: "Dragon Ball",
    image: dragonBall,
  },
  {
    id: "cl6kxa1nu0155cswx0ygfmgtf",
    name: "Dc-comics",
    image: dcComics,
  },
  {
    id: "cl6kxa8a10162cswx934rj8z8",
    name: "Star-wars",
    image: starWars,
  },
  {
    id: "cl6kxae540169cswxyoia2t0s",
    name: "Pokemon",
    image: pokemon,
  },

  {
    id: "cl6kxcfqo0183cswx7fvw0o8i",
    name: "Harry potter",
    image: harryPotter,
  },
  {
    id: "cl6kxfah80190cswxxohryvox",
    name: "Disney",
    image: disney,
  },
  {
    id: "cl6kxixhi0212cswx7v47890s",
    name: "Stranger-things",
    image: strangerThings,
  },
  {
    id: "cl6kxl07x0219cswxdzxbkwwq",
    name: "Pixar",
    image: pixar,
  },
];

export default categoriesCarousel;
