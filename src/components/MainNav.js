'use client'
import * as React from 'react'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import Image from "../assets/logo.svg";
import {
  AppBar,
  Drawer,
  IconButton,
  ListItemIcon,
  ListItemText,
  ListItem,
  Toolbar,
  useMediaQuery,
  Grid,
  Box,
} from '@mui/material'
import { Button, Menu, MenuItem } from '@mui/material'
import { useState } from 'react'
import { useTheme } from '@mui/material/styles'
import MenuIcon from '@mui/icons-material/Menu'
import CloseIcon from '@mui/icons-material/Close'
import LocationOnIcon from '@mui/icons-material/LocationOn'
import SmartphoneIcon from '@mui/icons-material/Smartphone'
import LocalPhoneIcon from '@mui/icons-material/LocalPhone'
import MailIcon from '@mui/icons-material/Mail'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import styled from '@emotion/styled';

const MainNav = ({navItems,address}) => {
  const theme = useTheme()
  const navigate = useNavigate()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [openDrawer, setOpenDrawer] = useState(false)
  const [anchorEl, setAnchorEl] = useState('')
  const toggleDrawer = () => {
    setOpenDrawer(!openDrawer)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }
  const handleClick = event => {
    setAnchorEl(event.currentTarget)
  }
  
  const mobile = (
    <Container maxWidth='100%' sx={{ backgroundColor: 'white.main' }}>
      <Toolbar>
        <Grid
          container
          direction='row'
          justifyContent='space-between'
          alignItems='center'
          
        > 
          <Grid item >
            <Typography>
              <img src={Image} alt="logo" width={150} />
            </Typography>
          </Grid>
          <Grid item >
            <IconButton edge='start' aria-label='menu' onClick={toggleDrawer}>
              <MenuIcon />
            </IconButton>
          </Grid>
        </Grid>

        <React.Fragment>
          <Drawer
            anchor='top'
            open={openDrawer}
            onClose={toggleDrawer}
            sx={{
              '& .MuiDrawer-paper': {
                height: 1500
              }
            }}
          >
            <Grid container>
              <Grid
                container
                direction='row'
                justifyContent='space-between'
                alignItems='center'
                padding={2}
              >
                <Grid item>
                  <Typography>
                    <img src={Image} alt="logo" width={150} />
                  </Typography>
                </Grid>
                <Grid item>
                <IconButton onClick={toggleDrawer}>
                <CloseIcon  />
              </IconButton>
                </Grid>
              </Grid>
              <Grid container  spacing={1} >
                {navItems.map((item, index) => (
                  <Grid item key={index} xs={12}>
                    <ListItem >
                        <ListItemIcon>
                      {index === 2 ? (
                        <Accordion
                          sx={{
                            boxShadow: '0px 0px 0px 0px',
                            translate: '-15px'
                          }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                          {item.label}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails>
                             <Typography><Link to="/limousine-service"  style={{ textDecoration: 'none',color:"black" }}  >Limousine</Link></Typography>
                            <Typography><Link to="/passenger-transportation"  style={{ textDecoration: 'none',color:"black" }}>Passenger transport</Link></Typography>
                            <Typography><Link to="/tour-by-luxury-bus"  style={{ textDecoration: 'none',color:"black" }}>Tour by luxury bus</Link></Typography>
                            <Typography><Link to="/school-transportation"  style={{ textDecoration: 'none',color:"black" }}>School bus</Link></Typography>
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <Typography
                          sx={{ color: 'secondary.light', fontWeight: 'bold' }}
                          disablePadding
                          onClick={() => navigate(item.url)}
                        >
                          {item.label}
                        </Typography>
                      )}
                      </ListItemIcon>
                    </ListItem>
                   
                  </Grid>
                ))}
              </Grid>
            </Grid>

            <Grid item xs={12}>
             
                {address.map((item, index) => (
                  
                    <ListItem sx={{ color: '#A81D34',padding:"1rem 2rem" }}>
                    {index === 0 && <LocationOnIcon  />}
                    {index === 1 && <LocationOnIcon  />}
                    {index === 2 && <SmartphoneIcon  />}
                    {index === 3 && <LocalPhoneIcon  />}
                    {index === 4 && <MailIcon />}

                    <ListItemText
                      sx={{
                        color: '#A81D34'
                      }}
                    >
                      {item}
                    </ListItemText>
                  </ListItem>
                  
                ))}
                
              
            </Grid>
          </Drawer>
        </React.Fragment>
      </Toolbar>
    </Container>
  )

  const desktop = (
    <Container maxWidth='100%' sx={{ backgroundColor: "primary.dark" }}>
      <Toolbar>
            <Grid container justifyContent="flex-end">
              {navItems.map((item, index) => (
                <Grid item  key={index} >
                    {index === 2 ? (
                      <div>
                        <Button
                          aria-controls='dropdown-menu'
                          aria-haspopup='true'
                          onClick={handleClick}
                          sx={{
                            color: '#ffffff',
                            fontSize: '.9rem',
                            fontWeight: 'bold',
                            marginTop: '2px'
                          }}
                         
                        >
                          {item.label}
                        </Button>
                        <Menu
                          id='dropdown-menu'
                          anchorEl={anchorEl}
                          open={Boolean(anchorEl)}
                          onClose={handleClose}
                          anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'center'
                          }}
                          transformOrigin={{
                            vertical: 'top',
                            horizontal: 'center'
                          }}
                        >
                          <Box sx={{ width: '200px' }}>
                          <Link to={"/limousine-service"}  style={{ textDecoration: 'none',color:"black" }} ><MenuItem>Limousine</MenuItem></Link>
                          <Link to={"/passenger-transportation" } style={{ textDecoration: 'none',color:"black" }}>  <MenuItem>Passenger transport</MenuItem></Link>
                          <Link to={"/tour-by-luxury-bus"}  style={{ textDecoration: 'none',color:"black" }}> <MenuItem>Tour by luxury bus</MenuItem></Link>
                          <Link to={"/school-transportation"}  style={{ textDecoration: 'none',color:"black" }}> <MenuItem>School bus</MenuItem></Link>
                          </Box>
                        </Menu>
                      </div>
                    ) : (
                      <Typography
                        key={index}
                        sx={{
                          margin: '.6rem',
                          color: 'white',
                          fontWeight: 'bold',
                          fontSize: '.9rem'
                        }}
                       
                        disablePadding
                        onClick={() => navigate(item.url)}
                      >
                        {item.label}
                      </Typography>
                    )}
                </Grid>
              ))}
            </Grid>
      </Toolbar>
    </Container>
  )
  return (
    <AppBar position='static'>
      {isMobile ? mobile : desktop}

    </AppBar>
  )
}

export default MainNav