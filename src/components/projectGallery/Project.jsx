import "./ProjectGallery.css"
function Project({ project }) {
    const { id, title, description, deployedLink, gitHubLink, image } = project;

    return (
        <div>
            <h3>{title}</h3>
            <p><a href={deployedLink}>Deployed Link</a></p>
            <p><a href={gitHubLink}>GitHub Link</a></p>
            <img src={image} alt={title} className="project-image" />
            <p>{description}</p>
        </div>
    )
}

export default Project;