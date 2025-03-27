const CardContainer = (props) => {
    const {children} = props;
    const style = {
        border: 'Blue solid 2px',
        padding: '20px'
    }

    return (
        <div style={style}>
            {children}
        </div>
    )
}

export default CardContainer;