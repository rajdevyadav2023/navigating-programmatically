import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    const navigate = useNavigate();
  return (
    <div>
      <h1>this is home page.</h1>

      <button onClick={()=>navigate('order-summary')}>Place Order</button>
    </div>
  )
}

export default Home
