import { projectsData } from '@/utils/data/projects-data';
import ProjectCard from './project-card';

const Projects = () => {
  return (
    <div id='projects' className="relative z-50 my-12 lg:my-24">
      <div className="py-4">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443] absolute left-0 w-fit text-white px-5 py-3 text-xl rounded-md font-bold">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
        </div>
      </div>

      <div className="pt-10">
        <div className="flex flex-col gap-8">
          {projectsData.slice(0, 4).map((project, index) => (
            <div
              key={project.id || index}
              className="w-full mx-auto max-w-3xl transition-all duration-500 group"
            >
              <div className="box-border flex items-center justify-center rounded-lg shadow-[0_0_30px_0_rgba(0,0,0,0.3)] group-hover:shadow-[0_0_35px_rgba(22,242,179,0.25)] group-hover:-translate-y-1.5 transition-all duration-500 bg-[#0d1224]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;