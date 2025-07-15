import React from 'react';
import style from '../assets/components/input.module.scss';

const Input = ({ type, placeholder, value, name, onChange, isempty }) => {
    const className = `${style.mode} ${isempty ? style.inputred : style.input}`;

    return (
        <div className="form-group">
            <label htmlFor={name} style={{position:'absolute',marginTop:'10px',fontSize:'12px'}} >{name}
           {isempty &&(<p style={{
                color: 'hsl(354, 84%, 57%)',
                fontSize: '10px',
              
            }}>this field is required</p>)}
            </label>
            <input
                className={className}
                
                type={type}
                placeholder={placeholder}
                value={value}
                name={name}
                onChange={onChange}
                required={isempty}
            />
        </div>
    );
};

export default Input;
