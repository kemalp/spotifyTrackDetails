import './Input.scss'

const Input = props => {

    return (
        <div className={"Input" + (props.icon ? ' Input__Icon' : '')}>
            {props.icon}
            <input {...props} />
        </div>
    )
}

export default Input