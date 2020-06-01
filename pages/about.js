import React from "react";
import { centeredPageStyles } from "../styles";

export const meta = {
    title: "About",
    tags: ["Next.js", "MDX"],
    layout: "page",
    publishDate: "2011-01-01",
    modifiedDate: false,
    seoDescription: "This is an about page."
};

function About() {
    return (
        <div className="centered-container">
            <h3>
I work daily on creating new features for the Android and IOS application with React Native and the Web

</h3>

<h3>System with ReactJS and developing back-end with NodeJS, creating and maintaining microservices.</h3>
            <style jsx>{centeredPageStyles}</style>
        </div>
    );
}

export default About;
