import { Link } from 'react-router-dom'
import BlogArrowLeft from '../../assets/img/blog-arrow.png'

export function ProgressLeft(props) {

    return (
        <Link to={props.url} className="post-excerpt post-excerpt-left">

            <div className="post-content">
                <Link to={props.url} className="post-title">{props.title}</Link>
                <p className="post-description"> {props.description} </p>
            </div>
            <div className="post-date-container">
                <div className="post-month"> {props.month} </div>
                <div className="post-date"> {props.date} </div>
            </div>

            <div className="post-arrow-container rotate-arrow">
                <img src={BlogArrowLeft} alt="arrow" />
            </div>
        </Link>
    )

}