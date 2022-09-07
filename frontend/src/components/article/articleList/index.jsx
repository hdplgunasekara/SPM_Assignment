import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../articleList/styles.css'
import thumb from '../../../assets/book.JPG';
const ArticleList= ()=>{

return(
<div className="main">
    <h2>My Article List</h2>
    <br/>
   {/* search */}
   <div className="Search-container">
 
    <form className="d-flex" >
     <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" 
     required/>
    </form>
      </div>
  
{/* search end */}

<div class="card-deck">
<div class="card">
<img className="thumb-img" src={thumb} />
<h1>Sample article 3</h1>
<p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
<div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

<div class="card">
<img className="thumb-img" src={thumb} />
<h1>Sample article 2</h1>
<p>Some text about the jeans. Super slim and comfy lorem ipsum lorem jeansum. Lorem jeamsun denim lorem jeansum.</p>
<div className="buuton-group"> 
    <button type="button" class="btn btn-success">View</button>
    <button type="button" class="btn btn-primary">Update</button>
    <button type="button" class="btn btn-danger">Delete</button>
    </div>
</div>

<div class="card">
<img className="thumb-img" src={thumb} />
<h1>Sample article 1</h1>
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