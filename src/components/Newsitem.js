import React, { useEffect, useState } from 'react'
import Newscard from './Newscard';
import "./cssfile/Newscard.css";
import {searching_value} from "./Navbar";
function Newsitem(param) {
  const [articles, setarticles] = useState([]);
  const [page, setpage] = useState(1);
  const [totalarticle, settotalarticle] = useState(0);
  useEffect(() => {
    
    if(!searching_value){
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${page}&pageSize=15&category=${param.search}`).then((res) => {
      return res.json();
    }).then((result) => {
      console.log(param.search);
      // console.log(result+" iho");
      
      setarticles( result.articles);
      console.log("uoooo");
      settotalarticle(result.totalarticle);
    })
   
  }else{
    console.log(searching_value);
      fetch(`https://newsapi.org/v2/everything?q=${searching_value}&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&pageSize=30`).then((res) => {
      return res.json();
    }).then((result) => {
      console.log(result);
      console.log("nikhil");
      setarticles( result.articles);
      settotalarticle(result.totalarticle);
    })
    //  searching_value = "";
  }
  })

  const PrechangeHandling = () => {
    fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${page - 1}&pageSize=15&category=${param.search}`).then((res) => {
      return res.json();
    }).then((result) => {
      setarticles( result.articles);
      setpage(page-1);
    })
  }
  const NextChangeHandling = () => {
    if (page + 1 > Math.ceil(totalarticle / 15)) {

    } else {
      fetch(`https://newsapi.org/v2/top-headlines?country=in&apiKey=4ca4adb85bcf4083ad0a7b8db111707e&page=${page + 1}&pageSize=15&category=${param.search}`).then((res) => {
        return res.json();
      }).then((result) => {
      setarticles( result.articles);
      setpage(page+1);
      })
    }
  }
    return (
      <>
      {/* console.log({searching_value}); */}
        <h1 className='headlines'><marquee>Top Headlines all Across the world</marquee></h1>
        <div className="newscards_in_app">
          {articles.map((element) => {
            return <Newscard key={element.id} url={element.url} title={element.title} discription={element.description} image_url={element.urlToImage ? element.urlToImage : "https://s.abcnews.com/images/Technology/WireAP_db8050f94ec14cd09087dd38c5c20434_16x9_992.jpg"} time={element.publishedAt} />
          })}
        </div>
        <div className="btn_box">
          <button disabled={page <= 1} className="previous" onClick={PrechangeHandling} >  Previous</button>
          <button className="Next" onClick={NextChangeHandling} >Next  </button>
        </div>
      </>
    )
  }

  export default Newsitem;