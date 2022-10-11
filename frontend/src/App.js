import { BrowserRouter, Router, Routes, Route } from "react-router-dom"
import './App.css';

//pasindu 
import ArticleList from "./pages/article/ArticleList";
import AddArticle from "./pages/article/AddArticle";
import BookDashboard from "./pages/book/BookDashboard";
import ViewBooks from "./pages/book/admin/ViewBooks";
import Dashboard from "./pages/admin/Dashboard";


function App() {
  return (
  <div className="App">
  <BrowserRouter>
    <Routes>
      {/* Pasindu  */}      
      {/* <Route exact path="/article/list" element={<ArticleList />} />
      <Route exact path="/article/add" element={<AddArticle />} /> */}
      <Route path="/" element={<BookDashboard/>}/>
      <Route path="/viewbook" element={<ViewBooks/>}/>
      <Route path="/dashboard" element={<Dashboard/>}/>

    </Routes>
  </BrowserRouter>
     
    </div>
  );
}

export default App;
