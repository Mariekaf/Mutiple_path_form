import { useEffect } from 'react';

const Cards = ({ img, title, price, handleClick, style, toggle, id, icon, h3_class, h2_class, month,label, onPriceChange ,label_name }) => {


     useEffect(() => {
            if (onPriceChange) {
              onPriceChange(id, price); 
            }
          }, [price]);
    return (

        <div className='cards' onClick={() => handleClick(id)} style={style}>

            <div className='image' >

                <img src={img} alt="" />
            </div>
            <div className='card_description'>
                <h2 className={h2_class}>{title}</h2>
                <h3 className={h3_class}>${price} {toggle?"/mo":"/yr" }</h3>
                {toggle === false && (<p className={month}>2 months free</p>)}
                <span className={label_name}>{label}</span>
                
            </div>
            {icon}

        </div>
    );
};

export default Cards;