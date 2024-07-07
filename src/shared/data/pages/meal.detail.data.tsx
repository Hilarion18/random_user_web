'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';
// import { useRouter } from 'next/router'
import { useParams } from 'next/navigation'

import Search from '~/components/widgets/Search';

let meals = [
  {
    idMeal: "",
    strMeal: "",
    strDrinkAlternate: null,
    strCategory: "",
    strArea: "",
    strInstructions: "",
    strMealThumb: "",
    strTags: "",
    strYoutube: "",
    strIngredient1: "",
    strIngredient2: "",
    strIngredient3: "",
    strIngredient4: "",
    strIngredient5: "",
    strIngredient6: "",
    strIngredient7: "",
    strIngredient8: "",
    strIngredient9: "",
    strIngredient10: "",
    strIngredient11: "",
    strIngredient12: "",
    strIngredient13: "",
    strIngredient14: "",
    strIngredient15: "",
    strIngredient16: "",
    strIngredient17: "",
    strIngredient18: "",
    strIngredient19: "",
    strIngredient20: "",
    strMeasure1: "",
    strMeasure2: "",
    strMeasure3: "",
    strMeasure4: "",
    strMeasure5: "",
    strMeasure6: "",
    strMeasure7: "",
    strMeasure8: "",
    strMeasure9: "",
    strMeasure10: "",
    strMeasure11: "",
    strMeasure12: "",
    strMeasure13: "",
    strMeasure14: "",
    strMeasure15: "",
    strMeasure16: "",
    strMeasure17: "",
    strMeasure18: "",
    strMeasure19: "",
    strMeasure20: "",
    strSource: "",
    strImageSource: null,
    strCreativeCommonsConfirmed: null,
    dateModified: null
  },
];

const urlMeals = "https://themealdb.com/api/json/v1/1";

// export const mealList: MealProps = () => {
export const MealDetail = () => {  
  const [keyword, setKeyword] = useState("");
  const [newMeals, setMeals] = useState(meals)
  const params = useParams()

  const getMeal = async () => {
    axios.get((urlMeals + "/lookup.php?i=" + params.id),
      // { headers: headerData }
    )
      .then((dataMeal) => {
        console.log("dataMeal: ", dataMeal);
        setMeals(dataMeal.data.meals);
        // console.log("newMeals: ", newMeals);
      })
      .catch((err) => {
        console.log("err catch: ", err);
      })
    // const response = await fetch(urlMeals);
    // console.log("response: ", response);
    // if (!response.ok) {
    //   throw new Error('Failed to fetch data');
    // }
  };

  useEffect(() => {
    getMeal();
  }, [])

  
  return (
    <>
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <div></div>
      <Grid numItemsSm={1} numItemsLg={1} className="gap-6">
        {
            newMeals !== null && newMeals !== undefined && newMeals.length > 0
              ? 
              newMeals.map((item, i) => {
            return (
              <Card key={item.idMeal} className='border-solid border-2 border-sky-500 rounded-md'>
                <Title className='font-bold text-lg'>{item.strMeal}</Title>
                <Flex className='mt-6'>
                  <div className="col items-center justify-center">
                    <Image
                      className="rounded-full"
                      src={item.strMealThumb}
                      height={200}
                      width={200}
                      alt={""}
                    />
                  </div>
                </Flex>
                  <Flex className="mt-6">
                    <div className='col'>
                      <Text className="text-left">Country: {item.strArea}</Text>
                      <Text className="text-left mt-6 w-200px">{item.strInstructions}</Text>
                      <Text className="text-left mt-6">Category: {item.strCategory}</Text>
                      <Text className="text-left mt-2">Tags: {item.strTags}</Text>
                      <Text className="text-left mt-2">Link Youtube:
                      <a className='italic text-cyan-600' href={item.strYoutube}>{item.strYoutube.length > 0 ? " here" : ""}</a>
                      </Text>
                      <Text className="text-left mt-2 mb-1">Ingredients:</Text>
                      <Text className="text-left">{item.strIngredient1 ? "- " + item.strIngredient1 : ""}</Text>
                      <Text className="text-left">{item.strIngredient2 ? "- " + item.strIngredient2 : ""}</Text>
                      <Text className="text-left">{item.strIngredient3 ? "- " + item.strIngredient3 : ""}</Text>
                      <Text className="text-left">{item.strIngredient4 ? "- " + item.strIngredient4 : ""}</Text>
                      <Text className="text-left">{item.strIngredient5 ? "- " + item.strIngredient5 : ""}</Text>
                      <Text className="text-left">{item.strIngredient6 ? "- " + item.strIngredient6 : ""}</Text>
                      <Text className="text-left">{item.strIngredient7 ? "- " + item.strIngredient7 : ""}</Text>
                      <Text className="text-left">{item.strIngredient8 ? "- " + item.strIngredient8 : ""}</Text>
                      <Text className="text-left">{item.strIngredient9 ? "- " + item.strIngredient9 : ""}</Text>
                      <Text className="text-left">{item.strIngredient10 ? "- " + item.strIngredient10 : ""}</Text>
                      <Text className="text-left">{item.strIngredient11 ? "- " + item.strIngredient11 : ""}</Text>
                      <Text className="text-left">{item.strIngredient12 ? "- " + item.strIngredient12 : ""}</Text>
                      <Text className="text-left">{item.strIngredient13 ? "- " + item.strIngredient13 : ""}</Text>
                      <Text className="text-left">{item.strIngredient14 ? "- " + item.strIngredient14 : ""}</Text>
                      <Text className="text-left">{item.strIngredient15 ? "- " + item.strIngredient15 : ""}</Text>
                      <Text className="text-left">{item.strIngredient16 ? "- " + item.strIngredient16 : ""}</Text>
                      <Text className="text-left">{item.strIngredient17 ? "- " + item.strIngredient17 : ""}</Text>
                      <Text className="text-left">{item.strIngredient18 ? "- " + item.strIngredient18 : ""}</Text>
                      <Text className="text-left">{item.strIngredient19 ? "- " + item.strIngredient19 : ""}</Text>
                      <Text className="text-left">{item.strIngredient20 ? "- " + item.strIngredient20 : ""}</Text>
                      
                      <Text className="text-left mt-2 mb-1">Measurements:</Text>
                      <Text className="text-left">{item.strMeasure1 !== " " ? "- " + item.strMeasure1 : ""}</Text>
                      <Text className="text-left">{item.strMeasure2 !== " " ? "- " + item.strMeasure2 : ""}</Text>
                      <Text className="text-left">{item.strMeasure3 !== " " ? "- " + item.strMeasure3 : ""}</Text>
                      <Text className="text-left">{item.strMeasure4 !== " " ? "- " + item.strMeasure4 : ""}</Text>
                      <Text className="text-left">{item.strMeasure5 !== " " ? "- " + item.strMeasure5 : ""}</Text>
                      <Text className="text-left">{item.strMeasure6 !== " " ? "- " + item.strMeasure6 : ""}</Text>
                      <Text className="text-left">{item.strMeasure7 !== " " ? "- " + item.strMeasure7 : ""}</Text>
                      <Text className="text-left">{item.strMeasure8 !== " " ? "- " + item.strMeasure8 : ""}</Text>
                      <Text className="text-left">{item.strMeasure9 !== " " ? "- " + item.strMeasure9 : ""}</Text>
                      <Text className="text-left">{item.strMeasure10 !== " " ? "- " + item.strMeasure10 : ""}</Text>
                      <Text className="text-left">{item.strMeasure11 !== " " ? "- " + item.strMeasure11 : ""}</Text>
                      <Text className="text-left">{item.strMeasure12 !== " " ? "- " + item.strMeasure12 : ""}</Text>
                      <Text className="text-left">{item.strMeasure13 !== " " ? "- " + item.strMeasure13 : ""}</Text>
                      <Text className="text-left">{item.strMeasure14 !== " " ? "- " + item.strMeasure14 : ""}</Text>
                      <Text className="text-left">{item.strMeasure15 !== " " ? "- " + item.strMeasure15 : ""}</Text>
                      <Text className="text-left">{item.strMeasure16 !== " " ? "- " + item.strMeasure16 : ""}</Text>
                      <Text className="text-left">{item.strMeasure17 !== " " ? "- " + item.strMeasure17 : ""}</Text>
                      <Text className="text-left">{item.strMeasure18 !== " " ? "- " + item.strMeasure18 : ""}</Text>
                      <Text className="text-left">{item.strMeasure19 !== " " ? "- " + item.strMeasure19 : ""}</Text>
                      <Text className="text-left">{item.strMeasure20 !== " " ? "- " + item.strMeasure20 : ""}</Text>
                      {/* <Text className="text-left mt-2">Source: <a ref={item.strSource}>{item.strSource}</a></Text> */}
                    </div>
                  </Flex>
              </Card>
              
            )
              })
              : 
              <div></div>
        }
        </Grid>
    </main>
    </>
  );
};

