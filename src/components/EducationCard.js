
import EducationCap from "./EducationCap.svg"
function EducationCard({ id, institution, course, startYear, endYear,link }) {

    return (
        <div >
            <div key={id} className="educationContainer">
                <div className="educard-img">
                    <img src={EducationCap} alt="Education Logo" />
                </div>
                <div className="education-details">
                    <h6 style={{color: "white"}}>{startYear} - {endYear}</h6>
                    <h4 style={{color: "white"}}>{course}</h4>
                   <a className="link" href={link} target="_blank"><h5 style={{color: "white"}}>{institution}</h5></a> 
                </div>
            </div>
        </div>        
    )
}

export default EducationCard