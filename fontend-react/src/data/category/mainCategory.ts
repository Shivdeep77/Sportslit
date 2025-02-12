export const mainCategory = [
  {
    name: "Sportswears",
    categoryId: "sportswears",
    level: 1,
    levelTwoCategory:[
        {
            "name": "Men",
            "categoryId": "men_wear",
            "parentCategoryId":"sportswears",
            "level":2
        },
        {
            "name": "Women",
            "categoryId": "women_wear",
            "parentCategoryId":"sportswears",
            "level":2
        },
        {
            "name": "Junior",
            "categoryId": "junior",
            "parentCategoryId":"sportswears",
            "level":2
        }
    ]
  },
  {
    name: "Shoes",
    categoryId: "shoes",
    level: 1,
    levelTowCategory:[
        {
          "parentCategoryId":"shoes",
          "level":2,
          "name":"Men",
          "categoryId": "men_shoes"
        },
        {
          "parentCategoryId":"shoes",
          "level":2,
          "name":"Women",
          "categoryId": "women_shoes"
        },
        {
          "parentCategoryId":"shoes",
          "level":2,
          "name":"Junior",
          "categoryId": "junior_shoes"
        },
        {
          "parentCategoryId":"shoes",
          "level":2,
          "name":"Others",
          "categoryId": "other_shoes"
        }
      ]
      
  },
  {
    name: "Accessories",
    categoryId: "accessories",
    level: 1,
  },
  
  { name: "Sports", categoryId: "sports",level:1 },
];
