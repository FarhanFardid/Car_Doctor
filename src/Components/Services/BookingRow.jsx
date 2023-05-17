import React from 'react';

const BookingRow = ({booking,handleDelete}) => {


    const { _id,email,date,service,price,img,} = booking;
    return (
        <tr>
        <th>
        <button onClick={() => handleDelete(_id)} className="btn btn-circle btn-sm bg-red-700">
  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
</button>
        </th>
        <td>
          <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-square w-28 h-28">
                <img src={img} alt="service img" />
              </div>
            </div>
            <div>
              <div className="font-bold">{service}</div>
              <div className="text-sm opacity-90 text-orange-600">$ {price}</div>
            </div>
          </div>
        </td>
        <td>
          {email}
          <br/>
          
        </td>
        <td>{date}</td>
        <th>
          <button className="btn btn-ghost btn-xs">Please Confirm</button>
        </th>
      </tr>
    );
};

export default BookingRow;