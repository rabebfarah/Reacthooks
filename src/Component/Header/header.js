import React from "react"
import {Navbar,Nav} from "react-bootstrap"
import Rating from '../Main/Rate/rating'


const Navigation =({setSearchName, setSearchRate, searchRate } )=>{
    return(
    <Navbar >  
       <div style={{justifyContent: 'space-around'}}>
        <div className="all" style={{display:"flex",justifyContent:"center"}}>
           <Navbar.Brand  style={{ width: '237px',height:'157px',marginLeft: '-281px',color:"white"}}>
           <img src="" alt="MOVIE-APP"/>   
           </Navbar.Brand>
           <div  className="Home" style={{ marginLeft: "50px" ,marginRight: "10px",marginTop:"30px"}}>
           <Nav.Link href="#Home" style={{textDecoration:"none",color:"white"}}>HOME</Nav.Link></div> 
           <div  className="CONTACT"style={{ marginLeft: "50px" ,marginRight: "10px",marginTop:"30px"}}>
           <Nav.Link href="#CONTACT" style={{textDecoration:"none",color:"white"}}>CONTACT</Nav.Link></div>
           <div  className="pricing"style={{ marginLeft: "50px" ,marginRight: "70px",marginTop:"30px"}} >
           <Nav.Link href="#PRICING" style={{textDecoration:"none",color:"white"}}>PRICING</Nav.Link></div>
           <div> 
             <input type="text" placeholder="Search"  onChange={(e) => setSearchName(e.target.value)} style={{  marginTop:"30px", width: "430px",borderRadius: "25px",border:" 1px solid lightgray",color: "grey",padding: "4px 0 8px 10px",marginRight: "-10px",marginLeft: "120px" }}  />
            <div style={{width:"50%",height:"50%"}}>
             <Rating style={{width:"90%",height:"50%"}}rating={searchRate} setSearchRate={setSearchRate}/>
             </div>
           </div>
          
           </div>
      
        </div>
   </Navbar>
);
    }
    export default Navigation