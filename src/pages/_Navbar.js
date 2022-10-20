import { AppBar, Box, Collapse, Divider, Drawer, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import AssignmentIcon from '@mui/icons-material/Assignment';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';

const Navbar = () => {
    const theme = useTheme();
    const [isOpenState, setIsOpenState] = useState();
    const location = useLocation();
    const [mtOpen, setMtOpen] = useState(false);
    
    const handleMtClick = () => {
        setMtOpen(!mtOpen);
    }

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpenState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 320 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <DrawerHeader>
                <IconButton onClick={toggleDrawer(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>

            <List>
                <ListItemButton sx={{ pl: 4 }}  to="/" component={Link} selected={"/" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<HomeOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }} onClick={handleMtClick}>
                    <ListItemIcon>
                        <GroupsOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary="Manajemen Tim" />
                    {mtOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={mtOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        
                        <ListItemButton sx={{ pl: 11 }} to="/partai" component={Link} selected={"/partai" === location.pathname} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Partai" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 11 }} to="/tim" component={Link} selected={"/tim" === location.pathname} onClick={toggleDrawer(false)}>
                            <ListItemText primary="Daftar Tim" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 11 }}>
                            <ListItemText primary="Korkab" />
                            <ExpandMore />
                        </ListItemButton>
                        <Collapse timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemButton sx={{ pl: 14 }} to="/personil" component={Link} selected={"/personil" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Data" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kab" component={Link} selected={"/personil/rekap-kab" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kabupaten" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kec" component={Link} selected={"/personil/rekap-kec" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kecamatan" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-keldesa" component={Link} selected={"/personil/rekap-keldesa" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kel / Desa" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton sx={{ pl: 11 }}>
                            <ListItemText primary="Korcam" />
                            <ExpandMore />
                        </ListItemButton>
                        <Collapse timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemButton sx={{ pl: 14 }} to="/personil" component={Link} selected={"/personil" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Data" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kab" component={Link} selected={"/personil/rekap-kab" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kabupaten" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kec" component={Link} selected={"/personil/rekap-kec" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kecamatan" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-keldesa" component={Link} selected={"/personil/rekap-keldesa" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kel / Desa" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                        <ListItemButton sx={{ pl: 11 }}>
                            <ListItemText primary="Korkel" />
                            <ExpandMore /> 
                        </ListItemButton>
                        <Collapse timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemButton sx={{ pl: 14 }} to="/personil" component={Link} selected={"/personil" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Data" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kab" component={Link} selected={"/personil/rekap-kab" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kabupaten" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-kec" component={Link} selected={"/personil/rekap-kec" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kecamatan" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 14 }} to="/personil/rekap-keldesa" component={Link} selected={"/personil/rekap-keldesa" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemText primary="Rekap Kel / Desa" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <ListItemButton sx={{ pl: 4 }}  to="/data_pemilih" component={Link} selected={"/data_pemilih" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<HowToRegIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Data Pemilih" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}  to="/dtdc" component={Link} selected={"/dtdc" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<MeetingRoomIcon />}
                    </ListItemIcon>
                    <ListItemText primary="DTDC" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}  to="/agenda" component={Link} selected={"/agenda" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<CalendarMonthOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Agenda" />
                </ListItemButton>
                <ListItemButton sx={{ pl: 4 }}  to="/logistik" component={Link} selected={"/logistik" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<LocalShippingOutlinedIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Logistik" />
                </ListItemButton>
                {/* <ListItemButton to="/bnd/acc" component={Link} selected={"/bnd/acc" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<AssignmentTurnedInIcon />}
                    </ListItemIcon>
                    <ListItemText primary="ACC" />
                </ListItemButton>
                <ListItemButton to="/bnd/selesai" component={Link} selected={"/bnd/selesai" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<DoneOutlineIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Selesai" />
                </ListItemButton> */}
            </List>
            <Divider />
            {/* <List>
                {['All mail', 'Trash', 'Spam'].map((text, index) => (
                    <ListItem key={text} disablePadding>
                        <ListItemButton>
                            <ListItemIcon>
                                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                            </ListItemIcon>
                            <ListItemText primary={text} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List> */}
        </Box>
    );

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
        justifyContent: 'flex-end',
    }));

    return (
        <>
            <Box sx={{ flexGrow: 1 }} mb={2} >
                <AppBar position="fixed" >
                    <Toolbar sx={{ background: "#37474f" }}>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            onClick={toggleDrawer(true)}
                        >
                            <MenuIcon />
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            DEMO
                        </Typography>
                        {/* <Box sx={{ flexGrow: 0 }}>
                            <Tooltip title="Open settings">
                                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                                </IconButton>
                            </Tooltip>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={Boolean(anchorElUser)}
                                onClose={handleCloseUserMenu}
                            >
                                {settings.map((setting) => (
                                    <MenuItem key={setting} onClick={handleCloseUserMenu}>
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                                <MenuItem onClick={props.onLogOut}>
                                    <Typography textAlign="center">Logout</Typography>
                                </MenuItem>
                            </Menu>
                        </Box> */}
                    </Toolbar>
                </AppBar>
            </Box>
            <React.Fragment key="left">
                <Drawer
                    anchor={"left"}
                    open={isOpenState}
                    onClose={toggleDrawer(false)}
                >

                    {list(isOpenState)}
                </Drawer>
            </React.Fragment>
        </>
    );
}

export default Navbar