import React from 'react';
import {Link} from "react-router-dom";
import IconButton from '@material-ui/core/IconButton';
import Grid from '@material-ui/core/Grid';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {MuiThemeProvider, createMuiTheme} from '@material-ui/core/styles';
import grey from '@material-ui/core/colors/grey';


const ITEM_HEIGHT = 48;

const theme = createMuiTheme({
  palette: {
    primary: grey,
    secondary: {
      main: '#DCDCDC',
    },
  },
});

class MenuButton extends React.Component {
  state = {
    anchorEl: null,
  };

  handleClick = event => {
    this.setState({anchorEl: event.currentTarget});
  };

  handleClose = () => {
    this.setState({anchorEl: null});
  };

  render() {
    const {anchorEl} = this.state;
    const open = Boolean(anchorEl);

    return (
      <Grid container>
        <MuiThemeProvider theme={theme}>
          <IconButton
            aria-label="More"
            aria-owns={open ? 'long-menu' : null}
            aria-haspopup="true"
            onClick={this.handleClick}
            color="primary"
          >
            <MenuIcon/>
          </IconButton>
        </MuiThemeProvider>
        <Menu
          id="long-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={this.handleClose}
          PaperProps={{
            style: {
              maxHeight: ITEM_HEIGHT * 4.5,
              width: 200,
            },
          }}
        >
          <Link to="/about" style={{textDecoration: 'none', display: 'block'}}>
            <MenuItem>
              about
            </MenuItem>
          </Link>
          <Link to="/topics" style={{textDecoration: 'none', display: 'block'}}>
            <MenuItem>
              topics
            </MenuItem>
          </Link>
        </Menu>
      </Grid>
    );
  }
}

export default MenuButton;
