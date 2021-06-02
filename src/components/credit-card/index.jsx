import React from 'react';
import './index.model.css';

import Visa from '../../assets/images/png/visa.svg';
import Master from '../../assets/images/png/mastercard.svg';
import Amex from '../../assets/images/png/amex.svg';
import Discover from '../../assets/images/png/discover.svg';
import Empty from '../../assets/images/png/logo-empty.png';

export default props => (
    <div className='cc-img'>
     {!props.flag && <span className="display-md" >
      <img
      src={Visa}
      className="cc-img-logo"
      alt='generic credit card logo'
    />
    <img
      src={Master}
      className="cc-img-logo"
      alt='generic credit card logo'
    />
    <img
      src={Discover}
      className="cc-img-logo"
      alt='generic credit card logo'
    />
    <img
      src={Amex}
      className="cc-img-logo"
      alt='generic credit card logo'
    />
        
        
      </span>}
      {/* {!props.flag && <span className="display-xs" >
      <img
      src={Empty}
      className="cc-img-logo"
      alt='generic credit card logo'
    />
    
        
      </span>} */}

{props.flag &&<img className="cc-img-logo" src={props.flag} alt='' />}
    </div>
);
