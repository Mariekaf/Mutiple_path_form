import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';
import Cards from '../components/cards';
import Sum from '../components/Sum';


const Summary = ({ choix, toggle, choix4, choix5, choix6 }) => {

    const navigate = useNavigate();
    const clickselect = () => {
        navigate('');
    }
    const clickselectback = () => {
        navigate('/AddOns');
        console.log('le choix  dans summary' + choix4)
    }
    useEffect(() => {
    }, [choix]);

    const [prices, setPrices] = useState([]);

    const handlePriceUpdate = (id, price) => {
        setPrices((prevPrices) => {
            const updated = { ...prevPrices, [id]: price };
            return updated;
        });
    };

    const total = Object.values(prices).reduce((acc, val) => acc + val, 0);
    useEffect(() => {
        console.log("Total à payer :", total);
    }, [prices]);

    return (
        <div className='your-info'>
            <div className='contenu'>
                <Nav />

                <div className='header'>
                    <Header title=' Finishing up' para="  Double-check everything looks OK before confirming." />

                    <div className='summary'>
                        <Cards toggle={toggle} id={0}
                            title={
                                choix == 1 ?
                                    toggle == true ?
                                        'Arcade (Monthly)' : "Arcade (Yearly)"
                                    : choix == 2 ?
                                        toggle == true ?
                                            'Advanced (Monthly)' : "Advanced (Yearly)"
                                        : choix == 3 ?
                                            toggle == true ?
                                                'Pro (Monthly)' : "Pro (Yearly)"
                                            : ""
                            }
                            label='change'
                            price={
                                choix == 1 ?
                                    toggle == true ?
                                        9 : 90
                                    : choix == 2 ?
                                        toggle == true ?
                                            12 : 120
                                        : choix == 3 ?
                                            toggle == true ?
                                                15 : 150
                                            : ""
                            }
                            onPriceChange={handlePriceUpdate}
                        />
                        {choix4 == 4 && (<Sum toggle={toggle} id={4}
                            title="online services"
                            price={toggle == true ?
                                1 : 10}
                            onPriceChange={handlePriceUpdate}
                        />)}
                        {choix5 == 5 && (<Sum toggle={toggle} id={5}
                            title="larger storage"
                            price={toggle == true ?
                                2 : 20}
                            onPriceChange={handlePriceUpdate}
                        />)}
                        {choix6 == 6 && (<Sum toggle={toggle} id={6}
                            title="Customizable profile"
                            price={toggle == true ?
                                2 : 20}
                            onPriceChange={handlePriceUpdate}
                        />)}
                        <h2 style={{fontSize:'20px', marginTop:'40px', marginLeft:'20px'}}>Total: ${total}/{toggle ? 'mo' : 'yr'}</h2>
                    </div>

                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button className='button_back2' onClick={clickselectback} > Go Back</button>
                        <button className='button_name2' onClick={clickselect}> Next step</button>
                    </div>
                </div>

            </div>
        </div>


    );
};

export default Summary;