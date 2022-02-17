import './Header.css';
import { Button, MenuItem, Select, IconButton, colors } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

import flag1 from './Img/as.svg';
import flag2 from './Img/ae.svg';
import flag3 from './Img/af.svg';
import flag4 from './Img/ag.svg';
import logo from './Img/Artboard 4@2x@2x.jpg';

import { makeStyles } from '@mui/styles';

//for submit button styles
const useStyle = makeStyles({
    btns: {
        border: '1px solid blue',
        padding: '10px',
        height: '50px',
        color:'blue'
    },
    flags: {
        height: '50px'
    }
})

const Header = () => {
    const [country, setCountry] = useState();
    const classes = useStyle();

    return <>
        <div className="containers">

            <div className="left-items">
                <img src={logo} alt="ungrammary" className='logo' />
            </div>

            <div className="middle-items">
                <Button variant='string'>Abount Us</Button>
                <Button variant='string'>Solution</Button>
                <Button variant='string'>Global Network</Button>
            </div>

            <div className="right-items">
                <Button variant='outlined' className={classes.btns}>Contact us</Button>

                <Select defaultValue="Albania" className={classes.flags} onChange={(e) => setCountry(e.target.value)} >
                    <MenuItem value="Albania">
                        <img src={flag1} alt='Albania' className='flag' />
                    </MenuItem>

                    <MenuItem value="United Arab Emirates">
                        <img src={flag2} alt='United Arab Emirates' className='flag' />
                    </MenuItem>

                    <MenuItem value="Afghanistan">
                        <img src={flag3} alt='Afghanistan' className='flag' />
                    </MenuItem>

                    <MenuItem value="Antigua and Barbuda">
                        <img src={flag4} alt='Antigua and Barbuda' className='flag' />
                    </MenuItem>
                </Select>
            </div>


            <div className='menu'>
                <IconButton  >
                    <MenuIcon />
                </IconButton>
            </div>
        </div>
    </>
}

export default Header;