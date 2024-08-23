import React, { useState, useEffect, useContext } from 'react';
import './Home.css'
import LinkButton from "../../components/LinkButton/LinkButton";
import axios from "axios"

const Home = () => {

    const fetchAPI = async () => {
        const response = await axios.get("http://localhost:8080/api/users");
        console.log(response.data.users)
    };
    useEffect(() => {
        fetchAPI();
    }, [])

    return (
        <>
            <h1>Home</h1>
            <p>paste youtube link below then press button</p>
            <input type="text" id="youtube-link" />
            <button id="go-button">Go</button>
            <LinkButton to="/about">About</LinkButton>
        </>
    );
};

export default Home;