import React, { useState } from 'react';

import { ModalProps, DashboardModalType } from '@/types';
import { GradientButton } from '@/components/Buttons';
import DashboardModalWrapper from '@/components/Wrappers/DashboardModalWrapper';
import { Body1, Caption, Heading4 } from '@/components/Typography';
import InputField from '@/components/InputField';
import Dropdown from '@/components/Dropdown';


interface Props extends ModalProps {
    // eslint-disable-next-line react/no-unused-prop-types
    setModal: (_type: DashboardModalType) => void;
}

const propertyType = [
    { name: 'House' },
    { name: 'Apartment' },
    { name: 'Guesthouse' },
    { name: 'Guest room' },
    { name: 'Bed & breakfast' },
    { name: 'Hotel' },
    { name: 'Boat' },
    { name: 'Campsite/Land' },
    { name: 'RV/Camper' },
    { name: 'Other' }
]

function AddPropertyModal({ bindings }: Props) {

    const [disabled] = useState(false);


    return (
        <DashboardModalWrapper
            className="!p-0"
            heading="Add your property"
            bindings={bindings}
            preventClose={disabled}
            actions={<GradientButton text="YES, REMOVE" />}
        >
            <form className="relative flex flex-col items-start w-full gap-6 ">
                <div className="flex flex-col items-start gap-1.5">
                    <Heading4 className="text-left ">
                        Let’s start with some simple information.
                    </Heading4>
                    <Body1 className='text-gray-400'>You can edit these items later.</Body1>
                </div>
                <div className="flex flex-col w-full items-start self-stretch gap-1.5">
                    <label className='w-full mb-1.5' htmlFor="property_name">
                        <Body1>Property Name</Body1>
                        <InputField
                            id='property_name'
                            className='w-full'
                            type="text"
                            placeholder="Wayne Manor"
                            disabled={disabled}
                        />
                    </label>

                </div>
                <div className="flex flex-col items-start self-stretch gap-1.5">
                    <label className='w-full' htmlFor="address">
                        <Body1 className='text-gray-400 mb-1.5'>Address</Body1>
                        <InputField
                            className='w-full'
                            type="text"
                            placeholder="1007 Mountain Drive, Gotham"
                            disabled={disabled}
                        />
                    </label>
                    <div>


                        <Caption className="text-left ">
                            Informational only. This will create a link out to google maps
                            for your guests. You can even use map coordinates like:
                            -16.724932, -150.976164
                        </Caption>
                    </div>
                </div>
                <div className="flex w-full flex-col items-start self-stretch gap-1.5">
                    <label className='w-full' htmlFor="address">
                        <Body1 className='text-gray-400 mb-1.5'>Property Type</Body1>
                        <Dropdown dropdownItems={propertyType} />
                    </label>

                </div>
            </form>
        </DashboardModalWrapper>
    );
}

export default AddPropertyModal;
