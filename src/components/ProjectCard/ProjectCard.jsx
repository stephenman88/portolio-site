import './ProjectCard.scss';

export default function ProjectCard({title, image, description, popupImages, className}){

    function showPopup(popupImages){
        //Implement show popup
    }

    return(
        <div className={'project-card ' + className } onClick={()=>{showPopup(popupImages)}}>
            <h3 className='project-card_title'>{title}</h3>
            <img className='project-card_img' src={image}/>
            <p className='project-card_description'>{description}</p>
        </div>
    )
}