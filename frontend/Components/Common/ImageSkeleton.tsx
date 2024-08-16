import React from 'react'


interface props{
  width:string;
  height:string;
  rounded?:string;
  margin?:string;
  shadow?: boolean
}
const ImageSkeleton = ({width, height, rounded='0px', margin='0px', shadow=true}:props) => {
    return (
      <div 
          className={"bg-slate-200 animate-pulse "+(shadow?"shadow-md":"")}
          style={{
                width,
                height,
                borderRadius:rounded,
                margin:margin,
            }}
          >
      </div>
    )
  }
export default ImageSkeleton
