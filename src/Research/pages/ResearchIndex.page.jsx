import { RESEARCH_PROJECTS } from '../../assets/data/research_projects.data'
import { ProjectsContainer } from '../../Components/ProjectsContainer/ProjectsContainer'

export function ResearchIndex(){
  return <ProjectsContainer title="Research" projects={RESEARCH_PROJECTS} />
}