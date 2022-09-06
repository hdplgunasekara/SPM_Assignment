import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../articleList/styles.css'


const ArticleList= ()=>{

return(
<div>
    <h2>My Article List</h2>
    <br/>
<div class="card-deck">
<div class="card">
  {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"/> */}
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
   <div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

<div class="card">
  {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"/> */}
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
   <div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

<div class="card">
  {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"/> */}
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
   <div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

<div class="card">
  {/* <img src="/w3images/jeans3.jpg" alt="Denim Jeans" style="width:100%"/> */}
  <h1>Tailored Jeans</h1>
  <p class="price">$19.99</p>
  <p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
   <div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

</div>
</div>
    )
}

export default ArticleList;