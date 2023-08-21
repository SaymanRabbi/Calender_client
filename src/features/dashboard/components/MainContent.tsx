import React from 'react';

import {
  IconButton,
  OutlineButton,
  GradientButton,
} from '@/components/Buttons';
import { Trash } from '@/icons';
import { Body1 } from '@/components/Typography';
import StayIndicator from '@/features/shared/components/StayIndicator';
import PropertyCard from '@/features/property/components/cards/PropertyCard';
import { AccessCard, ActionCard } from './DashboardCards';

export default function DashboardMainContent() {
  return (
    <>
      <AccessCard
        title="Property access"
        type="access"
        user={{ name: '[Owner Name]' }}
        info="string"
      />
      <AccessCard
        title="Property access request"
        type="request"
        user={{ name: '[User Name]', email: 'name@example-email.com' }}
      />

      <StayIndicator>
        Properties you have access to will appear here.
      </StayIndicator>

      <PropertyCard
        id="1"
        propertyName="Property Name"
        userName="Owner Name"
        userAvater=""
      />

      <PropertyCard
        id="2"
        propertyName="Property Name"
        propertyImage="/assets/property.png"
        userName="Owner Name"
        userAvater=""
      />
      <ActionCard
        title="Add your profile photo."
        action={
          <span>
            {' '}
            <GradientButton text="Account Settings" />
          </span>
        }
      >
        <Body1>
          Be friendly, profile photos help to see who’s staying at a glance.
        </Body1>
        <Body1>
          Click the profile icon in the top right corner and head over the
          Account Settings to add your photo.
        </Body1>
      </ActionCard>
      <ActionCard
        title="Stayy example property."
        action={
          <span className="flex gap-3">
            <GradientButton text="Yes! Invite me." />
            <IconButton icon={<Trash />} />
          </span>
        }
      >
        <Body1>
          Want to get a better idea of how Stayy works with our super cool
          (fake) test property?
        </Body1>
      </ActionCard>
      <ActionCard
        title="Add your place."
        action={
          <span className="flex gap-3">
            <GradientButton text="Add Property" />
            <IconButton icon={<Trash />} />
          </span>
        }
      >
        <Body1>
          It’s super easy to add and share your place, even if it’s just while
          you take that one awesome trip a year, or to invite your in-laws.
        </Body1>
      </ActionCard>
      <ActionCard
        title="Where’s my property invite?"
        action={
          <span>
            <OutlineButton text="Got it" />
          </span>
        }
      >
        <Body1>
          1. Check that the property owner sent your invite to the email address
          you used to sign up.
        </Body1>
        <Body1>
          2. Property managers can set their place to inactive, which will hide
          their property from all guests until they change the setting.
        </Body1>
        <Body1>
          3. Have the property owner create a sharable link and text or email it
          to you. From the link you’ll be able to request access to their
          property.
        </Body1>
      </ActionCard>
    </>
  );
}
