'use strict';

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var Icon = React.createClass({
    displayName: 'Icon',

    render: function render() {
        if (this.props.classes === undefined) {
            return null;
        } else {
            return React.createElement('i', { className: this.props.classes });
        }
    }
});

var Confirm = React.createClass({
    displayName: 'Confirm',

    render: function render() {

        var className = this.props.owner.state.showConfirmation === true ? 'confirm' : 'confirm transparent',
            zIndex = this.props.owner.state.showConfirmation === true ? 2 : 0;

        return React.createElement(
            'span',
            { className: className, style: { zIndex: zIndex } },
            React.createElement(
                'span',
                { className: 'sure' },
                'Are you sure?'
            ),
            React.createElement('br', null),
            React.createElement(
                'span',
                { className: 'yes', onClick: this.props.deleteReport },
                'Yes'
            ),
            React.createElement(
                'span',
                { className: 'no', onClick: this.props.hideConfirmation },
                'No'
            )
        );
    }
});

var Options = React.createClass({
    displayName: 'Options',

    buttonContent: function buttonContent() {

        var className = this.props.owner.state.showOptions === false ? 'options transparent' : 'options';

        if (this.props.options === 'three') {
            return React.createElement(
                'span',
                null,
                React.createElement(
                    'span',
                    { className: className },
                    React.createElement(
                        'span',
                        { style: { paddingRight: '20px' } },
                        'Edit'
                    ),
                    React.createElement(
                        'span',
                        { style: { paddingRight: '20px' } },
                        'Run'
                    ),
                    React.createElement(
                        'span',
                        { onClick: this.props.showConfirmation },
                        'Delete'
                    )
                ),
                React.createElement(Confirm, _extends({}, this.props.owner.state, {
                    hideConfirmation: this.props.hideConfirmation,
                    deleteReport: this.props.deleteReport }))
            );
        } else if (this.props.options === 'two') {
            return React.createElement(
                'span',
                { className: className },
                React.createElement(
                    'span',
                    { style: { paddingRight: '20px' } },
                    'Edit'
                ),
                React.createElement(
                    'span',
                    null,
                    'Run'
                )
            );
        } else if (this.props.options === 'one') {
            return React.createElement(
                'span',
                { className: className },
                React.createElement(
                    'span',
                    null,
                    'Run'
                )
            );
        }
    },
    render: function render() {
        if (this.props.options === undefined) {
            return null;
        } else {
            return React.createElement(
                'span',
                null,
                this.buttonContent()
            );
        }
    }
});

var Deleting = React.createClass({
    displayName: 'Deleting',

    render: function render() {

        if (this.props.owner.state.showDeleting === false) {
            return null;
        } else {
            return React.createElement(
                'div',
                { style: { textAlign: "center" } },
                React.createElement('i', { className: 'fa fa-spinner fa-spin' })
            );
        }
    }
});

var DisplayName = React.createClass({
    displayName: 'DisplayName',

    render: function render() {

        var className = this.props.owner.state.showDisplayName === false ? 'transparent' : '';

        return React.createElement(
            'span',
            { className: className },
            this.props.label
        );
    }
});

var Button = React.createClass({
    displayName: 'Button',
    propTypes: {
        classes: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        options: React.PropTypes.string
    },
    getInitialState: function getInitialState() {
        return {
            showDisplayName: true,
            showConfirmation: false,
            showDeleting: false,
            showOptions: false,
            owner: this
        };
    },
    mouseEnter: function mouseEnter() {
        if (this.props.options === undefined) {
            return;
        }

        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: false,
            showOptions: true
        });
    },
    mouseLeave: function mouseLeave() {
        this.setState({
            showDisplayName: true,
            showConfirmation: false,
            showDeleting: false,
            showOptions: false
        });
    },
    showConfirmation: function showConfirmation() {
        this.setState({
            showDisplayName: false,
            showConfirmation: true,
            showDeleting: false,
            showOptions: false
        });
    },
    hideConfirmation: function hideConfirmation() {
        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: false,
            showOptions: true
        });
    },
    deleteReport: function deleteReport() {
        console.log('TODO: ajax to delete report');

        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: true,
            showOptions: false
        });
    },
    render: function render() {

        var className = 'btn ' + this.props.className;

        if (this.state.showDeleting === true) {

            className += ' no-over';

            return React.createElement(
                'button',
                { type: 'button', className: className },
                React.createElement(Deleting, this.state),
                React.createElement(DisplayName, _extends({}, this.state, { label: this.props.label }))
            );
        } else {

            var iconClass = this.props.icon ? 'fa ' + this.props.icon : undefined;

            return React.createElement(
                'button',
                { type: 'button',
                    className: className,
                    onClick: this.props.onClick,
                    onMouseEnter: this.mouseEnter,
                    onMouseLeave: this.mouseLeave },
                React.createElement(Icon, { classes: iconClass }),
                React.createElement(Options, _extends({}, this.state, {
                    options: this.props.options,
                    showConfirmation: this.showConfirmation,
                    hideConfirmation: this.hideConfirmation,
                    deleteReport: this.deleteReport })),
                React.createElement(DisplayName, _extends({}, this.state, { label: this.props.label }))
            );
        }
    }
});

module.exports = Button;

//# sourceMappingURL=Button-compiled.js.map