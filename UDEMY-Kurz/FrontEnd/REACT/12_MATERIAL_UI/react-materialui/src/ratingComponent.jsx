import { useState } from 'react';
import Rating from '@mui/material/Rating';

export default function RatingFunc() {
    const [hodnoceni, setHodnoceni] = useState(3);

  return(
      <div>
        <h2>komponent pro hodnocení</h2>
        <Rating
            name="simple-controlled"
            value={hodnoceni}
            onChange={(event, newValue) => {
            setHodnoceni(newValue);
            }}
        />
        <p>Hodnocení: {hodnoceni}</p>
      </div>
      
    );
}