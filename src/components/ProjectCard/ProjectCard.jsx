import './ProjectCard.scss';

export default function ProjectCard({title, image, description}){
    return(
        <div className='do-card'>
            <h3 className='do-card_title'>{title}</h3>
            <img className='do-card_img' src={image}/>
            <p className='do-card_description'>{description}</p>
        </div>
    )
}