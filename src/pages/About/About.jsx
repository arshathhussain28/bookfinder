import React from 'react';
import "./About.css";
import aboutImg from "../../images/about-img.jpg";

const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <div className='section-title'>
          <h2>About</h2>
        </div>

        <div className='about-content grid'>
          <div className='about-img'>
            <img src = {aboutImg} alt = "" />
          </div>
          <div className='about-text'>
            <h2 className='about-title fs-26 ls-1'>About BookHub</h2>
            <p className='fs-17'>Welcome to BookFinder, where the joy of reading meets the thrill of discovery. Our mission is to help you find the perfect book, whether it’s a novel that sweeps you off your feet, a thought-provoking non-fiction piece, or a hidden gem waiting to be uncovered. With a vast collection that spans genres, languages, and authors, BookHub brings the world of literature right to your fingertips. We believe that each reader is unique, and our curated recommendations ensure that you’ll always find something that speaks to your interests and passions.</p>
            <p className='fs-17'>At BookFinder, we go beyond just helping you find books—we create a community where readers can connect, share insights, and celebrate the power of storytelling. Join discussions, explore personalized book lists, and be part of a vibrant network that celebrates the written word. With BookHub, you’re not just browsing a library; you’re joining a movement that values literature as a way to connect, learn, and grow. Discover your next great read with us, and let’s embark on this literary journey together!</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
