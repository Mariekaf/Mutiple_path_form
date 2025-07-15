import { useEffect } from 'react';

const Sum = ({ title, price, toggle,onPriceChange ,id }) => {
    
    useEffect(() => {
        if (onPriceChange) {
          onPriceChange(id, price);
        }
      }, [price]);
    return (
        <div>
            <div>
            <div className="part2">
                <h2>{title}</h2>
                <h3>${price} {toggle ? "/mo":"/yr" }</h3>
            </div>
           
        </div>
        </div>
    );
};

export default Sum;