import React from 'react';
import PropTypes from 'prop-types';


export const Message = ({ name, content }) => {
    return <li><strong>{name}:</strong> {content}</li>
}

// Message.propTypes = {
//     name: PropTypes.string.isRequired,
//     text: PropTypes.string.isRequired,
// };



// export class Message extends Component {

//     static propTypes = {
//         name: PropTypes.string.isRequired,
//         text: PropTypes.string.isRequired,
//     };

//     render() {
//         return <div>
//             <strong>{this.props.name}: </strong>
//             { this.props.text }
//             </div>
//     }
// }
