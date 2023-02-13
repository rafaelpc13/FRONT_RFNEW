import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useEffect } from 'react';

export default function ButtonAppBar() {

    const logo = require('./image.png'); // with require

/*     useEffect(() => {
        const inter = setInterval(() => {
          var randomColor = Math.floor(Math.random()*16777215).toString(16);
          document.getElementById("subtitle").style.color = "#" + randomColor;
         
        }, 500);
       // return () => clearInterval(interval);
      }, []); */

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>

                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        <div style={{ display: 'flex', gap: '2rem',alignItems:'center' }}>
                            <img width={50} height={50} src={logo} />
                            <p style={{ fontWeight: 'bold', fontSize: '22px' }}> SUPER RIFAS</p>
                            <p id="subtitle">donde ganas mas </p>
                        </div>

                    </Typography>
                    {/* <Button color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </Box>
    );
}