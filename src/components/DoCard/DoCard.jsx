import './DoCard.scss';

export default function DoCard({title, icon, description}){
    return(
        <div className='do-card'>
            <img className='do-card_img' src={icon}/>
            <h3 className='do-card_title'>{title}</h3>
            <p className='do-card_description'>{description}</p>
        </div>
    )
};