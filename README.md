# Shopify Frontend Challenge

<!-- TABLE OF CONTENTS -->
<details open="open">
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#introduction">Introduction</a>
    </li>
    <li>
      <a href="#features">Features</a>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
    </li>
    <li>
      <a href="#built-with">Built With</a>
    </li>
  </ol>
</details>

## Introduction

This project is for the Shopify Frontend Developer Intern Challenge, Winter 2022.

Following the prompt, this project is a simple user interface that pulls images from the [NASA APOD API](https://api.nasa.gov/#apod), allowing the users to "like" and "unlike" their favourite images. The user can select a date range for which they want to query for.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), built with the help of npm packages, and deployed on Github Pages.

## Features
- Pulls data from one of NASA's APIs (APOD)
- Displays each image/video returned along with a description
- Description includes a title, date, description, and url to the full image/video.
- Each image/video can be liked and unliked
- (EXTRA) The user can select a date range to pull data from, through an interactive calendar. 

The webpage, in both its visuals and flow, has been designed to reflect the grand and serene feelings associated with space.

## Demo

The demo can be accessed at [aamyli.github.io/shopify-frontend-challenge](https://aamyli.github.io/shopify-frontend-challenge/)

### 1. the landing page -- click enter!
![home page](https://github.com/aamyli/shopify-frontend-challenge/blob/master/src/assets/demo-1.png?raw=true)

### 2. select a date range and click go!
![start page](https://github.com/aamyli/shopify-frontend-challenge/blob/master/src/assets/demo-2.png?raw=true)

### 3. you can scroll through all of the photos, and like/unlike each one (:
![gallery page](https://github.com/aamyli/shopify-frontend-challenge/blob/master/src/assets/demo-3.png?raw=true)
![gallery unlike](https://github.com/aamyli/shopify-frontend-challenge/blob/master/src/assets/demo-4.png?raw=true)

### 3.1 videos are supported as well
![gallery video](https://github.com/aamyli/shopify-frontend-challenge/blob/master/src/assets/demo-5.png?raw=true)

## Getting Started

1. Clone this git repository ([React](https://reactjs.org/) is needed to run this application locally)!
2. In the project directory, run `npm start` to run the app in development mode.

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

Do note that an API key is already included in this repository for the demo. However, you can also get your own free API key at [api.nasa.gov](https://api.nasa.gov/) and replace the value for `const API_KEY=` in `src/App.js`

## Built With

ReactJS and the npm packages below:
- [react-date-range](https://www.npmjs.com/package/react-date-range)
- [react-bootstrap](https://react-bootstrap.github.io/)
