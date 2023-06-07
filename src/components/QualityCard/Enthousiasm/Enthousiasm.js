import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import photOrg from './enthousiasme.jpg'
import { createTheme, ThemeProvider } from '@mui/material';

const Kanit = createTheme({
  typography: {
    fontFamily: [
      'Kanit',
      'sans-serif',
    ].join(','),
  },
});

export default function Enthousiamse() {
  return (
    <ThemeProvider theme={Kanit}>
      <Card className='floating' sx={{ maxWidth: 210, maxHeight: 360, borderRadius: 3 }}>
        <CardMedia
          component="img"
          alt="creative vector"
          height="50%"
          image={photOrg}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div" marginBottom={1} lineHeight={1} fontWeight={700}>
            Solutionniste
          </Typography>
          <Typography variant="caption" color="text.secondary" fontSize={10.5} fontWeight={500} letterSpacing={0} lineHeight={1}>
            Je résous les problèmes de code avec autant de détermination que Batman pourchasse les méchants, prêt à sauver le jour avec mes compétences de développement !
          </Typography>
        </CardContent>
      </Card>
    </ThemeProvider>

  );
}