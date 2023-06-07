import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import photOrg from './curieux.jpg'
import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

const Kanit = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

export default function Curious() {
  return (
    <ThemeProvider theme={Kanit}>
      <Card className='floating' sx={{ maxWidth: 210, maxHeight: 360, borderRadius: 3, color: red }}>
        <CardMedia
          component="img"
          alt="creative vector"
          height="50%"
          image={photOrg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" marginBottom={1} lineHeight={1} fontWeight={700}>
            Curieux
          </Typography>
          <Typography variant="caption" color="text.secondary" fontSize={10.5} fontWeight={500} letterSpacing={0} lineHeight={1}>
          En tant que développeur web curieux, je clique plus souvent sur "Inspecter l'élément" que sur "Ajouter au panier" lors d'un shopping en ligne !
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>
  );
}