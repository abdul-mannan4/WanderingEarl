import React from 'react'
import TeamPage from './teamPage'

export default function TeamSection() {
  return (
    <div className='px-[208px] container'>
      <p className='section-title text-text-dark text-center'>
        Our <span className='text-accent-orange'>Team</span>
      </p>
      <div>
        <TeamPage />
      </div>
    </div>
  )
}
