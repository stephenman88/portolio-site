import './ProjectCard.scss';

export default function ProjectCard({title, image, description, popupImages}){

    function showPopup(popupImages){
        //Implement show popup
    }

    return(
        <div className='do-card' onClick={()=>{showPopup(popupImages)}}>
            <h3 className='do-card_title'>{title}</h3>
            <img className='do-card_img' src={image}/>
            <p className='do-card_description'>{description}</p>
        </div>
    )
}