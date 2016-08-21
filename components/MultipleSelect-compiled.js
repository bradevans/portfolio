'use strict';

var sass = require('./Sass/MultipleSelect.sass');

var CheckboxList = require('./CheckboxList');

var MultipleSelect = React.createClass({
    displayName: 'MultipleSelect',

    getInitialState: function getInitialState() {
        return {
            dropdownDisplay: 'none',
            selected: 'None'
        };
    },
    handleClick: function handleClick() {
        if (this.state.dropdownDisplay === 'none') {
            this.setState({ dropdownDisplay: 'block' });
        } else {
            this.setState({ dropdownDisplay: 'none' });
        }
    },
    blur: function blur() {
        setTimeout(function () {
            this.setState({ dropdownDisplay: 'none' });
        }.bind(this), 200);
    },
    getSelected: function getSelected(childState) {
        var count = 0,
            selected = [];

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = childState.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var i = _step.value;

                if (i.checked === true) {
                    count++;
                    selected.push(i.label);
                }
            }
        } catch (err) {
            _didIteratorError = true;
            _iteratorError = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                    _iterator.return();
                }
            } finally {
                if (_didIteratorError) {
                    throw _iteratorError;
                }
            }
        }

        count = count === 0 ? 'None selected' : count === childState.data.length ? 'All selected' : count <= 3 ? selected.join(', ') : count + ' of ' + childState.data.length + ' selected';

        this.setState({ selected: count });
    },
    render: function render() {
        return React.createElement(
            'div',
            { className: sass.container, onMouseLeave: this.blur },
            React.createElement(
                'label',
                { htmlFor: this.props.label },
                this.props.label
            ),
            React.createElement(
                'button',
                { id: this.props.label, type: 'button', className: sass.button, onClick: this.handleClick },
                React.createElement(
                    'span',
                    null,
                    this.state.selected
                )
            ),
            React.createElement(
                'div',
                { className: sass.dropdown, style: { display: this.state.dropdownDisplay } },
                React.createElement(CheckboxList, { data: this.props.data, childEvent: this.getSelected })
            )
        );
    }
});

module.exports = MultipleSelect;

//# sourceMappingURL=MultipleSelect-compiled.js.map