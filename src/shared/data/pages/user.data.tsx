'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useRef, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
import dateFormat, { masks } from "dateformat";
// import Chart from './chart';

import Search from '~/components/widgets/Search';
import Link from 'next/link';

type NameUser = {
  title: string;
  first: string;
  last: string;
}
type StreetLocation = {
  number: number;
  name: string;
}
type CoordLocation = {
  latitude: string;
  longitude: string;
}
type TimezoneLocation = {
  offset: string;
  description: string;
}
type LocationUser = {
  street: StreetLocation;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: CoordLocation;
  timezone: TimezoneLocation;
}
type LoginUser = {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}
type DobUser = {
  date: string;
  age: number
}
type RegisteredUser = {
  date: string;
  age: number;
}
type IdUser = {
  name: string;
  value: string;
}
type PictureUser = {
  large: string;
  medium: string;
  thumbnail: string;
}
type RandomUser = {
  gender: string;
  name: NameUser;
  location: LocationUser;
  email: string;
  login: LoginUser;
  dob: DobUser;
  registered: RegisteredUser;
  phone: string;
  cell: string;
  id: IdUser;
  picture: PictureUser;
  nat: string;
}

export const UserList = () => {  
  const [keyword, setKeyword] = useState("");
  const [randomUserList, setRandomUserList] = useState<any[]>([])
  const [shownUsers, setShownUsers] = useState<any[]>([])
  const [userSingle, setUserSingle] = useState<any>()
  const urlRandomUsers = "https://randomuser.me/api";
  const totalDataRequest = "/?results=30"

  /* pagination */
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(6);
  const [displayPages, setDisplayPages] = useState<any>([])
  const [dataPerPage, setDataPerPage] = useState(5);

  const getRandomUsers = async (pageNumber: number) => {
    try {
      const headerData = {
        "Access-Control-Allow-Headers" : "Content-Type",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "OPTIONS,POST,GET,PUT"
      }
      let itemIsReloaded = localStorage.getItem("is_reloaded")
      let startIndex = (pageNumber * 5) - 5

      if (itemIsReloaded !== "1") {
        setRandomUserList([])
        setShownUsers([])
        const dataRandomUsers = await axios.get((urlRandomUsers + totalDataRequest),
          // { headers: headerData }
        )
        let dataResult = dataRandomUsers.data.results
        let filteredUsers = []
        if (dataResult.length > 0) {
          for (let i = startIndex; i < dataPerPage; ++i) {
            console.log("index: ", i);
            
            filteredUsers.push(dataResult[i])
          }
          setRandomUserList(dataResult)
          localStorage.setItem("data_user", JSON.stringify(dataResult))
        }
        setShownUsers(filteredUsers)
        localStorage.setItem("is_reloaded", "1")
      } else {
        let dataUserStorage = JSON.parse(localStorage.getItem("data_user")!)
        if (dataUserStorage !== null) {
          let filteredUsers = []
          for (let i = startIndex; i < dataPerPage; ++i) {
            filteredUsers.push(dataUserStorage[i])
          }
          setRandomUserList(dataUserStorage)
          setShownUsers(filteredUsers)
        }
        localStorage.setItem("is_reloaded", "1")
      }
      setUserSingle(randomUserList[1])
      console.log("randomUserList: ", randomUserList);
      console.log("userSingle: ", userSingle);
      
    } catch (error) {
      console.log("tryCatch: ", error);
      
    }
  };

  const updateKeyword = (data: string) => {
    let dataUserStorage = JSON.parse(localStorage.getItem("data_user")!)
    if (data !== "") {
      let filteredUsers = []
      let totalDataSearched = []
      let startIndex = (currentPage * 5) - 5
      let count = 0
      for (let i = startIndex; i < dataUserStorage.length; ++i) {
        let item: RandomUser = dataUserStorage[i]
        let fullName = item.name.first.toLowerCase() + " " + item.name.last.toLowerCase()
        if (fullName.includes(data)) {
          if (count < 5) {
            filteredUsers.push(item)
            count++
          } else {
            totalDataSearched.push(item)
          }
        }
      }
      setShownUsers(filteredUsers)
      setRandomUserList(totalDataSearched)
    } else {
      let filteredUsers = []
      let startIndex = (currentPage * 5) - 5
      for (let i = startIndex; i < dataPerPage; ++i) {
        filteredUsers.push(dataUserStorage[i])
      }
      setShownUsers(filteredUsers)
      setRandomUserList(dataUserStorage)

    }
  }

  const paginate = (pageNumber: any) => {
    const maxPagesToShow = 2;
    const lastIndex = Math.min(pageNumber + maxPagesToShow - 1);
    const firstIndex = Math.max(lastIndex - maxPagesToShow + 1);
    // const pageNumbers: number[] = [];
    // for (let i = firstIndex; i <= lastIndex; i++) {
    //   pageNumbers.push(i);
    // }
    let filteredUsers = []
    let startIndex = (pageNumber * 5) - 5
    let maxIndex = (pageNumber * 5)
    setShownUsers([])
    for (let i = startIndex; i < maxIndex; ++i) {
      filteredUsers.push(randomUserList[i])
    }
    setShownUsers(filteredUsers)
    setCurrentPage(pageNumber)
    // setDisplayPages(pageNumbers);
    // setDisplayPages(pageNumbers.slice(firstIndex - 1, lastIndex)) 
  };

  useEffect(() => {
    getRandomUsers(1);
  }, [])
  const ref = useRef();
  
  return (
    <>
    <main className="ml-4 p-2 mx-auto max-w-7xl">
      <Grid numItemsSm={1} numItemsLg={1} className="gap-6 mb-6">
        <Card className='border-solid border-2 border-sky-500 rounded-md'>
          <div className="flex flex-col sm:flex-row">
            <div className="flex-1 w-96">
                <Title className='font-bold text-lg w-96'>Driver Management</Title>
                <Text className='w-48 lg:w-96'>Data driver yang bekerja dengan Anda.</Text>
            </div>
            <div className="flex-1 w-24">
              <Search keyword={ keyword} updateKeyword={updateKeyword} />
            </div>
            <div className="flex-1 w-24">
              <button
                className="mx-1 px-3 py-1  w-full h-full">
                  <Text className='bg-red-500 p-2 rounded-lg'>
                    TAMBAH DRIVER
                  </Text>
              </button>
            </div>
          </div>
        </Card>
      </Grid>
      <Grid numItemsSm={4} numItemsLg={4} className="gap-6">
        {
          shownUsers !== null && shownUsers !== undefined && shownUsers.length > 0
            ? 
            shownUsers.map((item: RandomUser, i) => {
              return (
                <Card key={i} className='border-solid border-2 rounded-md p-0'>
                  {/* <Link
                    href={"/user/"+ item.id.value}
                    onClick={() => {}}
                  > */}
                    <Title className='font-bold text-lg h-16 p-3'>Driver ID: 
                      <Text className='text-red-500'>
                        {item.id.value ? item.id.value : "-"}
                      </Text>
                    </Title>
                  {/* </Link> */}
                  <div className="border-t-2 border-gray-300 mb-3 w-full"></div>
                  <Flex className='mt-6 p-3'>
                    {/* <Link
                      href={"/user/"+ item.id.value}
                    > */}
                      <div
                        // ref={"/meal/" + item.idMeal}
                        className="col items-center justify-center">
                        <Image
                          className="rounded-full"
                          src={item.picture.medium}
                          height={150}
                          width={150}
                          alt={""}
                        />
                      </div>
                    {/* </Link> */}
                  </Flex>
                  <Flex className="mt-6">
                    <div className='col p-2'>
                      <div className='mb-3'>
                        <Text className='text-gray-500 text-lg mb-1'>Nama Driver</Text>
                        <Text className='text-lg h-16 overflow-scroll text-wrap'>{item.name.title} {item.name.first} {item.name.last}</Text>
                      </div>
                      <div className='mb-3'>
                        <Text className='text-gray-500 text-lg mb-1'>Telepon</Text>
                        <Text className='text-left w-32 overflow-scroll text-wrap'>{item.phone}</Text>
                      </div>
                      <div className='mb-3'>
                        <Text className='text-gray-500 text-lg mb-1'>Email</Text>
                        <Text className='text-left w-32 overflow-scroll text-wrap'>{item.email}</Text>
                      </div>
                      <div className='mb-3'>
                        <Text className='text-gray-500 text-lg mb-1'>Tanggal Lahir</Text>
                        <Text className='text-left w-32 overflow-scroll text-wrap'>{dateFormat(item.dob.date, "yyyy-mm-dd").split('-').reverse().join('-')}</Text>
                      </div>
                    </div>
                  </Flex>
                </Card>
          )
            })
            : 
            <div></div>
        } 
        </Grid>
        {/* Pagination */}
        <div className="flex justify-center mt-4 row">
            {
            // currentPage > 1 && (
              <button
                onClick={() => {
                  if (currentPage !== 1) {
                    paginate(currentPage - 1)
                  }
                }}
                className="mx-1 px-3 py-1 flex"
                >
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={"size-6 " + ((currentPage !== 1) ? "" : "stroke-gray-500")}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5 8.25 12l7.5-7.5" />
                </svg>
                <Text className={"" + ((currentPage !== 1) ? "" : "text-gray-500")}>Previous</Text>
              </button>
            // )
            }
            {/* {
              displayPages.map((page: string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | Iterable<ReactNode> | PromiseLikeOfReactNode | null | undefined, index: Key | null | undefined) => (
                <button
                  key={index}
                  onClick={() => paginate(page)} 
                  className={`mx-1 px-3 py-1 ${currentPage === page ? 'bg-gray-500 text-white' : 'bg-gray-200'}`}
                  >
                  {page}
                </button>
              ))
            } */}
            {
            // currentPage < totalPages && (shownUsers.length > 4) && (
              <button 
                onClick={() => {
                  if (currentPage !== 5) {
                    paginate(currentPage + 1)
                  }
                }}
                className="mx-1 px-3 py-1 flex"
                >
                <Text className={"" + ((currentPage !== 5) ? "" : "text-gray-500")}>Next</Text>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className={"size-6 " + ((currentPage !== 5) ? "" : "stroke-gray-500")}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            // )
            }
          </div>
    </main>
    </>
  );
};

