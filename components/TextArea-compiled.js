'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var CharacterLimit = require('./CharacterLimit');

var TextArea = React.createClass({
    displayName: 'TextArea',

    getInitialState: function getInitialState() {
        return {
            value: this.props.data.value,
            count: this.props.data.value.length,
            owner: this
        };
    },
    handleChange: function handleChange(e) {
        if (this.props.limit > 0) {
            if (e.target.value.length <= this.props.limit) {
                this.setState({
                    value: e.target.value,
                    count: e.target.value.length
                });
            }
        } else {
            this.setState({
                value: e.target.value,
                count: e.target.value.length
            });
        }
    },
    render: function render() {

        var data = this.props.data;

        return React.createElement(
            'div',
            null,
            React.createElement(
                'label',
                { htmlFor: data.id },
                this.props.label
            ),
            React.createElement(CharacterLimit, _extends({ limit: +this.props.limit }, this.state)),
            React.createElement('textarea', {
                placeholder: this.props.placeholder,
                id: data.id,
                name: data.name,
                value: this.state.value,
                className: this.props.className,
                rows: this.props.rows,
                cols: this.props.cols,
                onChange: this.handleChange })
        );
    }
});

module.exports = TextArea;

//# sourceMappingURL=TextArea-compiled.js.map