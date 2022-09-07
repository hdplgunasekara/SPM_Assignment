import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../addArticle/styles.css'
const ArticleList= ()=>{

return(
<div className="main-container">
    <h2>Add New Article</h2>
    <br/>
    <div>
    <form>
    <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Username:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value="name" Readonly/>
  </div>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Article Title:</label>
    <input type="text" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Article Description:</label>
    <input type="text" class="form-control wd" id="exampleInputPassword1"/>
  </div>
  <div className="button-container">
  <button type="submit" class="btn btn-success">Add Article</button>
  <button type="reset" class="btn btn-danger">Clear</button>
  </div>
</form>
</div>
  
</div>
    )
}

export default ArticleList;