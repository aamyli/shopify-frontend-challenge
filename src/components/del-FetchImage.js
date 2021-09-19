import React from 'react'
import ReactPlayer from "react-player"

const API_KEY = "P8VLfFu4GWnTCbJSxagVfhtaUHSC6XPIhFJ8p242";

export default class FetchImage extends React.Component {
    state = {
        loading: true,
        image: null
    };

    async componentDidMount() {
        const url = "https://api.nasa.gov/planetary/apod?api_key=P8VLfFu4GWnTCbJSxagVfhtaUHSC6XPIhFJ8p242&date=2021-09-17";
        const response = await fetch(url);
        const data = await response.json();
        this.setState({ loading: false, image: data });
        console.log(data);
    }

    render() {
        return (
            <div>
                {this.state.loading || !this.state.image ? (
                    <div> loading ... </div> 
                ) : (
                    <div>
                        <div>{this.state.image.title}</div>
                        <div>{this.state.image.url}</div>
                        <img src="https://apod.nasa.gov/apod/image/2108/NGC6726_6723_2panel1100.jpg"></img>
                        <ReactPlayer url={this.state.image.url}/>
                    </div>
                )}
            </div>
        )
    }
}