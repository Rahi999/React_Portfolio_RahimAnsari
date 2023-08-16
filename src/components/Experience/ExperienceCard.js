
import EducationCap from "../EducationCap.svg"
function ExprienceCard({ id, Role, course, startYear, endYear,link,company }) {

    return (
        <div >
            <div key={id} className="educationContainer">
                <div className="educard-img">
                    {/* <img src="https://png.pngtree.com/png-vector/20190927/ourmid/pngtree-laptop-icon-png-image_1753317.jpg" alt="Education Logo" /> */}
                </div>
                <div className="education-details">
                    <h6 style={{color: "white"}}>{startYear} - {endYear}</h6>
                    <h4 style={{color: "white"}}>{Role}</h4>
                   <a className="link" href={link} target="_blank"><h5 style={{color: "white"}}>{company}</h5></a> 
                </div>
            </div>
        </div>        
    )
}

export default ExprienceCard