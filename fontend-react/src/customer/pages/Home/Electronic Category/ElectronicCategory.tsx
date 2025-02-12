import React from "react";
import ElectronicCategoryCard from "./ElectronicCategoryCard";
import { useMediaQuery } from "@mui/material";

const electronics = [
  {
    section: "SPORTS_CATEGORIES",
    name: "Cricket",
    image:
      "https://img.freepik.com/premium-photo/cricket-player-action-ready-hit-ball_1282444-208418.jpg?w=900",
    categoryId: "cricket"
  },
  {
    section: "SPORTS_CATEGORIES",
    name: "Football",
    image:
      "https://img.freepik.com/premium-photo/3d-rendering-soccer-ball-with-motion-line_493806-5245.jpg?w=1380",
    categoryId: "football"
  },
  {
    section: "SPORTS_CATEGORIES",
    name: "Basketball",
    image:
      "https://img.freepik.com/premium-photo/basketball-ball-hitting-basket-white-background_488220-121.jpg?w=1480",
    categoryId: "basketball"
  },
  {
    section: "SPORTS_CATEGORIES",
    name: "Badminton",
    image:  
      "https://img.freepik.com/premium-photo/badminton-racket-shuttlecock-isolated-white_392895-500748.jpg?w=1800",
    categoryId: "badminton"
  },
  {
    section: "SPORTS_CATEGORIES",
    name: "Tennis",
    image:
      "https://img.freepik.com/premium-photo/sports-equipment-isolated-scene_971991-10135.jpg?w=2000",
    categoryId: "tennis"
  }
];

const ElectronicCategory = () => {
  const isSmallScreen = useMediaQuery("(max-width:600px)");

  return (
    <div className="flex flex-wrap justify-between py-5 lg:px-20 border-b">
      {electronics
        .slice(0, isSmallScreen ? 5 : electronics.length)
        .map((item) => (
          <ElectronicCategoryCard key={item.categoryId} item={item} />
        ))}
    </div>
  );
};

export default ElectronicCategory;
