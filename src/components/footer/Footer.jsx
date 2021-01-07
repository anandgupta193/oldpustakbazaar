import React from 'react';
import FootStyles from './Footer.scss';

const Footer = () => (
    <div className={FootStyles.search}>
     <ul>
              <li>
                <a href="Shop Sale">Shop Sale</a>
              </li>
              <li className={FootStyles.prod}>
                <a href="Latest Product">Latest Product</a>
              </li>
              <li className={FootStyles.blog}>
                <a href="Read the Blog">Read the Blog</a>
              </li>
            </ul>

    </div>
  );

export default Footer;