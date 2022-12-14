const ListItem = (props) => {
    return (
        <article className="list">
            <img src={props.img1} alt={props.img1Alt} />
            <p>{props.text}</p>
            <img src={props.img2} alt={props.img2Alt}/>
        </article>
    );
}

export default ListItem;