import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import photo from './organise.jpg'


export default function ImgMediaCard() {
  return (
    <Card sx={{ maxWidth: 210, maxHeight: 310 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={photo}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div" marginBottom={1} lineHeight={1}>
          Créatif
        </Typography>
        <Typography variant="overline" color="text.secondary" fontSize={9} fontWeight={600} letterSpacing={0} lineHeight={1}>
        Nous sommes des créatures uniques, capables de jongler avec les pixels tout en gardant les pieds sur terre. Alors, continuons à coder avec passion.
        </Typography>
      </CardContent>      
    </Card>
  );
}