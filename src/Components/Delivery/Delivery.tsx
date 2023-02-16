import React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import FormHelperText from '@mui/joy/FormHelperText';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';


import './Delivery.css'
interface ChildProps {
  open: boolean;
  phoneNumber: number;
  YesOrNo:boolean;
  inputValue:number;
  otp:string;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

function Delivery({ open, setOpen }: ChildProps) {
  // const [ phoneNumber , setPhoneNumber ] = React.useState(+996);
  const [ YesOrNo , setYesOrNo ] = React.useState(false);
  const [ I , setI ] = React.useState(null);
  const [phone, setPhone] = React.useState('+996');
  const [inputValue, setInputValue] = React.useState(+996);

  
  return (
    <>

     <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
       <div className="modal modal_delivery">
        <div className="modal__main mdelivery">
          <div className="mdelivery__container">
           <h2 className="mdelivery__title">
            Доставка
           </h2>

              <form className="mdelivery__form" id="delivery">
                <div className="mdelivery__fieldset">
                  <input className="mdelivery__input" type="text" name="name" placeholder="Ваше имя"/>
                  <div className='mdelivery__flex_phone__numbers'>
                  <input className="mdelivery__input"
                    type="tl" name="phone"
                    placeholder="Телефон" 
                    value={phone} 
                    onChange={(e) => handleInput(e)} value={inputValue}/>
                    <div className='mdelivery__image_phone' >
                      <img className='mdelivery__image_phone__numbers' src='https://yt3.googleusercontent.com/ytc/AL5GRJWveMxT-E9mwNZeDjiBRRK_lEqd7yvC9pUhMxTjRQ=s900-c-k-c0x00ffffff-no-rj'/>
                    </div>
                  </div>
                </div>
                <div className="mdelivery__fieldset mdelivery__fieldset_radio">
                <RadioGroup defaultValue="female" name="radio-buttons-group" sx={{ my: 1 }}>
                      <Radio
                        value="female"
                        label=" Доставка"
                        onClick={() => setYesOrNo(false)}
                      />
                        <Radio value="male"
                        label="Самовывоз"
                        onClick={() => setYesOrNo(true)}
                        />
                </RadioGroup>
                </div>
                <div className="mdelivery__fieldset"  
                style={{display: (YesOrNo === false) ? 'block' : 'none',}}
                >
                  <input className="mdelivery__input" type="text" name="address" placeholder="Улица, дом, квартира"/>
                  <input className="mdelivery__input mdelivery__input_half" type="number" name="floor" placeholder="Этаж"/>
                  <input className="mdelivery__input mdelivery__input_half" type="number" name="intercom" placeholder="Домофон"/>
                  <input data-testid="checkout-form__phone-input" type="tel" placeholder="+996 999-999999"  id="phn-input" className="input" data-error="false" data-validation="false" data-clear="false" value="+996" />
                  <div className="mt9wcn-0 bhAylw sc-1iwyb4i-1 gbKdGX" data-error="false" data-testid="login-popup__code-input"  type="number">
                     <div>
                      <input type="tel" pattern="[0-9]*" data-id="0" className="sc-1iwyb4i-1 gbKdGX-0" value=""/>
                      <input type="tel" pattern="[0-9]*" data-id="1" className="sc-1iwyb4i-1 gbKdGX-1" value=""/>
                      <input type="tel" pattern="[0-9]*" data-id="2" className="sc-1iwyb4i-1 gbKdGX-2" value=""/>
                      <input type="tel" pattern="[0-9]*" data-id="3" className="sc-1iwyb4i-1 gbKdGX-3" value=""/>
                     </div>
                 </div>
                </div>
              </form>
              <button 
                onClick={() => setOpen(false)}
                className="mdelivery__submit" 
                type="submit"
                form="delivery"
                >
                  Оформить
              </button>
             
          </div>
              <button 
                onClick={() => setOpen(false)}
                className="modal__close"
                type="button" 
                >
               <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
                <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
               </svg>
              </button>
        </div>
      </div>
     


      
      </Modal>
    </>
  );
}

export default Delivery;