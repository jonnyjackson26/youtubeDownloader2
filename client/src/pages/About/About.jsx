import React, { useState, useEffect, useContext } from 'react';
import './About.css'
import LinkButton from "../../components/LinkButton/LinkButton";

const About = () => {

    return (
        <>
            <h1>About</h1>
            <LinkButton to="/">Home</LinkButton>
        </>
    );
};

export default About;