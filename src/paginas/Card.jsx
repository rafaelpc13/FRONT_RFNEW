import * as React from 'react';
import { styled } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { useEffect } from 'react';
import { useState } from 'react'
import { TextField, Button } from '@material-ui/core'
import useProyectos from "../hooks/useProyectos"


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

export default function RecipeReviewCard({ numer }) {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

//console.log(tarea)
  const { numero, _id, usuario, valor, celular, estado } = numer
  const { handleEditarTira } = useProyectos()
  const { handlemodal } = useProyectos()
//console.log(numer)
  const todos = (numer) => {
    //console.log("hola")
    handlemodal()
    handleEditarTira(numer)

  }

  var today = new Date();
  var month = today.getMonth() + 1;
        if (month < 10) {
            month = '0' + month;
        }
        var date = today.getDate();
        if (date < 10) {
            date = '0' + date;
        }
        var date = today.getFullYear() + '-' + month + '-' + date;

       
  
  return (
    <>

      <Card sx={{ maxWidth: 345 }}
        style={{backgroundColor:'rgb(239 234 229)' /* , borderRadius:'50%',width:'180px',height:'180px' */}} 
      >
        <CardHeader
         style={{ textAlign: 'center' }}
          // title="Shrimp and Chorizo Paella"
          subheader={date}
        />

        <h2
          style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}
        >
          {numero}
        </h2>
        <h3
          style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}
        >{usuario}
        </h3>
        <CardContent>
          {estado === 'true' ?
            <h4 style={{
              marginBottom: '-5px',
              marginTop: "-5px",
              textAlign: 'center',
              background: 'rgb(184 244 149)',
              borderRadius: '10%'
            }}>
              Numero Asignado
            </h4>

            :
            <div style={{ marginBottom: '-5px', marginTop: "-5px", textAlign: 'center' }}>
              <Button
                onClick={() => todos(numer)}
                style={{ background: '#e0840d' }}>
                Escoger
              </Button>
            </div>
          }
        </CardContent>
      </Card>


    </>


  );
}