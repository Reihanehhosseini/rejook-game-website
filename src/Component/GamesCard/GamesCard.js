import React from 'react'
import "./GamesCard.css"

export default function GamesCard({img}) {
  return (
    <div className='GamesCard'>
      <img src={img} alt="" />
    </div>
  )
}
