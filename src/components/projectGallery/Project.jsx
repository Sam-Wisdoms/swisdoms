import "./ProjectGallery.css"
function Project({projectProp}) {
    // const { id, title, description, deployedLink, githubLink, image } = project;
    

    return (
        <div className="projects">
            <h3>{projectProp.title}</h3>
            <p><a href={projectProp.deployedLink}>Deployed Link</a></p>
            <p><a href={projectProp.githubLink}>GitHub Link</a></p>
            <img src={projectProp.image} alt={projectProp.title} className="project-image" />
            <p className="description">{projectProp.description}</p>
        </div>
    )
}

export default Project;