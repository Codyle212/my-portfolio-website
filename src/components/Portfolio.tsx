import projects from "../data/projects";
import Project from "./Project";
import Title from "./Title";

function Portfolio() {
  return (
    <>
      <Title id="projects" className="pl-20 pt-6 ">
        Projects
      </Title>
      <div className="flex flex-col md:flex-row items-center justify-center px-20 pt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <Project
              title={project.title}
              imgUrl={project.imgUrl}
              techstack={project.techstack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;
