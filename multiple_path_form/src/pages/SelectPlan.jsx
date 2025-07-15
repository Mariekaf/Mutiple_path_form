import React from 'react';
import Nav from '../components/Nav';
import Header from '../components/Header';
import Cards from '../components/cards';
import { useNavigate } from 'react-router-dom';

const SelectPlan = ({ toggle, handleClick, isClicked,setToggle}) => {
    const navigate = useNavigate();
    const clickselect = () => {
        navigate('/AddOns');
  
    }
    const handleToggle = () => {
        setToggle(!toggle);
        
      }
    const clickselectback = () => {
        navigate('/');
    }
    return (
        <div className='select-plan'>
            <div className='contenu'>
                <Nav  />

                <div className='header'>
                    <Header title='Select your plan' para="You have the option of monthly or yearly billing." />
                    <div className='contents_cards'>
                        <Cards
                            title={"Arcade"}
                            price={toggle ? 9 : 90}
                            id={1}
                            handleClick={handleClick}
                            style={{ backgroundColor: isClicked === 1 ? 'hsl(214, 64%, 98%)' : 'white', border: isClicked === 1 ? '1px solid hsl(228, 100%, 84%) ' : '  1px solid hsl(228, 77%, 95%)' }}
                            toggle={toggle}
                            h3_class={'h3_class_select'}
                            h2_class={'h2_class_select'}
                            img={"/src/assets/assets/images/icon-arcade.svg"}
                        />
                        <Cards
                            title={"Advanced"}
                            id={2}
                            handleClick={handleClick}
                            style={{ backgroundColor: isClicked === 2 ? 'hsl(214, 64%, 98%)' : 'white', border: isClicked === 2 ? '1px solid hsl(228, 100%, 84%) ' : '1px solid hsl(228, 77%, 95%)' }}
                            price={toggle ? 12 : 120}
                            toggle={toggle}
                            h3_class={'h3_class_select'}
                            h2_class={'h2_class_select'}
                            img={"/src/assets/assets/images/icon-arcade.svg"}
                        />
                        <Cards
                            title={"Pro"}
                            id={3}
                            handleClick={handleClick}
                            style={{ backgroundColor: isClicked === 3 ? 'hsl(214, 64%, 98%)' : 'white', border: isClicked === 3 ? '1px solid hsl(228, 100%, 84%) ' : ' 1px solid hsl(228, 77%, 95%)' }}
                            price={toggle ? 15 : 150}
                            toggle={toggle}
                            h3_class={'h3_class_select'}
                            h2_class={'h2_class_select'}
                            img={"/src/assets/assets/images/icon-arcade.svg"}
                        />
                    </div>
                    <div className='choice'>
                        <div className='choice_monthly'>
                            <p style={{ marginTop: '5px', color: toggle ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)' }}>Monthly</p>
                        </div>
                        <div onClick={handleToggle}>
                            {toggle ? (<i className='bx bxs-toggle-left' style={{ color: 'hsl(213, 96%, 18%)', fontSize: '35px', marginLeft: '13px' }} ></i>) : (<i className='bx bxs-toggle-right' style={{ color: ' hsl(213, 96%, 18%)', fontSize: '35px' }} ></i>)}
                        </div>
                        <div className='choice_yearly'>
                            <p style={{ marginLeft: '170px', marginTop: '-30px', color: toggle === false ? 'hsl(213, 96%, 18%)' : 'hsl(231, 11%, 63%)' }}>Yearly</p>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <button className='button_back' onClick={clickselectback} > Go Back</button>
                    <button className='button_name' onClick={clickselect}> Next step</button>
                </div>

            </div>
        </div>
    );
};

export default SelectPlan;