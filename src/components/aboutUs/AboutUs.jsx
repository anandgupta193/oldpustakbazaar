/* eslint-disable linebreak-style */
import React from 'react';
import AboutStyles from './AboutUs.scss';

const AboutUs = () => (
  <div className={AboutStyles.full}>
    <h1 className={AboutStyles.head}>About Us</h1>
    <h2 className={AboutStyles.content}>
      <strong>Build leading destinations for buying, selling, and exchanging Old Books</strong>
    </h2>
    <p className={AboutStyles.about}>
      <strong>
        General issue which majority of college students suffered is regarding availability & high
        pricing of books. This act as a hindrance for many students & they are forced to either purchase
        those expensive books just for semester or issue books from library on regular basis & pay late
        dues.
        So we are here with a solution to both of concern…..That may reduce these problem.
      </strong>
    </p>
    <h2 className={AboutStyles.join}>Are You Guyz Ready to Join Us?</h2>
  </div>
);

export default AboutUs;
