import React from 'react';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalClose from '@mui/joy/ModalClose';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
 import './Podrob.css'
 import '../Scss/modal.css'
interface ChildProps {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
function Podrobbyi({ open, setOpen }: ChildProps) {
  return (
    <>
       <Modal
        aria-labelledby="modal-title"
        aria-describedby="modal-desc"
        open={open}
        sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}
      >
        <Sheet
          variant="outlined"
          sx={{
            maxWidth: 500,
            borderRadius: 'md',
            p: 3,
            boxShadow: 'lg',
          }}
        >
          <ModalClose
            variant="outlined"
            sx={{
              top: 'calc(-1/4 * var(--IconButton-size))',
              right: 'calc(-1/4 * var(--IconButton-size))',
              boxShadow: '0 2px 12px 0 rgba(0 0 0 / 0.2)',
              borderRadius: '50%',
              bgcolor: 'background.body',
            }}
          />
           <div className="modal modal_product">
    <div className="modal__main mproduct">
      <div className="mproduct__container">
        <h2 className="mproduct__title">Мясная бомба</h2>

        <div className="mproduct__content">
          <img src="https://i.pinimg.com/564x/76/48/5b/76485b9a5fbf5009128abdf316b07df7.jpg" alt="Мясная бомба" className="mproduct__image"/>

          <p className="mproduct__description">Супер мясное наслаждение! Большая рубленая котлета из свежего говяжего мяса покорит вас своей сочностью, а хрустящие листья салата добавят свежести.</p>

          <div className="mproduct__ingredients ingredients">
            <h3 className="ingredients__title">Состав:</h3>

            <ul className="ingredients__list">
              <li className="ingredients__item">Пшеничная булочка</li>
              <li className="ingredients__item">Котлета из говядины</li>
              <li className="ingredients__item">Красный лук</li>
              <li className="ingredients__item">Листья салата</li>
              <li className="ingredients__item">Соус сорчичный</li>
            </ul>

            <p className="ingredients__calories">520г, ккал 430</p>
          </div>

        </div>
        <div className="mproduct__footer">
          <div className="mproduct__add">
            <button className="mproduct__btn">Добавить</button>

            <div className="mproduct__count count">
              <button className="count__minus__and__plus">-</button>
              <p className="count__amount">1</p>
              <button className="count__minus__and__plus">+</button>
            </div>
          </div>

          <p className="mproduct__price">239
            <span className="currency">₽</span>
          </p>
        </div>

      </div>

      <button className="modal__close" 
        onClick={() => setOpen(false)}
        >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
          <rect x="5.07422" y="5.28247" width="1" height="20" transform="rotate(-45 5.07422 5.28247)" />
          <rect x="5.78125" y="19.4246" width="1" height="20" transform="rotate(-135 5.78125 19.4246)" />
        </svg>
      </button>
    </div>
  </div>
        </Sheet>
      </Modal>
    </>
  );
}

export default Podrobbyi;