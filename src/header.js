import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';

const pages = ['Home','Shop','Products', 'Pricing', 'Blog', 'Contact'];
const settings = ['Cart Items', 'Previous Orders'];

export default function Header(){
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="data:image/png;base64,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" />
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
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

