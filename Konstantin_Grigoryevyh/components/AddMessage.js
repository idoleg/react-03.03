export default class Form extends React.Component {

    constructor(props) {
        super(props);

        this.updateMessageList = this.props.updateMessageList;
        this.sendMessage = this.sendMessage.bind(this);
    }

    sendMessage(e) {
        e.preventDefault();
        this.updateMessageList({ name: 'senior012', content: 'Нормально' })
    }

    render() {
        return (
            <form onSubmit={this.sendMessage}>
                <button type="submit">Send</button>
            </form>
        );
    }
}