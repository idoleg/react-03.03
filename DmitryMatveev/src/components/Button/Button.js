import React,{Component} from 'react';

export default class Button extends Component {
  render() {
    const { text } = this.props;
    return (
      <button className="content__submit" type="submit">
        {text}
      </button>
    );
  }
}
