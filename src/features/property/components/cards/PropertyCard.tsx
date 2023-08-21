import React from 'react';
import Link from 'next/link';

import { PropertyCardProps } from '@/types';

import Avater from '@/components/Avatar';

export default function PropertyCard({
  id,
  propertyName,
  propertyImage,
  userName,
  userAvater,
}: PropertyCardProps) {
  return (
    <div className="flex flex-col gap-6 max-md:w-full">
      <Link href={`/dashboard/property/${id}`}>
        <div className="cursor-pointer rounded-2xl shadow-card" >
          <div className="relative w-full xl:w-[736px] h-[400px] rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              {propertyImage ? (
                <img
                  src={propertyImage}
                  alt="test"
                  className="object-cover w-full h-full rounded-2xl "
                />
              ) : (
                <img
                  src="/assets/image/property_image.jpg"
                  alt="test"
                  className="object-cover w-full h-full"
                />
              )}
            </div>
            <button
              type="button"
              className="bg-gray-100 items-center w-[186px] flex py-1 pr-6 pl-1 rounded-[36px] gap-2 absolute bottom-3 right-1/2 transform translate-x-2/4"
            >
              {userAvater ? (
                <Avater imgSrc="/assets/jeff_sir.svg" />
              ) : (
                <Avater />
              )}
              <div className="text-sm text-left">
                <p className="w-full font-semibold text-Black">
                  {propertyName}
                </p>
                <p className="text-gray-400">{userName}</p>
              </div>
            </button>
          </div>
        </div>
      </Link>
    </div>
  );
}

PropertyCard.defaultProps = {
  propertyImage: undefined,
  userAvatar: undefined,
};
