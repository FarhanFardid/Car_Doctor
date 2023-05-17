
import service from '../../assets/images/services/2.jpg'
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import BookingRow from './BookingRow';

const ServiceCart = () => {
  const {user} = useContext(AuthContext);

  const  [cart,setCart] = useState([]);
  const uri = `http://localhost:5000/bookings?email=${user?.email}`
  useEffect(()=>{
    fetch(uri)
    .then (res=> res.json())
    .then (data => setCart(data))
  },[uri])
  
  const handleDelete = id =>{
    const proceed = confirm("Are you sure, you want to delete the booked service?")
    if(proceed){
        fetch(`http://localhost:5000/bookings/${id}`,{
          method: 'DELETE',
        })
        .then (res => res.json())
        .then (data => {
          if(data.deletedCount > 0){
            alert("Deleted successfully");
            const remaining = cart.filter(booking =>booking._id !== id)
            setCart(remaining);
          }
        })

    }
}

const handleConfirm = id =>{
  fetch(`http://localhost:5000/bookings/${id}`,{
    method: 'PATCH',
    headers :{
      'content-type' : "application/json"
    },
    body: JSON.stringify({status:'confirm'})
  })
  .then(res=>res.json())
  .then (data=> {
    if(data.modifiedCount > 0){
      const remaining = cart.filter(booking=> booking._id !== id)
      const updated = cart.find(booking=> booking._id === id)
      updated.status='confirm'
      const newCart = [updated, ...remaining]
      setCart(newCart);
    }
  })
}
    return (
      <>
        <div className="hero h-[450px]" style={{ backgroundImage: `url(${service})` }}>
        <div className="hero-overlay bg-opacity-20"></div>
        <div className="text-neutral-content">
          <div className="text-left">
            <h1 className="mb-5 text-5xl font-bold  text-red-700">Bookings Cart</h1>
            <p className="mb-5 text-white">Enhancing your driving experience with our exceptional car garage service.
</p>
            <button className="btn bg-slate-500"> Car Service </button>
          </div>
        </div>
      </div>
      {/* table format */}
      <div className="overflow-x-auto w-full">
  <table className="table w-full">
    {/* head */}
    <thead>
      <tr>
        <th>
         
        </th>
        <th className='ps-12'>Service Details </th>
        <th className='ps-12'>Name</th>
        <th className='ps-8'>Date</th>
        <th> Status</th>
      </tr>
    </thead>
    <tbody>
      {
        cart.map(booking => <BookingRow 
          key={booking._id}
           booking={booking} 
           handleDelete={handleDelete}
           handleConfirm={handleConfirm}> </BookingRow>)
      }
    
     
    
   
    </tbody>
   

    
  </table>
</div>
      </>
    );
};

export default ServiceCart;