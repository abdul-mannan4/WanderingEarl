import React from 'react'
import PhotoGallery from '@/components/PastToursPage/PastTourPictures/pastTourPicture'
export default function  Gallery() {
  return (
    <div id='gallery'>
      <PhotoGallery TotalImage={12} showGradient={false} gridCols=' grid-cols-2 2xl:grid-cols-3' />
    </div>
  )
}
