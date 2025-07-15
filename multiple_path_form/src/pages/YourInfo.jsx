import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Nav from '../components/Nav';
import Input from '../components/Input';
import Header from '../components/Header';

const YourInfo = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [tel, setTel] = useState('');

    const [isNameEmpty, setIsNameEmpty] = useState(false);
    const [isEmailEmpty, setIsEmailEmpty] = useState(false);
    const [isTelEmpty, setIsTelEmpty] = useState(false);

    const navigate = useNavigate();

    
    const handleClick = () => {
        const nameEmpty = name.trim() === '';
        const emailEmpty = email.trim() === '';
        const telEmpty = tel.trim() === '';

        setIsNameEmpty(nameEmpty);
        setIsEmailEmpty(emailEmpty);
        setIsTelEmpty(telEmpty);

        if (!nameEmpty && !emailEmpty && !telEmpty) {
            navigate('/SelectPlan');
        }
    };

    return (
        <div className='your-info'>
            <div className='contenu'>
                <Nav handleClick={handleClick} />

                <div className='header'>
                    <Header title='Personal Info' para="Please provide your name, email address, and phone number."/>
                    
              
                <form>
                    <Input
                        type="text"
                        placeholder="e.g.Stephen King"
                        name="Name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        isempty={isNameEmpty}
                    />
                    <Input
                        type="email"
                        placeholder="e.g.stephenking@lorem.com"
                        name=" Email Adress"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        isempty={isEmailEmpty}
                    />
                    <Input
                        type="text"
                            placeholder="e.g.+1 234 567 890"
                           
                        name="Phone Number"
                        value={tel}
                        onChange={(e) => setTel(e.target.value)}
                        isempty={isTelEmpty}
                    />
                </form>
                    
                </div>
                <div className='divbutton'>
                    
                <button className='button_name' onClick={handleClick}>Next step</button>

                </div>
            </div>
           
        </div>
    );
};

export default YourInfo;
