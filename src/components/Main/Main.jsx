import { TextField, TextareaAutosize, Typography, Button, FormControl } from '@mui/material';
import { useState } from 'react';
import './main.css';
import Banner from './Group 1822.png';
import ReactFlagsSelect from 'react-flags-select';
import validator from 'validator';

const Main = () => {
    const [selected, setSelected] = useState('IN')

    //phone number validation
    const [phoneNumber, setPhoneNumber] = useState("");
    const [errorPhone, setErrorPhone] = useState(false);

    const phoneNumberCheck = (e) => {
        let x = e.which || e.keycode;
        if (x >= 48 && x <= 57) {
            setPhoneNumber(e.target.value);
            setErrorPhone(false);
        } else {
            setErrorPhone(true);
        }
    }



    //name input box checking and give alert
    const [name, setName] = useState("");
    const [errorName, setErrorName] = useState(false);
    
    const NameCheck = (e) => {
        let x = e.which || e.keycode;
        if ((x >= 65 && x <= 90) || (x >= 97 && x <= 122) || x === 32) {
            setErrorName(false);
            setName(e.target.value);
        } else {
            setErrorName(true);
        }
    }


    //Email input box checking and give alert
    const [emailError, setEmailError] = useState(false)
    const validateEmail = (e) => {
      var email = e.target.value
    
      if (validator.isEmail(email)) {
        setEmailError(false)
      } else {
        setEmailError(true)
      }
    }

    return (
        <>
            <div className="container">
                <div className="img-div">
                    <img src={Banner} alt='banner' />
                </div>

                <div className="form-container">
                    <div className="form-title">
                        <Typography variant='h4' style={{ marginBottom: "5%", fontWeight: '700' }}>Hi, let's get in touch.</Typography>
                    </div>
                    <form>

                        <TextField fullWidth label='Phone no' variant="outlined" name='phone' onKeyPress={(e) => phoneNumberCheck(e)} />
                        <div className={errorPhone ? ("text-danger") : ("d-none")}>Alphabets or Special Charecters are not allowed</div>

                        <FormControl>
                            <ReactFlagsSelect
                                style={{ padding: '20px', margin: '10px' }}
                                selected={selected}
                                onSelect={code => {
                                    setSelected(code)
                                }}
                            />
                        </FormControl>
                    
                    
                        <TextField fullWidth label='Enter Name' variant="outlined" name='fullName' onKeyPress={(e) => NameCheck(e)} />
                        <div className={errorName ? ("text-danger") : ("d-none")}>Special Charecters or Number are not allowed</div>
                        
                        
                        <TextField fullWidth label='Email Address' variant="outlined" name='email' onChange={(e) => validateEmail(e)} />
                        <div className={emailError ? ("text-danger") : ("d-none")}>Email should be valid formate or Special Charector Not Allowed</div>
                        
                        
                        <TextareaAutosize
                            className='messageBox'
                            minRows={7}
                            variant="outlined"
                            aria-label="maximum height"
                            placeholder="Message"
                            name="msg"
                        />
                    </form>
                    
                    <Button variant='contained'>Submit</Button>
                </div>
            </div>
        </>
    )
}

export default Main;