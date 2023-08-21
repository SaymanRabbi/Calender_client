import React from 'react';

import type { NextPageWithLayout } from '@/types/generics';
import Dropdown from '@/components/Dropdown';

const people = [
    { name: 'Wade Cooper' },
    { name: 'Arlene Mccoy' },
    { name: 'Devon Webb' },
    { name: 'Tom Cook' },
    { name: 'Tanya Fox' },
    { name: 'Hellen Schmidt' },
    { name: 'Hellen Schmidt' },
    { name: 'Hellen Schmidt' },
    { name: 'Hellen Schmidt' },
    { name: 'Hellen Schmidt' },
    { name: 'Hellen Schmidt' },
]
const Terms: NextPageWithLayout = function () {
    return (
        <section className='flex items-center justify-center' >
            {/* <Heading1>Test</Heading1> */}
            <div className='w-[350px]'>
                <Dropdown dropdownItems={people} />
            </div>
        </section>
    );
};

Terms.layout = 'none';
export default Terms;
