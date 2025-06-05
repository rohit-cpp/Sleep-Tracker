import Guest from '@/components/Guest';
import { currentUser } from '@clerk/nextjs/server';
import React from 'react'

const HomePage = async () => {
  const user = await currentUser();
  if (!user) {
    return <Guest />;
    
  }
  return (
    <div>   

      <div className='text-5xl font-bold text-cyan-600'
      >Sleep Tracker
      
      </div>
    
      <div>Home Page</div>
    </div>
  )
}

export default HomePage;