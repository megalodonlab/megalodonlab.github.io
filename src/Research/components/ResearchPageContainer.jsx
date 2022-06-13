import { ResearchSideNav } from './ResearchSideNav'


export function ResearchPageContainer(props){


  return (

      <div className='research'>

      <div className="header pt-5 text-center">
          <p className="header-text"> {props.title} </p>
      </div>
      <ResearchSideNav />

      <hr />

        <div className='py-2 pb-5 container border border-primary'>
            {props.children}
        </div>

      </div>
  )
}