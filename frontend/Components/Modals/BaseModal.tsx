import React from 'react';



interface Props{
    children: React.ReactNode;
    handleClose:()=>void;
    open: boolean;
}
export default function BaseModal({children, open, handleClose}:Props) {


  return (
    <div className="">
    {
      open?
        <>
          <div 
            onClick={handleClose}
            className="fixed top-0 bottom-0 right-0 left-0 bg-black/20 z-[2]"
            >
          </div>
          <div className="z-20 flex items-center pt-10 justify-center absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-fit h-fit rounded-md shadow-md p-4 bg-white z-20">
                {children}
            </div>
          </div>
        </>

      :null
    }
    </div>
  );
}
