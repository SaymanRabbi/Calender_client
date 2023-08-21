import React from 'react';

import type { PropertyData } from '@/types';

import GeneralRules from './GeneralRules';
import Amenities from './Amenities';
import KidAmenities from './KidAmenities';

interface Property {
  property: PropertyData;
}
export default function PropertySidebarContent({ property }: Property) {
  return (
    <>
      <GeneralRules data={property.guestRules} />
      <Amenities data={property.amenities} />
      {property.guestRules.kids && (
        <KidAmenities data={property.kidAmenities} />
      )}
    </>
  );
}
