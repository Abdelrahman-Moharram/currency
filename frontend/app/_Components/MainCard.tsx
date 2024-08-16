import React from 'react'
import SwapButton from './SwapButton'
import Item from './Item'

const MainCard = () => {
  return (
    <div className='mx-auto my-5 w-[80%] border border-border rounded-lg flex justify-evenly items-center'>
      <Item />
      <div><SwapButton /></div>
      <div>
        <Item />
      </div>
    </div>
  )
}

export default MainCard
