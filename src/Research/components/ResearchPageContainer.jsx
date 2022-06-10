import { ResearchSideNav } from './ResearchSideNav'


export function ResearchPageContainer(props){


  return (

      <div>

       <div className="header bg-white">
          <p className="header-text"> {props.title} </p>
        </div>

       <ResearchSideNav />

        <div className="content">
            {props.children}
        </div>

      </div>
  )
}