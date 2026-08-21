import React from 'react'
import PhotoGallery from '@/components/PastToursPage/PastTourPictures/pastTourPicture'
export default function  Gallery() {
  return (
    <div id='gallery'>
      <PhotoGallery TotalImage={12} showGradient={false} />
    </div>
  )
}
