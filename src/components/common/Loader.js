import React from 'react';
import { Spinner } from 'reactstrap';

const Loader = () => (
  <div className='d-flex justify-content-center my-3'>
    <Spinner style={{ width: '3rem', height: '3rem' }} />
  </div>
);

export default Loader;
