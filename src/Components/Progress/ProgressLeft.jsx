import BlogArrowLeft from '../../assets/img/blog-arrow.png'

export function ProgressLeft(props) {

    return (
        <div className="post-excerpt post-excerpt-left">

            <div className="post-content">
                <h3 className="post-title"> {props.title} </h3>
                <p className="post-description"> {props.description} </p>
            </div>
            <div className="post-date-container">
                <div className="post-month"> {props.month} </div>
                <div className="post-date"> {props.date} </div>
            </div>

            <div className="post-arrow-container rotate-arrow">
                <img src={BlogArrowLeft} alt="arrow" />
            </div>
        </div>
    )

}