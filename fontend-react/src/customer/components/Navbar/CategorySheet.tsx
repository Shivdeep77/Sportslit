import React from 'react'
import { sportswearsLevelTwo } from "../../../data/category/level two/sportswearsLevelTwo";
import { shoesLevelTwo } from "../../../data/category/level two/shoesLevelTwo";
import { sportswearsLevelThree } from "../../../data/category/level three/sportswearsLevelThree";
import { shoesLevelThree } from "../../../data/category/level three/shoesLevelThree";
import { useNavigate } from 'react-router-dom'
import { Box } from '@mui/material'
import { sportsLevelThree } from "../../../data/category/level three/sportsLevelThree";
import { sportsLevelTwo } from "../../../data/category/level two/sportsLevelTwo";
import { accessoriesLevelTwo } from "../../../data/category/level two/accessoriesLevleTwo"
import { accessoriesLevelThree } from "../../../data/category/level three/accessoriesLevelThree";

const categoryTwo:{[key:string]:any[]}={
    sportswears: sportswearsLevelTwo, shoes: shoesLevelTwo,
    sports:sportsLevelTwo, accessories: accessoriesLevelTwo,
    }
    const categoryThree:{[key:string]:any[]}={
    sportswears: sportswearsLevelThree, shoes: shoesLevelThree,
    sports:sportsLevelThree, accessories:accessoriesLevelThree

    }
const CategorySheet = ({ selectedCategory,toggleDrawer,setShowSheet }: any) => {

const navigate=useNavigate()


    const childCategory = (category: any, parentCategoryId: any) => {
        return category.filter((child: any) => {
            // console.log("Category", parentCategoryId, child)
            return child.parentCategoryId == parentCategoryId
        })

    }
    const handleCategoryClick = (category:string) => {
        if(toggleDrawer){
            toggleDrawer(false)()
        }
        if(setShowSheet){
            setShowSheet(false)
        }
        
        navigate("/products/"+category)
    }
    return (
        <Box className='bg-white shadow-lg  lg:h-[500px] overflow-y-auto'>
            <div className=' flex text-sm flex-wrap'>
                {categoryTwo[selectedCategory]?.map((item: any,index) => 
                <div  key={item.name} className={`p-8 lg:w-[20%] ${index%2==0?"bg-slate-50":"bg-white"}`}>

                    <p className='text-[#00927c] mb-5 font-semibold'>{item.name}</p>

                    <ul className='space-y-3'>
                        {childCategory(categoryThree[selectedCategory], item.categoryId)?.map((item: any) => <div key={item.name}>

                            <li 
                            onClick={()=>handleCategoryClick(item.categoryId)}
                            className='hover:text-[#00927c] cursor-pointer'>
                                {item.name}
                            </li>

                        </div>)}
                    </ul>


                </div>)}
            </div>
        </Box>
    )
}

export default CategorySheet