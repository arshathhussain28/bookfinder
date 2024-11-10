import React from 'react';
import Navbar from "../Navbar/Navbar";
import SearchForm from "../SearchForm/SearchForm";
import "./Header.css";

const Header = () => {
  return (
    <div className='holder'>
        <header className='header'>
            <Navbar />
            <div className='header-content flex flex-c text-center text-white'>
                <h2 className='header-title text-capitalize'>find your book of choice.</h2><br />
                <p className='header-text fs-18 fw-3'>Discover your next favorite read with ease. Our Book Finder helps you explore a vast selection of titles across genres and authors. Whether you're looking for a timeless classic, the latest bestseller, or a hidden gem, our platform makes it simple to find books you'll love. Dive into a world of literature and let your next adventure begin here!</p>
                <SearchForm />
            </div>
        </header>
    </div>
  )
}

export default Header