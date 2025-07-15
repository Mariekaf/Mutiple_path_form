import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import '../App.scss';

const Nav = () => {
  const location = useLocation();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 375);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 375);
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const steps = [
    { path: '/', label: 'YOUR INFO', number: 1 },
    { path: '/SelectPlan', label: 'SELECT PLAN', number: 2 },
    { path: '/AddOns', label: 'ADD-ONS', number: 3 },
    { path: '/Summary', label: 'SUMMARY', number: 4 },
    { path: '/Thanks', label: 'Thanks', number: 5 }
  ];

  return (
    <div
      className="navigation"
      style={{
        backgroundImage: isMobile
          ? 'url(/src/assets/assets/images/bg-sidebar-mobile.svg)'
          : 'url(/src/assets/assets/images/bg-sidebar-desktop.svg)',
      }}
    >
      <ul>
        {steps.map((step, index) => {
          const isActive = location.pathname === step.path;

          const circleContent = (
            <div
              className="circle"
              style={{
                backgroundColor: isActive ? 'hsl(206, 94%, 87%)' : 'transparent',
                color: isActive ? 'black' : 'white',
                border: isActive ? 'none' : '1.5px solid white',
                cursor: step.number === 5 ? 'pointer' : 'default',
              }}
            >
              <span>{step.number}</span>
            </div>
          );

          return (
            <li key={index}>
              {step.number === 5 ? (
                <NavLink to={step.path} style={{ textDecoration: 'none' }}>
                  {circleContent}
                </NavLink>
              ) : (
                circleContent
              )}

              {!isMobile && (
                <div className="step">
                  <p>
                    Step {step.number}
                    <br />
                    <span>{step.label}</span>
                  </p>
                </div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Nav;
