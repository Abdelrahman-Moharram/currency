import Rating from '@mui/material/Rating';

export default function BasicRating({rate}:{rate:number}) {

  return (
      <Rating name="read-only" value={rate} readOnly />
  );
}