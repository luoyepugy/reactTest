'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('./stylesheets/Hello.css');

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var List = function (_React$Component) {
    _inherits(List, _React$Component);

    function List(props) {
        _classCallCheck(this, List);

        var _this = _possibleConstructorReturn(this, (List.__proto__ || Object.getPrototypeOf(List)).call(this, props));

        _this.state = {
            loading: true,
            error: null,
            data: null
        };
        return _this;
    }

    _createClass(List, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this2 = this;

            this.props.promise.then(function (value) {
                return _this2.setState({ loading: false, data: value });
            }, function (error) {
                return _this2.setState({ loading: false, error: error });
            });
        }
    }, {
        key: 'render',
        value: function render() {
            if (this.state.loading) {
                return _react2.default.createElement(
                    'span',
                    null,
                    'Loading...'
                );
            } else if (this.state.error != null) {
                return _react2.default.createElement(
                    'span',
                    null,
                    'Error: ',
                    this.state.error.message
                );
            } else {
                var repos = this.state.data.items;
                var repoList = repos.map(function (repo, index) {
                    return _react2.default.createElement(
                        'li',
                        { key: index },
                        _react2.default.createElement(
                            'a',
                            { href: repo.html_url },
                            repo.name
                        ),
                        '(',
                        repo.stargazers_count,
                        ' stars)',
                        _react2.default.createElement('br', null),
                        repo.descriotion
                    );
                });
                return _react2.default.createElement(
                    'h1',
                    null,
                    'most popular javascript projects in Github'
                ), _react2.default.createElement(
                    'ol',
                    null,
                    repoList
                );
            }
        }
    }]);

    return List;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(List, { promise: $.getJSON('https://api.github.com/search/repositories?q=javascript&sort=stars') }), document.getElementById('root'));

// class User extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             username: '',
//             lastGistUrl: ''
//         };
//     }
//     componentDidMount() {
//         this._isMounted = true;
//         $.get(this.props.source, (result) => {
//             var lastGist = result[0];
//             // console.log(result[0]);
//             if(this._isMounted) {
//                 this.setState({
//                     username: lastGist.owner.login,
//                     lastGistUrl: lastGist.html_url
//                 });
//             }
//         });
//     }
//     componentWillUnmount() {
//         this._isMounted = false;
//     }
//     render() {
//         return (
//             <div>
//                 {this.state.username} 's last gist is
//                 <a href={this.state.lastGistUrl}>here</a>
//             </div>
//         )
//     }
// }

// ReactDOM.render(
//     <User source="https://api.github.com/users/octocat/gists" />,
//     document.getElementById('root')
// );


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