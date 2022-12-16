import './cssfile/Newscard.css'
import React from 'react'

function Newscard (param){
  // let {title,discription,image_url,time,url} = this.props;
    return (
      <div className="card">
        <div className="image">
          <img src={param.image_url} alt="pic" />
        </div>
        <div className="container">
          <div className="title">
          <h4><b>{param.title}</b></h4><br /></div>
          <div className="decs"><p>{param.discription}</p></div>
          <div className="time"><p>Published Date and time : <strong>{param.time}</strong></p></div>
          <div className="read_more">
            <a href={param.url}>Read more...</a>
          </div>
        </div>
      </div>
    )
  }
export default Newscard;

