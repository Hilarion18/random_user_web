'use client';

import type { Metadata } from 'next';
import Image from 'next/image';
import axios from 'axios';
import { useEffect, useState, useRef, JSXElementConstructor, Key, PromiseLikeOfReactNode, ReactElement, ReactNode } from 'react';
import { Card, Metric, Text, Title, BarList, Flex, Grid } from '@tremor/react';
// import Chart from './chart';

import Search from '~/components/widgets/Search';
import Link from 'next/link';
import { UserList } from '~/shared/data/pages/user.data';

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

export const HomePage = () => {  

  const [currentMenu, setCurrentMenu] = useState(0)
  const changeMenu = (menuNumber: number) => {
    setCurrentMenu(menuNumber)
  }

  return (
    <>
    <main className="p-2 md:p-10 mx-auto max-w-7xl">
      <div className="flex">
          {/* Sidebar */}
          <div className="w-1/4 text-gray-500">
          {/* <div className="w-1/4 bg-gray-800 text-white"> */}
            {/* <div className="p-4 text-2xl font-bold">Menu</div> */}
            <ul >
              <li className="p-4 hover:bg-gray-400 hover:rounded hover:text-neutral-950 cursor-pointer"
                onClick={() => {
                  setCurrentMenu(0)
                }}
              >
                <div className='row flex-row'>
                  {/* <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg> */}
                  <Text>Beranda</Text>
                </div>
              </li>
              <li className="p-4 hover:bg-gray-400 hover:rounded hover:text-neutral-950 cursor-pointer"
                onClick={() => {
                  setCurrentMenu(1)
                }}
              >
                Driver Management
              </li>
              <li className="p-4 hover:bg-gray-400 hover:rounded hover:text-neutral-950 cursor-pointer"
                onClick={() => {
                  setCurrentMenu(2)
                }}
              >
                Pickup
              </li>
            </ul>
          </div>

          {/* Main Content */}
          {/* <div className="flex-1 bg-gray-100">
            <div className="p-4">
              <h1 className="text-3xl font-bold text-gray-500">Coming Soon...</h1>
              <p className="mt-4">This is where your main content will go.</p>
            </div>
          </div> */}
          {
            // currentMenu === 1
            currentMenu === 0
            ?
            <UserList/>
            : <></>
          }
        </div>
    </main>
    </>
  );
};

