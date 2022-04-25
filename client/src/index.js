import React from 'react';
import ReactDOM from 'react-dom/client';
import "bootstrap/dist/css/bootstrap.min.css"
import 'bootstrap/dist/js/bootstrap.min.js'
import './index.css'
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './routes/home';
import PostForm from './routes/postform'
import PostIndex from './routes/postIndex';
import DetailPost from './components/detailPost'
import ViewPost from './routes/viewpost'
import IndexBar from './components/indexbar.component';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} >
        <Route index element={<Home />} />
        <Route path="reefs" element={<IndexBar />} >
          <Route index element={<PostIndex/>}/>
          <Route path=":page" element={<PostIndex/>}/>
        </Route>
        <Route path="viewreef" element={<ViewPost />}>
          <Route path=":id" element={<DetailPost />} />
        </Route>
        <Route path="post" element={<PostForm />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  </BrowserRouter>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
