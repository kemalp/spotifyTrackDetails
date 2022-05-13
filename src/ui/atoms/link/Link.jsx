import './Link.scss'

import { Link as RouterLink } from "react-router-dom";

const Link = props => (
    props.href ? <a href={props.href} {...props}>{props.children}</a> : <RouterLink {...props}>{props.children}</RouterLink>
)

export default Link