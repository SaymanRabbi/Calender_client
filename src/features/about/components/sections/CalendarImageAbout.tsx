import React from 'react';

import styles from '@/styles/features/about/sections/About.module.scss';

function CalendarImageAbout() {
  return (
    <section className={styles.section}>
      <div className="w-full flex justify-center">
        <img
          src="/assets/image/desktop/aboutPage/stayy-magical-home-shared-calendar.webp"
          alt="stayy magical home shared calendar"
          className="hidden w-full h-full xl:w-[1155px] xl:h-[550px] md:inline-block"
        />
      </div>
      <img
        src="/assets/image/mobile/aboutPage/stayy-home-sharing-calendar.webp"
        alt="stayy home sharing calendar"
        className="w-full h-auto md:hidden"
      />
    </section>
  );
}

export default CalendarImageAbout;
