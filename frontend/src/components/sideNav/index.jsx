import React from "react";
import  "../sideNav/styles.css";
import propic from '../../assets/propic.png';



const SideNav = ()=>{

    return(  
<div>
<div class="sidebar">
 <div className="pro-container">
 <img className="propic" src={propic} />
 <p className="pro-name">Your name here</p>

 </div>
 <div className="menu">
  <a href="/article" className="item"><i class="fa fa-fw fa-home"></i> Dashboard</a>
  <a href="/article/list" className="item"><i class="fa fa-fw fa-wrench"></i> Article List</a>
  <a href="/article/add" className="item" ><i class="fa fa-fw fa-user"></i> Add Article</a>
  <a href="#contact" className="item"><i class="fa fa-fw fa-envelope"></i>Support</a>
  </div>
</div>

</div>

    )
}

export default SideNav;