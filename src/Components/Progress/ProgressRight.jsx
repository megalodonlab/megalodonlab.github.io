import BlogArrowLeft from '../../assets/img/blog-arrow.png'

export function ProgressRight(props) {

    return (
         <div className="post-excerpt post-excerpt-right">
            <div className="post-arrow-container">
                <img src={BlogArrowLeft} alt="arrow" />
            </div>
            <div className="post-date-container">
                <div className="post-month">{props.month}</div>
                <div className="post-date">{props.date}</div>
            </div>
            <div className="post-content">
                <h3 className="post-title">{props.title}</h3>
                <p className="post-description">{props.description}</p>
            </div>
        </div>
    )

}