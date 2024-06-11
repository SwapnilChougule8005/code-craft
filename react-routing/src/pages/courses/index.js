import React from 'react'
import './styles.css'
import Header from '../../components/header';

const TopCourses = () => {
    return (
        <div className="page-container">
            <Header/>
                <div className="main-title">
                <h1>TOP COURSES</h1>
                </div>
             
            <div className="course-card">
                <img className="course-img" src="https://miro.medium.com/v2/resize:fit:678/0*kxPYwfJmkXZ3iCWy.png" />
                <h2 className="course-title">MERN stack developer</h2>
                <p className="course-description">The MERN stack is a collection of technologies that help developers build robust and scalable web applications using JavaScript. The acronym “MERN” stands for MongoDB, Express, React, and Node. js, with each component playing a role in the development process.</p>
            </div>
             <div className="course-card">
                <img className="course-img" src="https://www.covetus.com/uploads/topics/15805349703902.jpg" />
                <h2 className="course-title">web development fundamentals</h2>
                <p className="course-description">Web development fundamentals include a range of components, primarily front-end development, back-end development, database management, and HTTP/HTTPS protocols. Front-end includes HTML technology for content structure, CSS for styling, and JavaScript for interactivity.</p>
            </div>
            <div className="course-card">
                <img className="course-img" src="https://testingmint.com/wp-content/uploads/2023/01/Fundamental-of-Software-Testing-1024x576.webp"/>
                <h2 className="course-title">software testing fundamentals</h2>
                <p className="course-description">Testing is the process of executing a program or part of a program with the intention of finding errors. The different phases of a test life cycle are Test Planning and Control, Test Analysis and Design, Test Implementation and Execution, Evaluating Exit Criteria and Reporting, and Test Closure.</p>
            </div>
            <div className="course-card">
                <img className="course-img" src="https://www.scmgalaxy.com/tutorials/wp-content/uploads/2021/09/Full-stack-developer-1.png" />
                <h2 className="course-title">full stack developer</h2>
                <p className="course-description">Full-stack developers design and create websites and applications for various platforms. A full-stack developer's job description might include the following: Develop and maintain web services and interfaces. Contribute to front-end and back-end development processes. Build new product features or APIs.</p>
            </div>
            <div className="course-card">
                <img className="course-img" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQY6V5Z-Fv9MhW1BT9UAPz6CqYse7PyHbS6Yw&s" />
                <h2 className="course-title">data science fundamentals</h2>
                <p className="course-description">Data science is the science of analyzing raw data using statistics and machine learning techniques with the purpose of drawing conclusions about that information. So briefly it can be said that Data Science involves:</p>
            </div>
            <div className="course-card">
                <img className="course-img" src="https://www.zestminds.com/blog/wp-content/uploads/2021/04/Mobile-App-Development-Process-Banner.jpg" />
                <h2 className="course-title">mobile app development</h2>
                <p className="course-description">Mobile application development is the process of creating software applications that run on a mobile device, and a typical mobile application utilizes a network connection to work with remote computing resources.</p>
            </div>
             
        </div>
    )
}
export default TopCourses;