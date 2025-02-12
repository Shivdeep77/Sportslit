import React from 'react'
import HomeCategoryCard from './HomeCategoryCard'
import { useAppSelector } from '../../../../Redux Toolkit/Store';

const homeCategory = [
  {
    "name": "Tracksuit",
    "categoryId": "tracksuit",
    "parentCategoryName": "Accessories",
    "parentCategoryId": "Accessories",
    "level": 2,
    "section": "SHOP_BY_CATEGORIES",
    image: "https://img.freepik.com/free-photo/dressed-man-suit-posing-studio_144627-1930.jpg?t=st=1739202698~exp=1739206298~hmac=d6a1fd83def4f74461eca5322e87123e47294fea525fa52d40bf7e93734b393d&w=900"
  },
  {
    "name": "Cricket",
    "categoryId": "kitchen_table",
    "parentCategoryName": "Furniture",
    "parentCategoryId": "furniture",
    "level": 2,
    "section": "SHOP_BY_CATEGORIES",
    image: "https://img.freepik.com/free-photo/sport-cricket-player-background_1409-6233.jpg?t=st=1739202793~exp=1739206393~hmac=61f5e003e2ef8a8428f9b4155c5dc946314a750cb2eea273ab73855c078e35fc&w=1380"
  },
  {
    "parentCategoryId": "women",
    "level": 2,
    "name": "Sports accesories",
    "categoryId": "women_sports_active_wear",
    "section": "SHOP_BY_CATEGORIES",
    image: "https://img.freepik.com/free-photo/top-view-ping-pong-paddles-with-boxing-gloves-sport-essentials_23-2148523213.jpg?t=st=1739202946~exp=1739206546~hmac=c0206b21ed5af6ed114902774f0b90e390d5a9c7ba77b7b42b53e40624a85a44&w=2000"
  },
  {
    "parentCategoryId": "women",
    "level": 2,
    "name": "Shoes",
    "categoryId": "women_lingerie_sleepwear",
    "section": "SHOP_BY_CATEGORIES",
    image: "https://img.freepik.com/premium-photo/sports-bottle-sneakers-grey-background_392895-385309.jpg?w=1800"
  },
  {
    "parentCategoryId": "women",
    "level": 2,
    "name": "Badminton",
    "categoryId": "women_indian_and_fusion_wear",
    "section": "SHOP_BY_CATEGORIES",
    image: "https://img.freepik.com/premium-photo/white-badminton-shuttlecock-green-badminton-racket-process-sports-game-teams_594847-891.jpg?w=1060"
  }
];

const HomeCategory = () => {
  const { homePage } = useAppSelector((store) => store);

  return (
    <div className='flex justify-center gap-7 flex-wrap'>
      {/* Map over the static 'homeCategory' data */}
      {homeCategory.map((item) => (
        <HomeCategoryCard key={item.categoryId} item={item} />
      ))}
    </div>
  );
}

export default HomeCategory;
