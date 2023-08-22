import React, { useContext } from 'react';
import ExperienceCard from './ExperienceCard';
import EducationLogo from "../EducationCap.svg"
function Experience() {

    return (
        <div className="education" id="resume" style={{backgroundColor: ""}}>
             <h1 className="project-heading">Experience</h1>
            <div className="education-body">
                <div className="education-description">
              
                    
                        <ExperienceCard 
                            company="Masai School Bangalore, KA"
                            Role="QA Intern"
                            startYear="Jan-2023"
                            endYear="April-2023"
                            link="https://www.masaischool.com/"
                        />
                          <ExperienceCard 
                            company="Masai School Bangalore, KA"
                            Role="QA & Automation Engineer"
                            startYear="April 2023"
                            endYear="Present"
                            link="https://www.masaischool.com/"
                        />
                
                </div>
                <div className="education-image">
                    <img src="https://i.pinimg.com/originals/b6/10/f7/b610f7d42fda995a16e676e850dae2f6.png" alt="Experience-logo"/>
                </div>
            </div>
        </div>
    )
}

export default Experience