'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useRef } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';

import Search from '~/components/widgets/Search';
import Link from 'next/link';

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
export const MealList = () => {  
  const [keyword, setKeyword] = useState("");
  const [newMeals, setMeals] = useState(meals)
  const getMeals = async (mealName: String) => {
    const headerData = {
      "Access-Control-Allow-Headers" : "Content-Type",
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "OPTIONS,POST,GET"
    }
    axios.get((urlMeals + "/search.php?s=" + mealName),
      // { headers: headerData }
    )
      .then((dataMeals) => {
        console.log("dataMeals: ", dataMeals);
        let meals = dataMeals.data.meals
        console.log("meals: ", meals);
        let tempData = []
        // for (let i = 0; i < 2; ++i) {
        //   tempData.push(meals[i])
        // }
        // console.log("tempData: ", tempData);
        // setMeals(tempData);
        setMeals(meals);
        
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

  const updateKeyword = (data: String) => {
    getMeals(data);
  }


  useEffect(() => {
    setMeals([])
    getMeals("");
  }, [])
  const ref = useRef();
  
  return (
    <>
    <main className="p-4 md:p-10 mx-auto max-w-7xl">
      <Search keyword={ keyword} updateKeyword={updateKeyword} />
      <Grid numItemsSm={4} numItemsLg={4} className="gap-6">
        {
            newMeals !== null && newMeals !== undefined && newMeals.length > 1
              ? 
              newMeals.map((item, i) => {
                return (
                  <Card key={item.idMeal} className='border-solid border-2 border-sky-500 rounded-md'>
                    <Link
                      href={"/meal/"+ item.idMeal}
                      // onClick={() => {}}
                    >
                      <Title className='font-bold text-lg'>{item.strMeal}</Title>
                    </Link>
                    <Flex className='mt-6'>
                      <Link
                        // href={"/meal/"+ item.idMeal}
                        href={"/meal/"+ item.idMeal}
                      >
                        <div
                          // ref={"/meal/" + item.idMeal}
                          className="col items-center justify-center">
                          <Image
                            className="rounded-full"
                            src={item.strMealThumb}
                            height={200}
                            width={200}
                            alt={""}
                          />
                        </div>
                      </Link>
                    </Flex>
                      <Flex className="mt-6">
                        <div className='col'>
                          <Text className="text-left">Country: {item.strArea}</Text>
                          {/* <Text className="text-left mt-6 w-200px">{item.strInstructions}</Text> */}
                          <Text className="text-left mt-6">Category: {item.strCategory}</Text>
                          <Text className="text-left mt-2">Tags: {item.strTags}</Text>
                        <Text className="text-left mt-2">Link Youtube:
                          <a className='italic text-cyan-600' href={item.strYoutube}> here</a>
                        </Text>
                          {/* <Text className="text-left mt-2 mb-1">Ingredients:</Text>
                          <Text className="text-left">{item.strIngredient1}</Text>
                          <Text className="text-left">{item.strIngredient2}</Text>
                          <Text className="text-left">{item.strIngredient3}</Text>
                          <Text className="text-left">{item.strIngredient4}</Text>
                          <Text className="text-left">{item.strIngredient5}</Text>
                          <Text className="text-left">{item.strIngredient6}</Text>
                          <Text className="text-left">{item.strIngredient7}</Text>
                          <Text className="text-left">{item.strIngredient8}</Text>
                          <Text className="text-left">{item.strIngredient9}</Text>
                          <Text className="text-left">{item.strIngredient10}</Text>
                          <Text className="text-left">{item.strIngredient11}</Text>
                          <Text className="text-left">{item.strIngredient12}</Text>
                          <Text className="text-left">{item.strIngredient13}</Text>
                          <Text className="text-left">{item.strIngredient14}</Text>
                          <Text className="text-left">{item.strIngredient15}</Text>
                          <Text className="text-left">{item.strIngredient16}</Text>
                          <Text className="text-left">{item.strIngredient17}</Text>
                          <Text className="text-left">{item.strIngredient18}</Text>
                          <Text className="text-left">{item.strIngredient19}</Text>
                          <Text className="text-left">{item.strIngredient20}</Text>
                          
                          <Text className="text-left mt-2 mb-1">Measurements:</Text>
                          <Text className="text-left">{item.strMeasure1}</Text>
                          <Text className="text-left">{item.strMeasure2}</Text>
                          <Text className="text-left">{item.strMeasure3}</Text>
                          <Text className="text-left">{item.strMeasure4}</Text>
                          <Text className="text-left">{item.strMeasure5}</Text>
                          <Text className="text-left">{item.strMeasure6}</Text>
                          <Text className="text-left">{item.strMeasure7}</Text>
                          <Text className="text-left">{item.strMeasure8}</Text>
                          <Text className="text-left">{item.strMeasure9}</Text>
                          <Text className="text-left">{item.strMeasure10}</Text>
                          <Text className="text-left">{item.strMeasure11}</Text>
                          <Text className="text-left">{item.strMeasure12}</Text>
                          <Text className="text-left">{item.strMeasure13}</Text>
                          <Text className="text-left">{item.strMeasure14}</Text>
                          <Text className="text-left">{item.strMeasure15}</Text>
                          <Text className="text-left">{item.strMeasure16}</Text>
                          <Text className="text-left">{item.strMeasure17}</Text>
                          <Text className="text-left">{item.strMeasure18}</Text>
                          <Text className="text-left">{item.strMeasure19}</Text>
                          <Text className="text-left">{item.strMeasure20}</Text>
                          <Text className="text-left mt-2">Source: <a href={item.strSource}>{item.strSource}</a></Text> */}

                          {/* <Text className="text-left">{item.transactionTime}s ago</Text> */}
                        </div>
                        {/* <div className='col'>
                          <Text className="text-left">Validated By {item.transactionUser}</Text>
                          <Text className="text-left">{item.quantity} txns</Text>
                        </div> */}
                        {/* <Text>
                          <a
                            className="rounded-[14px] border border-black-400 text-black text-[13px] font-mono hover:bg-gray-700 transition-all rounded-md w-[100px] h-10 flex items-center justify-center"
                            target="_blank"
                            rel="noreferrer"
                            >
                            0 COIN
                          </a>
                        </Text> */}
                        {/* <BarList
                          data={item.transactionUser}
                          valueFormatter={(number: number) =>
                            Intl.NumberFormat('us').format(number).toString()
                          }
                          className="mt-2"
                        /> */}
                      </Flex>
                    {/* <div className='mt-6'>
                      <Text className="text-center">VIEW ALL BLOCKS</Text>
                    </div> */}
                  </Card>
              
            )
              })
              : 
              <div></div>
        }
        </Grid>
      {/* <Chart /> */}
    </main>
    </>
  );
};

