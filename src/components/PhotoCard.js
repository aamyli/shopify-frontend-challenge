import React from "react"
import ReactPlayer from "react-player"
import { useState } from 'react';
import "../styles/photocard.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Button } from 'react-bootstrap';


const img = "image"
const vid = "video"

const PhotoCard = ({ title, date, desc, type, url, liked }) => {
    
    const [like, setLike] = useState([
    {
        hasLiked: liked
    }
    ]);

  return (
    <div className="card">
        <div className="graphic">
            { type == img ? (
                <img className="pic" src={url}></img>
            ) : (
                <ReactPlayer className="vid" url={url}/>
            )}
        </div>
        <div className="text">
            <h1>{title}</h1>
            <h3>{date} | <a href={url}><i>🔗 to view full</i></a></h3>
            <p>{desc}</p>
            <br />
            <Button variant="light" onClick={() => setLike({hasLiked: !like.hasLiked})}> 
            {
                like.hasLiked ? (
                    <p>unlike 💔</p>
                ) : (
                    <p>like ❤️</p>
                )
            }
            </Button>
            <p className="divider">- - ✨ - -</p>
        </div>
    </div>
  )
}

export default PhotoCard