import React from "react";
import  "../ArticleList/styles.css";

import TopNav from "../../../components/topNav";
import SideNav from "../../../components/sideNav";
import ArticleList from "../../../components/article/articleList";

const AddArticle = ()=>{

    return(
        <div>
        <TopNav/>
        
        <div className="layout">
        <SideNav/>
        <ArticleList/>
        </div>
        </div>
    )
}

export default AddArticle;