import React from 'react'

export default function TourDetailLayout({children}: Readonly<{
  children: React.ReactNode;
}>) 
 {


  return (

    <main className='flex-1'>
        {children}
    </main>
  )
}
