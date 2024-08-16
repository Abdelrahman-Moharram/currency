import React, {useState} from 'react'
import Rating from '@mui/material/Rating';

const RatingInput = ({rate}:{rate:number}) => {
    const [value, setValue] = useState<number | null>(rate);  
    
    return (
        <Rating
            name="simple-controlled"
            value={value}
            onChange={(event, newValue) => {
                setValue(newValue);
            }}
        />  
  )
}

export default RatingInput
