import style from './card.module.css'

export const Card = (props) => {
    return(
        <div>
            <h2>{props.name}</h2>
            <p>{props.desc}</p>
            <img className={style.imgStyle} src={props.img} alt={props.name} />
        </div>
    )
}

// export const Card2 = ({name, desc, img}) => {
//     return(
//         <div>
//             <h2>{name}</h2>
//             <p>{desc}</p>
//             <img className={style.imgStyle} src={img} alt={name} />
//         </div>
//     )
// }


