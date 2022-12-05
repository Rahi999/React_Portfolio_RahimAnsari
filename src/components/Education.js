import React, { useContext } from 'react';
import EducationCard from './EducationCard';
import EducationLogo from "./EducationLogo.svg"
function Education() {

    return (
        <div className="education" id="resume" style={{backgroundColor: ""}}>
             <h1 className="project-heading">Education</h1>
            <div className="education-body">
                <div className="education-description">
              
                    
                        <EducationCard 
                            institution="Masai School Bangalore, KA"
                            course="Full Stack Softare Development"
                            startYear="Jan-2022"
                            endYear="Oct-2022"
                            link="https://www.masaischool.com/"
                        />
                          <EducationCard 
                            institution="Gopeshwar College,Jai Prakash University Hathua,Bihar"
                            course="Intermediate(PCM) - BSEB"
                            startYear="June 2018"
                            endYear="June 2020"
                            link="http://www.gopeshwarcollegehathwah.in/Home/About"
                        />
                        <EducationCard 
                            institution="M.C.H.S. Gopalganj, Bihar"
                            course="Schooling"
                            startYear="2008"
                            endYear="2018"
                            link="https://www.google.com/maps/place/Maya+Chota+High+School,+Uchkagaon/@26.5460676,84.3120455,14.84z/data=!4m5!3m4!1s0x0:0x1abd6099a98b95e2!8m2!3d26.5466888!4d84.3159914"
                        />
                
                </div>
                <div className="education-image">
                    <img src={EducationLogo} alt="logo1"/>
                </div>
            </div>
        </div>
    )
}

export default Education