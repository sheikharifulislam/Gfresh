import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import {NavLink, useLocation, useNavigate} from 'react-router-dom';
import {Outlet} from 'react-router-dom';
import {FirebaseContext} from '../../context/FirebaseProvider';
import './dashboard.css';
import useLoadUserData from '../../customHooks/loadUserData';


const drawerWidth = 240;

const Dashboard = (props) => {
    const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const {logOut,user} = useContext(FirebaseContext);
  const userData = useLoadUserData(user.email); 
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleLogout = () => {
    logOut(navigate, location);
  }

 

  const drawer = (    
    <div>
      <Toolbar />
      <Divider />      
      <List className="list">        
          <nav id="dashboard-menu">
              <ul>
                    <li>
                        <NavLink to="/home">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="add-product">Add Product</NavLink>
                    </li>               
                    <li>
                        <NavLink to="all-orders">Manage All Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="manage-all-products">Manage All Products</NavLink>
                    </li>
                    <li>
                        <NavLink to="pending-orders">Pending Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="my-all-orders">My All Orders</NavLink>
                    </li>
                    <li>
                        <NavLink to="all-reviews">All Reviews</NavLink>
                    </li> 
                    <li>
                        <NavLink to="all-user">All User</NavLink>
                    </li> 
                    <li>
                        <NavLink to="add-new-admin">Add Admin</NavLink>
                    </li>
                    <li>
                        <NavLink to={`profile?userId=${userData._id}`}>My Profile</NavLink>
                    </li>
                    <li onClick={() => handleLogout(navigate,location)}>Log Out</li>                 
              </ul>
          </nav>       
                 
      </List>      
    </div>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            GFresh DashBoard
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}        
      >
        <Toolbar />
          <Outlet/>                   
      </Box>
    </Box>
  );
}

Dashboard.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Dashboard;