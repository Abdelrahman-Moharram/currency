import React from 'react'
import BaseModal from './BaseModal'
import Button from '../Common/Button';

interface Props{
    open: boolean
    handleClose:()=>void;
    children: React.ReactNode;
    addAction: ()=>void;
    isLoading:boolean
}

const AddModal = ({open, handleClose, children, addAction, isLoading}:Props) => {
  return (
    <div>
        <BaseModal 
            open={open} 
            handleClose={handleClose}
        >
            {children}

            <div className="flex justify-end">
                <Button
                    title='Create'
                    isLoading={isLoading}
                    onClick={addAction}
                /> 
            </div>
        </BaseModal>
    </div>
  )
}

export default AddModal
