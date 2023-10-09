import './Card.css'

const Card = (props) => {
    const classes = 'card ' + props.className;

    return <div className={classes}>{props.children}</div>;

    /**
     * props.children is a reserve keyword in React.
     * The value of this prop are the components that is wrap/contained within this Card component.
     * **/
}

export default Card;