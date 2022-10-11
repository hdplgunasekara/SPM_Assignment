import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import '../articleList/styles.css'
import ReactPaginate from 'react-paginate';
import { useEffect,useState } from "react";
import Articlemodal from '../../../components/model/articleModel'
import ArticleUpdatemodal from '../../../components/model/articleUpdateModel'
import swal from 'sweetalert'
import axios from 'axios';
import { LoadingOverlay } from '@mantine/core';

const ArticleList= ()=>{
    const [items,setItems]= useState([]);
    const [pageCount,setpageCount]= useState(0);
    const [count , setCount]=useState(0);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(()=>{

       
        const getArticles = async()=>{
            setIsLoading(true);
        const res= await fetch(
            'http://127.0.0.1:8090/article/list' );
        const data = await res.json();
        setpageCount(5);
        setItems(data);
        setCount(data.length)
        setIsLoading(false)
        
        };

        getArticles();
       
        },[]);


        //search
        const fetchArticles = async  (currentPage)=>{ 
            setIsLoading(true)
            const res = await fetch(
                `http://127.0.0.1:8090/article/list?page=${currentPage}&limit=1`);
            const data = await res.json();
            setIsLoading(false)
            return data;
        };
    
        const handlePageClick = async (data)=>{
            let currentPage = data.selected+1;
            const userFormServer = await fetchArticles(currentPage);
            setItems(userFormServer);
        }
    
        // const handleChangeSearch = async (event) => {
        //     setSearch(event.target.value);  
        //     const userFormServer = await fetchArticles(1);
        //     setItems(userFormServer); 
        //   }
        //   //

        const articleDelete=async(id)=>{
            try {
           const url = `http://127.0.0.1:8090/article/delete/${id}`;

                swal({
                    title: "Are you sure?",
                    text: "You will not be able to recover this article!",
                    type: "warning",
                    buttons:true,
                    dangerMode:true,
                }).then((isOkay)=>{

                    if (isOkay) {
                        axios.put(url).then(()=>{
                            swal("Deleted!", "Your article has been deleted.", "success").then(()=>{
                                window.location.reload()
                            })
                          
                        })
                    } else {
                        // swal("Cancelled", "Your imaginary file is safe :)", "error");
                    }

                })
    
            } catch (error) {
                alert("Failed")
            }
          };



return(
<div >
<h2 className="heading">My Article List</h2>
<LoadingOverlay visible={isLoading} overlayBlur={2} />
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
{items.map(article => <div key={article._id}>
<div class="card">
<img className="thumb-img" src={article.image} />
<h1>{article.title.toString().substring(0,50)}</h1>
<p>{article.description.toString().substring(0,50)}</p>
<div className="buuton-group"> 
    <Articlemodal title={article.title} description={article.description} id={article._id} image={article.image} data={article.createdAt}/>  
    <ArticleUpdatemodal title={article.title} description={article.description} id={article._id} image={article.image} />                             
    <button type="button" class="btn btn-danger" onClick={() => { articleDelete(article._id) }}>Delete</button>
    </div>
</div>
</div>
)}


</div>
<div className="paginator" >
<center>
{count>2 ?  
<ReactPaginate
           breakLabel={'...'}
           pageCount={pageCount}
           onPageChange={handlePageClick}
           containerClassName={'pagination justify-content-center'}
           pageClassName={'page-item'}
           pageLinkClassName={'page-link'}
           previousClassName={'page-item'}
           nextClassName={'page-item'}
           previousLinkClassName={'page-link'}
           nextLinkClassName={'page-link'}
           breakClassName={'page-item'}
           breakLinkClassName={'page-link'}
           activeClassName={'page-item active'}

           />
        : <></>}
</center>
</div>

</div>
    )
}

export default ArticleList;