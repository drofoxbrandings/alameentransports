'use client'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from "../assets/logo.svg";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  useMediaQuery,
  Grid,
  Box
} from '@mui/material'
import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react';
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import ArrowDropDownSharpIcon from '@mui/icons-material/ArrowDropDownSharp'
import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp'

const pages = ['HOME', 'ABOUT US', 'COMPANY', 'CONTACT US']
const address = [
  'Abu Dhabi,UAE',
  'Dubai,UAE',
  ' +971 50 505 8724',
  '+971 2 555 0509',
  ' info@alameenlimousine.com'
]

const MainNav = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState('')
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }
  const handleOpen = event => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const mobile = (
    
    <Container maxWidth='100%' sx={{backgroundColor:'#ffffff'}}>
        <Toolbar>
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontWeight: 540,
              fontSize: '.9rem'
            }}
          >
            <Grid item xs={12} md={6} sx={{ img: { width: '100px' } }}>
              <Box sx={{ position: 'absolute', left: '10px', top: '-33px' }}>
              <img width={400} height={120} src={Image} alt="logo" />
              </Box>
            </Grid>
          </Typography>
          <React.Fragment>
            <Drawer anchor='top' open={openDrawer} onClose={toggleDrawer}>
              <List>
                {/* <ListItemButton> */}
                  <ListItemIcon
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      marginLeft: '15px',
                      marginTop: '100px'
                    }}
                  >
                    <Box sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
                      <IconButton
                        sx={{
                          position: 'absolute',
                          right: '28px',
                          top: '15px'
                        }}
                        onClick={toggleDrawer}
                      >
                        <CloseIcon />
                      </IconButton>
                      <ListItemText
                        sx={{
                          position: 'absolute',
                          left: '25px',
                          top: '-33px'
                        }}
                      >
                        <Image width={100} height={120} src="/logo.svg" alt="hello" />
                      </ListItemText>
                    </Box>

                    {pages.map((item, index) => (
                      <ListItemIcon
                        sx={{ display: 'flex', flexDirection: 'row-reverse' }}
                      >
                        {index === 2 &&
                          (anchorEl ? (
                            <ArrowDropUpSharpIcon onClick={handleClose} />
                          ) : (
                            <ArrowDropDownSharpIcon
                              aria-controls='simple-menu'
                              aria-haspopup='true'
                              onClick={handleOpen}
                              variant='outlined'
                            />
                          ))}
                        <Menu
                          id='simple-menu'
                          anchorEl={anchorEl}
                          keepMounted
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          sx={{ marginTop: '200px', border: 'none' }}
                        >
                          <MenuItem>Limousine</MenuItem>
                          <MenuItem>Passenger transport</MenuItem>
                          <MenuItem>Tour by luxury bus</MenuItem>
                          <MenuItem>School bus</MenuItem>
                        </Menu>
                        <ListItemText sx={{ color: '#1c1c1c' }}>
                          {item}
                        </ListItemText>
                      </ListItemIcon>
                    ))}
                    <ListItemIcon
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        marginLeft: '5px',
                        marginTop: '150px'
                      }}
                    >
                      {address.map(item => (
                        <ListItemText
                          sx={{
                            color: '#A81D34'
                          }}
                        >
                          {item}
                        </ListItemText>
                      ))}
                    </ListItemIcon>
                  </ListItemIcon>
                {/* </ListItemButton> */}
              </List>
            </Drawer>
            <IconButton
              sx={{ position: 'absolute', right: '10px' }}
              onClick={toggleDrawer}
            >
              <MenuIcon />
            </IconButton>
          </React.Fragment>
        </Toolbar>
     
    </Container>
  )

  const desktop = (
    <Container maxWidth='100%' sx={{backgroundColor:'#A81D34'}}>
        <Toolbar >
          <Typography
            variant='h6'
            component='div'
            sx={{
              flexGrow: 1,
              fontWeight: 540,
              fontSize: '.9rem'
            }}
          >
            {/* Associated by Al Ameen Transports */}
          </Typography>

          {pages.map((page, index) => (
           
        
              <Typography
               
                key={page}
                sx={{
                  margin: '.6rem',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '.9rem'
                }}
              > 
                {page}
              </Typography>
            ))}
        </Toolbar>
      </Container>
   
  )
  return (
    
    <AppBar position='static' >
       {isMobile ? mobile : desktop} </AppBar>
    
  )
}

export default MainNav
