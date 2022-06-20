import { SOLUTION_PROJECTS } from '../../assets/data/solution_projects.data'
import { ProjectsContainer } from '../../Components/ProjectsContainer/ProjectsContainer'



export function SolutionIndex(){
  return <ProjectsContainer title="Solution" projects={SOLUTION_PROJECTS} />
}