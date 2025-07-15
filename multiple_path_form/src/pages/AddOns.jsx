import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Cards from '../components/cards';
import { useNavigate } from 'react-router-dom';

const AddOns = ({ toggle, handleClick, isCard4Selected, isCard5Selected,isCard6Selected}) => {
    const navigate = useNavigate();
    
    const clickselect = () => { 
        navigate('/Summary');
     
     }
    const clickselectback = () => { 
      
         navigate('/SelectPlan');
        }
    return (

        
        <div className='your-info'>
            <div className='contenu'>
                <Nav />

                <div className='header'>
                    <Header title='Pick add-ons' para="   Add-ons help enhance your gaming experience." />

                    <div className='contents_cards'>
                        <Cards
                            title={"Online service"}
                            price={ "Access to multiplayer games"}
                            id={4}
                            handleClick={handleClick}
                            style={{
                                backgroundColor: isCard4Selected ? 'hsl(214, 64%, 98%)' : 'white',
                                border: isCard4Selected ? '1px solid #483eff' : '1px solid hsl(228, 77%, 95%)',
                            }}
                            h3_class={'h3_class_addons'}
                            h2_class={'h2_class_addons'}
                            label={toggle ? "+$1/mo" : "+$10/yr"}
                            label_name={'label_name'}
                            
                            icon={isCard4Selected ?<i className='bx bxs-check-square' style={{ color: '#483eff', fontSize: '28px', marginLeft: '-5px',marginTop:'-65px' }} ></i> :<i className='bx bx-checkbox' style={{color:' hsl(228, 77%, 95%)', fontSize: '35px', marginLeft: '-10px',marginTop:'-65px'}} ></i>}
                        />
                        <Cards
                            title={"Larger storage"}
                            id={5}
                            handleClick={handleClick}
                            style={{
                                backgroundColor: isCard5Selected ? 'hsl(214, 64%, 98%)' : 'white',
                                border: isCard5Selected ? '1px solid #483eff' : '1px solid hsl(228, 77%, 95%)',
                            }}
                            h3_class={'h3_class_addons'}
                            h2_class={'h2_class_addons'}
                            price={"2TB of cloud save"}
                            label={toggle ? "+$2/mo" : "+$20/yr"}
                            label_name={'label_name'}
                            
                            icon={isCard5Selected ?<i className='bx bxs-check-square' style={{ color: '#483eff', fontSize: '28px', marginLeft: '-5px',marginTop:'-65px' }} ></i> :<i className='bx bx-checkbox' style={{color:' hsl(228, 77%, 95%)', fontSize: '35px', marginLeft: '-10px',marginTop:'-65px'}} ></i>}
                        />
                        <Cards
                            title={"Customizable profile"}
                            id={6}
                            handleClick={handleClick}
                            style={{
                                backgroundColor: isCard6Selected ? 'hsl(214, 64%, 98%)' : 'white',
                                border: isCard6Selected ? '1px solid #483eff' : '1px solid hsl(228, 77%, 95%)',
                            }}
                            h3_class={'h3_class_addons'}
                            h2_class={'h2_class_addons'}
                            price={"Custom theme on your profile"}
                            label={toggle ? "+$2/mo" : "+$20/yr"}
                            label_name={'label_name'}
                            
                            month={'month'}
                           icon={isCard6Selected ?<i className='bx bxs-check-square' style={{ color: '#483eff', fontSize: '28px', marginLeft: '-5px',marginTop:'-65px' }} ></i> :<i className='bx bx-checkbox' style={{color:' hsl(228, 77%, 95%)', fontSize: '35px', marginLeft: '-10px',marginTop:'-65px'}} ></i>}
                        />
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                <button className='button_back2' onClick={clickselectback} > Go Back</button>
                <button className='button_name2' onClick={clickselect}> Next step</button>
                </div>
                </div>
            </div>
        </div>
    );
};

export default AddOns;