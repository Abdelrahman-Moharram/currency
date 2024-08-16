import React from 'react'
import { TiThList } from "react-icons/ti";
import { PiCardsFill } from "react-icons/pi";

interface props{
    handleViewMode: (arg0:number)=>void
    viewMode:number
}

const ViewModeButtons = ({viewMode, handleViewMode}:props) => {
  return (
    <span className="inline-flex overflow-hidden rounded-md border bg-white shadow-sm">
        <button
            onClick={()=>handleViewMode(0)}
            className={"inline-block border-e p-3 focus:relative "
                + (viewMode == 0?"text-white bg-black shadow-md":"text-black hover:bg-gray-50")
            }
            title="Card View"
        >    
            <TiThList />   
        </button>

        <button
            onClick={()=>handleViewMode(1)}
            className={"inline-block border-e p-3 focus:relative "
                + (viewMode === 1?"text-white bg-black shadow-md":"text-black hover:bg-gray-50")
            }
            title="Wide View"
        >
            <PiCardsFill />
        </button>
    </span>
  )
}

export default ViewModeButtons
