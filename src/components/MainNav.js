"use client";
import * as React from "react";
import Image from "../assets/logo.svg";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  AppBar,
  Drawer,
  IconButton,
  List,
  ListItemIcon,
  ListItemText,
  ListItem,
  Toolbar,
  useMediaQuery,
  Grid,
  Box
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


const MainNav = ({ navMenu,address}) => {
  const theme = useTheme()
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
    <Container
      maxWidth='100%'
      sx={{ backgroundColor: "white.main", padding: '10px' }}
    >
      <Toolbar sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
        <IconButton edge='start' aria-label='menu' onClick={toggleDrawer}>
          <MenuIcon sx={{color:"secondary.main"}} />
        </IconButton>
        <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
          <img src={Image} width={150} />
        </Typography>
      </Toolbar>

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
         
          <List sx={{ display: 'flex', flexDirection: 'row-reverse' }}>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-end',
                padding: ' 30px'
              }}
            >
              <IconButton onClick={toggleDrawer}>
                <CloseIcon sx={{ fontSize: { md: '25px', sm: '40px' } ,color:"secondary.main"}} />
              </IconButton>
            </ListItem>
            <ListItem
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                padding: '10px 30px'
              }}
            >
              <Typography variant='h6' component='div'>
                <img src={Image} width={150} />
              </Typography>

              {navMenu.map((item, index) => (
                <Box key={index}>
                  <ListItemText
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      paddingLeft: '18px'
                    }}
                  >
                    <ListItemIcon sx={{ display: 'flex' }}>
                      {index === 2 ? (
                        <Accordion
                          sx={{
                            boxShadow: '0px 0px 0px 0px',
                            translate: '-15px'
                          }}
                        >
                          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                            <Typography sx={{ fontWeight: 'bold' }}>
                              {item}
                            </Typography>
                          </AccordionSummary>
                          <AccordionDetails sx={{color:"secondary.light"}}>
                            <Typography>Limousine</Typography>
                            <Typography>Passenger transport</Typography>
                            <Typography>Tour by luxury bus</Typography>
                            <Typography>School bus</Typography>
                          </AccordionDetails>
                        </Accordion>
                      ) : (
                        <Typography
                          sx={{ color: 'secondary.main', fontWeight: 'bold' }}
                        >
                          {item}
                        </Typography>
                      )}
                    </ListItemIcon>
                  </ListItemText>
                </Box>
              ))}
            </ListItem>
          </List>
                
          <List
            sx={{ display: 'flex', flexDirection: 'column', padding: '42px' }}
          >
            {address.map((item, index) => {
              return (
                <>
                  <ListItemIcon sx={{ color: "primary.dark" }}>
                    {index === 0 && <LocationOnIcon sx={{ padding: '3px' }} />}
                    {index === 1 && <LocationOnIcon sx={{ padding: '3px' }} />}
                    {index === 2 && <SmartphoneIcon sx={{ padding: '3px' }} />}
                    {index === 3 && <LocalPhoneIcon sx={{ padding: '3px' }} />}
                    {index === 4 && <MailIcon sx={{ padding: '3px' }} />}

                    <ListItemText
                      sx={{
                        color:"primary.dark"
                      }}
                    >
                      {item}
                    </ListItemText>
                  </ListItemIcon>
                </>
              )
            })}
          </List>
        </Drawer>
      </React.Fragment>
    </Container>
  )

  const desktop = (
    <Container maxWidth='100%' sx={{ backgroundColor: "primary.dark"}}>
      <Toolbar sx={{ display: 'flex',justifyContent:"right"}}>
        {navMenu.map((page, index) => (
          <div key={index}>
            {index === 2 ? (
              <div>
                <Button
                  aria-controls='dropdown-menu'
                  aria-haspopup='true'
                  onClick={handleClick}
                  sx={{ color: "white.main", fontWeight: 'bold' }}
                >
                  {page}
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
                  sx={{ translate: '-70px' }}
                >
                  <Box sx={{ width: '200px' }}>
                    <MenuItem>Limousine</MenuItem>
                    <MenuItem>Passenger transport</MenuItem>
                    <MenuItem>Tour by luxury bus</MenuItem>
                    <MenuItem>School bus</MenuItem>
                  </Box>
                </Menu>
              </div>
            ) : (
              <Typography
                key={page}
                sx={{
                  margin: '.6rem',
                  color: 'white',
                  fontWeight: 'bold',
                  fontSize: '.9rem',

                }}
              >
                {page}
              </Typography>
            )}
          </div>
        ))}
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
