
import './Hello.css';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';


class User extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            lastGistUrl: ''
        };
    }
    componentDidMount() {
        this._isMounted = true;
        $.get(this.props.source, (result) => {
            var lastGist = result[0];
            // console.log(result[0]);
            if(this._isMounted) {
                this.setState({
                    username: lastGist.owner.login,
                    lastGistUrl: lastGist.html_url
                });
            }
        });
    }
    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (
            <div>
                {this.state.username} 's last gist is
                <a href={this.state.lastGistUrl}>here</a>
            </div>
        )
    }
}

ReactDOM.render(
    <User source="https://api.github.com/users/octocat/gists" />,
    document.getElementById('root')
);


// class Hello extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             opacity: 1
//         };
//     }
//     componentDidMount() {
//         setInterval(() => {
//             var opacity = this.state.opacity;
//             opacity -= .05;
//             if(opacity < .1) {
//                 opacity = 1;
//             }
//             this.setState({opacity: opacity});
//         }, 1000);
//     }
//     render() {
//         return (
//             <div style={{opacity: this.state.opacity}} className="like">
//                 hello {this.props.name}
//             </div>
//         )
//     }
// }

// export default Hello;

// ReactDOM.render(
//     <Hello />,
//     document.getElementById('root')
// );

// class Input extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: 'hello!'
//         }
//     }
//     handleChange(event) {
//         this.setState({value: event.target.value});
//     }
//     render() {
//         var value = this.state.value;
//         return(
//             <div>
//                 <input type="text" value={value} onChange={this.handleChange.bind(this)} />
//             </div>
//         )
//     }
// }

// export default Input;

// ReactDOM.render(
//     <Input />,
//     document.getElementById('root')
// );




// class Hello extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             liked: false
//         }
//     }
//     handleClick() {
//         this.setState({liked: !this.state.liked})
//     }
//     render() {
//         var text = this.state.liked ? 'like': 'haven\'t liked',
//             status = this.state.liked ? 'like': 'hate';
//         return (
//             <p onClick={this.handleClick.bind(this)} className={status}>
//                 you {text} this click to toggle 
//             </p>
//         )
//     }
// }

// export default Hello;

// ReactDOM.render(
//     <Hello />,
//     document.getElementById('root')
// );

// class Hello extends React.Component {
//     handleClick() {
//         console.log('efw');
//         this.refs.myText.focus();
//     }
//     render() {
//         return(
//             <div className="test2">
//                 helfo
//                 <input type="text" ref="myText" />
//                 <input type="button" className="test" value="foucs the text input" onClick={this.handleClick.bind(this)} />
//             </div>
//         );
//     }
// }

// export default Hello;

// ReactDOM.render(
//     <Hello />,
//     document.getElementById('root')
// );

// class Hello extends React.Component {
//     render() {
//         return <div>{this.props.title}</div>;
//     }
// }
// Hello.defaultProps = {
//     title: 'hello11'
// };
// Hello.propTypes = {
//     title: React.PropTypes.string.isRequired
// };

// export default Hello;

// ReactDOM.render(
// 	<Hello />,
// 	document.getElementById('root')
// );
