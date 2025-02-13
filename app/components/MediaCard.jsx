import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Link from 'next/link';


export default function ImgMediaCard({ title, description, image, gitlink, demolink, videolink}) {
  return (
    <Card sx={{ 
        maxWidth: 275,
        display:'flex',
        flexDirection: 'column',
        backgroundColor: '#333'
        }}>
      
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
      />

      <CardContent >
        <Typography gutterBottom variant="h5" component="div" sx={{color:"#ffffff",}}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{color:"#ffffff",}}>
          {description}
        </Typography>
      </CardContent>

      <CardActions sx={{
        justifyContent: 'flex-end',
        marginTop: 'auto',
        }}>
        {gitlink &&(
        <Link href ={gitlink} passHref target="_blank" rel="noopener noreferrer">
          <Button size="small" sx={{color:"#ffffff", '&:hover': { color: '#ffcc00' }, '&:active': { color: '#ffc000' }}}>GitHub</Button>
        </Link>
        )}
        {demolink && (
          <Link href={demolink} passHref target="_blank" rel="noopener noreferrer">
            <Button size="small" sx={{color:"#ffffff", '&:hover': { color: '#ffcc00' }, '&:active': { color: '#ffc000' }}}>Demo</Button>
          </Link>
        )}
      </CardActions>
    </Card>

  );
}