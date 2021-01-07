import React from 'react';
import SellBookStyles from './SellBook.scss';

const SellBook = () => (
    <div className={SellBookStyles.sel} >
         <button type="button" className={SellBookStyles.sell}>Sell</button> 
    </div>
);

export default SellBook;