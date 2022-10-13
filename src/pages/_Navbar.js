import { AppBar, Box, Divider, Drawer, FormControlLabel, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, styled, Toolbar, Tooltip, Typography, useTheme } from '@mui/material';
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import HomeIcon from '@mui/icons-material/Home';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';

const Navbar = () => {
    const theme = useTheme();
    const [isOpenState, setIsOpenState] = useState();
    const location = useLocation();
    

    const toggleDrawer = (open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsOpenState(open);
    };

    const list = (anchor) => (
        <Box
            sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
            role="presentation"
            onKeyDown={toggleDrawer(false)}
        >
            <DrawerHeader>
                <IconButton onClick={toggleDrawer(false)}>
                    {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                </IconButton>
            </DrawerHeader>

            <List>
                <ListItemButton to="/bnd" component={Link} selected={"/bnd" === location.pathname} onClick={toggleDrawer(false)}>
                    <ListItemIcon>
                        {<HomeIcon />}
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                </ListItemButton>
                {/* <ListItemButton onClick={handlePencairanClick}>
                    <ListItemIcon>
                        <AssignmentIcon />
                    </ListItemIcon>
                    <ListItemText primary="Pencairan" />
                    {pencairanOpen ? <ExpandLess /> : <ExpandMore />}
                </ListItemButton>
                <Collapse in={pencairanOpen} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding>
                        <ListItemButton sx={{ pl: 4 }} to="/bnd/spm" component={Link} selected={"/bnd/spm" === location.pathname} onClick={toggleDrawer(false)}>
                            <ListItemIcon>
                                <ArticleOutlined />
                            </ListItemIcon>
                            <ListItemText primary="UP / TU / GU" />
                        </ListItemButton>
                        <ListItemButton sx={{ pl: 4 }} onClick={handleLsClick}>
                            <ListItemIcon>
                                <ArticleIcon />
                            </ListItemIcon>
                            <ListItemText primary="LS" />
                            {lsOpen ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={lsOpen} timeout="auto" unmountOnExit>
                            <List component="div">
                                <ListItemButton sx={{ pl: 8 }} to="/bnd/ls_gaji" component={Link} selected={"/bnd/ls_gaji" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemIcon>
                                        <ArticleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Gaji" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} to="/bnd/ls_bj" component={Link} selected={"/bnd/ls_bj" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemIcon>
                                        <ArticleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Barang / Jasa" />
                                </ListItemButton>
                                <ListItemButton sx={{ pl: 8 }} to="/bnd/ls_modal" component={Link} selected={"/bnd/ls_modal" === location.pathname} onClick={toggleDrawer(false)}>
                                    <ListItemIcon>
                                        <ArticleOutlined />
                                    </ListItemIcon>
                                    <ListItemText primary="Belanja Modal" />
                                </ListItemButton>
                            </List>
                        </Collapse>
                    </List>
                </Collapse>
                <ListItemButton to="/bnd/acc" component={Link} selected={"/bnd/acc" === location.pathname} onClick={toggleDrawer(false)}>
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
            <List>
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
            </List>
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
                    <Toolbar sx={{ background: theme.palette.breadcrumbsBg }}>
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
                            VERDONE
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