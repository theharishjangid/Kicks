import SneakerShoes from "../Assets/Categories/sneaker.png";
import BasketballShoes from "../Assets/Categories/basketball.png";
import RunnerShoes from "../Assets/Categories/runner.png";
import OutdoorShoes from "../Assets/Categories/outdoor.png";
import GolfShoes from "../Assets/Categories/golf.png";
import HikingShoes from "../Assets/Categories/hiking.png";

const CategoriesList = [
  "sneaker",
  "basketball",
  "running",
  "outdoor",
  "golf",
  "hiking",
];

const CategoriesData = [
  {
    name: "sneaker",
    image: SneakerShoes,
  },
  {
    name: "basketball",
    image: BasketballShoes,
  },
  {
    name: "running",
    image: RunnerShoes,
  },
  {
    name: "outdoor",
    image: OutdoorShoes,
  },
  {
    name: "golf",
    image: GolfShoes,
  },
  {
    name: "hiking",
    image: HikingShoes,
  },
];

export { CategoriesData, CategoriesList };
