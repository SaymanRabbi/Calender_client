import React from 'react';
// import { useRouter } from 'next/router';

import type { NextPageWithLayout, PropertyData } from '@/types';

import DashboardWrapper from '@/components/Wrappers/DashboardWrapper';
import PropertyHeader from '@/features/property/components/HeaderContent';
import PropertySidebarContent from '@/features/property/components/SidebarContent';
import PropertyMainContent from '@/features/property/components/MainContent';
import { MyContextProvider } from '@/app.context';


const properties: PropertyData[] = [
  {
    name: 'Falling Water',
    address: '1491 Mill Run Rd, Mill Run, PA 15464',
    user: {
      name: 'Host info',
      image: '/assets/jeff_sir.svg',
    },
    images: [],
    guestRules: {
      arrive: '3:00 pm',
      depart: '11:00 am',
      pets: false,
      kids: false,
      parties: false,
      smoking: false,
    },
    amenities: {
      custom: [
        'Custom amenity 1',
        'Custom amenity 2',
        'Custom amenity 3',
        'Custom amenity 4',
      ],
      default: [
        'Books',
        'Coffee maker',
        'Toaster',
        'Wifi',
        'Books',
        'Coffee maker',
        'Toaster',
        'Wifi',
      ],
    },
    kidAmenities: [
      'Books',
      'Coffee maker',
      'Toaster',
      'Wifi',
      'Books',
      'Coffee maker',
      'Toaster',
      'Wifi',
    ],
    guestInfo: null,
  },
  {
    name: 'Falling Water',
    address: '1491 Mill Run Rd, Mill Run, PA 15464',
    user: {
      name: 'Host info',
      image: '/assets/jeff_sir.svg',
    },
    images: [
      {
        img_id: 1,
        img_src: '/assets/property.png',
        img_alt: 'sometext',
      },
      {
        img_id: 2,
        img_src: '/assets/pexels-binyamin-mellish-106399.jpg',
        img_alt: 'sometext',
      },
      {
        img_id: 3,
        img_src: '/assets/property-image-3.png',
        img_alt: 'sometext',
      },
      {
        img_id: 4,
        img_src:
          'https://images.unsplash.com/photo-1618071147329-803bf99d9746?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxfDB8MXxyYW5kb218MHx8fHx8fHx8MTY4MTg4Mjg2Ng&ixlib=rb-4.0.3&q=80&utm_campaign=api-credit&utm_medium=referral&utm_source=unsplash_source&w=1080',
        img_alt: 'sometext',
      },
      {
        img_id: 5,
        img_src: 'https://source.unsplash.com/F_r83HEzsXI',
        img_alt: 'sometext',
      },
      {
        img_id: 6,
        img_src: 'https://source.unsplash.com/m82uh_vamhg',
        img_alt: 'sometext',
      },
      {
        img_id: 7,
        img_src: 'https://source.unsplash.com/br-Xdb9KE0Q',
        img_alt: 'sometext',
      },
      {
        img_id: 8,
        img_src: 'https://source.unsplash.com/6mze64HRU2Q',
        img_alt: 'sometext',
      },
    ],
    guestRules: {
      arrive: '3:00 pm',
      depart: '11:00 am',
      pets: false,
      kids: true,
      parties: false,
      smoking: false,
    },
    amenities: {
      custom: [
        'Custom amenity 1',
        'Custom amenity 2',
        'Custom amenity 3',
        'Custom amenity 4',
      ],
      default: [
        'Books',
        'Coffee maker',
        'Toaster',
        'Wifi',
        'Books',
        'Coffee maker',
        'Toaster',
        'Wifi',
      ],
    },
    kidAmenities: [
      'Books',
      'Coffee maker',
      'Toaster',
      'Wifi',
      'Books',
      'Coffee maker',
      'Toaster',
      'Wifi',
    ],
    guestInfo: `
    <p>Hi! Welcome to my place.</p> <br/>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>

<div>
  <p>&nbsp;&nbsp;• Lists should be available for guest info. </p>
  <p>&nbsp;&nbsp;• Whatever the owner wants to add here. </p>
</div>

<br/>

<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p><br/>

<p>Continue as long as user wants to... Maybe limit to 6000 characters?</p>`,
  },
];

const Property: NextPageWithLayout = function () {

  const property = properties[1];


  return ( 
    <MyContextProvider>
    <DashboardWrapper>
      <PropertyHeader
        address={property.address}
        name={property.name}
        images={property.images}
      />
      <DashboardWrapper.Content>
        <DashboardWrapper.SideBar>
          <PropertySidebarContent property={property} />
        </DashboardWrapper.SideBar>
        <DashboardWrapper.MainContent>
          <PropertyMainContent guestInfo={property.guestInfo} />
        </DashboardWrapper.MainContent>
      </DashboardWrapper.Content>
    </DashboardWrapper>
    </MyContextProvider>
  );
};

Property.layout = 'dashboard';
export default Property;
