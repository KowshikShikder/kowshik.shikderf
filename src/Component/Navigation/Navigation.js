import React, { useState } from 'react'
import './Navigation.css'
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import { HashLink as Link } from 'react-router-hash-link';

export default function Navigation() {

    const [FixedNav, setFixedNav] = useState()

    const [OpenMenu, setOpenMenu] = useState("-300px")

    const sideNavMenuOpen=()=>{
        document.getElementById("Close-button").classList.remove("ghuratis");
        document.getElementById("sideNavButton").style.display="grid"
        setOpenMenu("0px")
    }
    

    const sideNavMenuClose=()=>{

        document.getElementById("Close-button").classList.add("ghuratis");
        setTimeout(()=>{
            setOpenMenu("-300px");
            document.getElementById("sideNavButton").style.display="none"

        },800)

    }

    window.addEventListener('scroll', ()=>{
        
        let scroll= window.scrollY;
        let width= window.innerWidth;
        if(width > 850){
            setFixedNav(600)
        }
        else if(width > 450  ){
            setFixedNav(400)
        }
        else{
            setFixedNav(300)
        }
        



        if(scroll > FixedNav){
        document.getElementById('Navigation-main').classList.add("Navigation-main")
    }
        else{
        document.getElementById('Navigation-main').classList.remove("Navigation-main")
        }
    })


    return (
        <div id="Navigation-main">
            <Grid className="Navigation-Parent"  justify="flex-start"  container>

            <Link to="#home">      <Button className="nav-button" variant="outlined" color="primary" item>  Home      </Button> </Link>
            <Link to="#about">     <Button className="nav-button" variant="outlined" color="primary" item>  About     </Button> </Link>
            <Link to="#skills">    <Button className="nav-button" variant="outlined" color="primary" item>  Skills    </Button> </Link>
            <Link to="#projects">  <Button className="nav-button" variant="outlined" color="primary" item>  Projects  </Button> </Link>
            <Link to="#review">    <Button className="nav-button" variant="outlined" color="primary" item>  Review    </Button> </Link>
            <Link to="#services">  <Button className="nav-button" variant="outlined" color="primary" item>  Services  </Button> </Link>
            <Link to="#contact">   <Button className="nav-button" variant="outlined" color="primary" item>  Contact   </Button> </Link>

                <Button className="nav-menu" onClick={sideNavMenuOpen} > <MenuIcon color="primary" /> </Button> 
            </Grid>
        <div style={{position:"absolute"}}> 
            <div className="Side-nav-parent" style={{marginLeft: OpenMenu}}>
                
                <div open={OpenMenu}  style={{height:"250px"}} swipeAreaWidth="20" className="sideNavMenu bg-dark">

                <div className="sideMenuCloseIcon">
                    <Button onClick={sideNavMenuClose} id="Close-button" > <ArrowBackIosIcon fontSize="large" /> </Button>
                </div>

                <div className="language">
                    <div className="btn"> BN </div> <div className="btn"> EN </div>
                </div>

                <div className="sideNavButton" id="sideNavButton"> 
                <Button>  <Link to="#home" className="link">       Home       </Link> </Button>
                <Button>  <Link to="#about" className="link">      About      </Link> </Button>
                <Button>  <Link to="#skills" className="link">     Skills     </Link> </Button>
                <Button>  <Link to="#projects" className="link">   Projects   </Link> </Button>
                <Button>  <Link to="#review" className="link">     Review     </Link> </Button>
                <Button>  <Link to="#services" className="link">   Services   </Link> </Button>
                <Button>  <Link to="#contact" className="link">    Contact    </Link> </Button>


                <div class="SideNav-line"> 
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                    <div className="putupPutu"> </div>
                </div>
                </div>
                
                </div>

            </div>
            </div>
        </div>
    )
}
