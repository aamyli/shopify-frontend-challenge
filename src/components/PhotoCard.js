import React from "react"
import ReactPlayer from "react-player"
import { useState } from 'react';
import "../styles/photocard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


const img = "image"
const vid = "video"

const PhotoCard = ({ title, date, desc, type, url, liked }) => {
    
    const [like, setLike] = useState([
    {
        hasLiked: liked
    }
    ]);

  return (
    <container-fluid>
        <Row className="card">
            <Col lg={6} className="graphic">
                <div>
                    { type == img ? (
                        <img className="pic" src={url}></img>
                    ) : (
                        <ReactPlayer className="vid" url={url}/>
                    )}
                </div>
            </Col>
            <Col lg={6} className="text">
                <div>
                    <h1>{title}</h1>
                    <h3>{date}</h3>
                    <p>{desc}</p>
                    <button onClick={() => setLike({hasLiked: !like.hasLiked})}> 
                    {
                        like.hasLiked ? (
                            <p>unlike</p>
                        ) : (
                            <p>like</p>
                        )
                    }
                    </button>
                    {/* <p>liked: {liked}</p> */}
                </div>
            </Col>
        </Row>
    </container-fluid>
    // <div className="card" >


    // </div>
  )
}

export default PhotoCard