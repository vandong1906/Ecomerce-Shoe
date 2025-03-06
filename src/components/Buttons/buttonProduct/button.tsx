import './index.css'

export const ButtonComponent = ({element ,title}:{element:string,title:string}) => {
    return (
        <button className={element}> <span>
            {title} 
            </span></button>
    )
}