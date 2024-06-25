"use client";

import React from 'react'


interface OrderDetailProps {
    id: any;
    details: any;
}

const orderHistoryDetail: React.FC<OrderDetailProps> = ({id, details}) => {
  return (
    <div>
        {/* display all previous page info + this page details */}
      {/* <img src="" alt="" /> */}
      <h3>Product Name</h3>
      <p>Product Details Info ....</p>
    </div>
  )
}

export default orderHistoryDetail
