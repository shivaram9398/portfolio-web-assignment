import './index.css'
const Projects = props => {
  const {details, value} = props
  const {description, name, imgUrl} = details
  const view = value % 2 === 0 ? true : false
  return (
    <div className="projects-container">
      <div className="project-card">
        <div className="project-info">
          <h1 className="project-name">{name}</h1>
          <p className="project-description">{description}</p>
          <button className="view-button">View Projects</button>
        </div>
        <div className="project-image">
          <img src={imgUrl} className="image1" />
        </div>
      </div>
    </div>
  )
}
export default Projects
