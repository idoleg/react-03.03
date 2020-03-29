store.dispatch({type: "MYTYPE", payload: { наши данные }});
const reducer = function (store, action) {
    switch (action.type) {
        case "MYTYPE": console.log('тестовый action')
    }
    //возвращаем в store то, что нам нужно.
    //Здесь - store не меняется
    return store; 
}

// Импортируем созданный action
import {sendMessage} from '~/store/actions/chatAction';
import { connect } from 'react-redux';
import { render } from 'react-dom';
import { bindActionCreators } from 'redux';
// Вызываем action как функцию!
store.dispatch(sendMessage())

export class MyComponent {

}



const mapDispatchToProps = (dispatch) => bindActionCreators({
    //Передаем наши action
    sendMessage
}, dispatch)

this.props.sendMessage( наши параметры );


const mergeProps = (stateProps, dispatchProps, ownProps) => {
    //Доступ к собственным данным компонента
    const {id} = ownProps.match.params;

    //Задаем новую функцию для передачи в props компонента
    const handleSendMessage = ({name, content}) => {
        //Доступ к данным из mapDispatchToProps (actions)
        dispatchProps.sendMessage(id, name, content);

    }
    return {
        //Доступ к данным из mapStateToProps
        messages: stateProps.messages,
        handleSendMessage
    }
}

export default connect(mapStateToProps, mapDispatchToProps, mergeProps) (MyComponent)

