import React from 'react';

export default class MyAjax extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/" + this.props.id)
      .then(res => res.json())
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    if (error) {
      return <div > Error: {error.message} < /div>;
        } else if (!isLoaded) {
            return <div > Loading... < /div>;
        } else {
            return ( <ul>
                <li > Nome: {items.name}{ console.log(items)} </li>
                <li > Usuário: {items.login} </li>
                <li > Bio: {items.bio} </li>
              </ul>
            );
        }
    }
}