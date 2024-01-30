import Project from "./Project"
import ProjectData from "./ProjectData.json"
import "./ProjectGallery.css"

function ProjectGallery() {
    return (
        <div>
            <h3 className="about-projects">Please have a look around for some of my past projects</h3>
            {
                ProjectData.map((project, index) => {
                    return <Project projectProp={project} />
                })
            }
        </div>
    )
}

export default ProjectGallery