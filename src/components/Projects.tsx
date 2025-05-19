import ProjectItem from "./ProjectItem";
import projectList from "../assets/projectList.ts";

const Projects = () => {
  return (
    <section id='projects'>
      <h1>Projects</h1>
      {projectList.map(pr => {
        return (pr.showOnHome) ? <ProjectItem key={pr.id} project={pr} /> : null;
      })}
    </section>
  )
}

export default Projects;