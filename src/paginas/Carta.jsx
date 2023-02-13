import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { TextField, Button } from '@material-ui/core'

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}
        style={{backgroundColor:'rgb(239 234 229)' /* , borderRadius:'50%',width:'180px',height:'180px' */}} 
      >
        <CardHeader
         style={{ textAlign: 'center' }}
          // title="Shrimp and Chorizo Paella"
          subheader='2022/01/18'
        />

        <h2
          style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}
        >
         10
        </h2>
        <h3
          style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}
        >RAFAEL PAUTT
        </h3>
        <CardContent>
        {/*   {estado === 'true' ?
            <h4 style={{
              marginBottom: '-5px',
              marginTop: "-5px",
              textAlign: 'center',
              background: 'rgb(184 244 149)',
              borderRadius: '10%'
            }}>
              Numero Asignado
            </h4>

            : */}
            <div style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}>
              <Button
                //onClick={() => todos(numer)}
                style={{ background: '#e0840d' }}>
                Escoger
              </Button>
            </div>
          
        </CardContent>
      </Card>
  );
}
