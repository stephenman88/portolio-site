import './DoCard.scss';

export default function DoCard({title, icon, className}){
    return(
        <div className={'do-card ' + className}>
            <img className='do-card_img' src={icon}/>
            <h3 className='do-card_title'>{title}</h3>
        </div>
    )
};