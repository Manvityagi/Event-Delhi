import React from 'react'
import classes from './TopNavBar.module.css'

const TopNavBar = () => {
    const logoLink = 'http://www.wrraptheme.com/templates/lucid/html/assets/images/logo.svg';
    return (
        <div className={classes['fixed-top']}>
            
            {/* Left */}
            <div className={classes.horizontalFlexLeft}>
                <div className={classes.toggleMenuIcon}>
                    <i className="fas fa-bars"></i>
                </div>
                <div className={classes.logoWrapper}>
                  <img src={logoLink} className={classes.logo} alt='Logo' />
                </div>
            </div>

            {/* Right */}
            <div className={classes.horizontalFlexRight} >
                <div className={classes.userBox}>
                </div>
                <div className={classes.notifIcon}>
                    <i className="fa fa-bell" aria-hidden="true">
                        {/* <div className={classes.badge}>
                            
                        </div> */}
                    </i>
                </div>
                <div>
                    Logout Button
                </div>
            </div>

        </div>
    );
}

export default TopNavBar;