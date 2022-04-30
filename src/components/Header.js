import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className = 'header'>
            <h1>{title}</h1>
            <Button  color = '#333'  text = {showAdd ? 'close' : 'add'} onClick = {onAdd}/>

        </header>
    )
}

Header.defaultProps = {
    title : "Task Tracker"
}

Header.propTypes = {
    title : PropTypes.string.isRequired,
}

// const headingStyle = {
//     color : 'red',
//     backgroundColor : '#333'
// }

export default Header
