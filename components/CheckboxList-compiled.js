'use strict';

var CheckboxList = React.createClass({
    displayName: 'CheckboxList',
    propTypes: {
        data: React.PropTypes.array,
        onChange: React.PropTypes.func
    },
    getInitialState: function getInitialState() {
        return {
            data: this.props.data || []
        };
    },
    handleItemChange: function handleItemChange(e) {
        var new_data = [],
            target = document.querySelector('#' + e.target.dataset.id),
            checkbox_group = target.dataset.checkboxGroup,
            checkbox_part = target.dataset.checkboxPart,
            checked,
            group = document.querySelector('input[type="checkbox"][data-checkbox-group=' + checkbox_part + ']') || undefined;

        if (e.target.nodeName.toLowerCase() === 'span') {
            target.checked = !target.checked;
        }

        checked = document.querySelectorAll('input[type="checkbox"]:checked[data-checkbox-part=' + checkbox_part + ']').length;

        if (checkbox_group) {
            target.parentNode.classList.remove('indeterminate');
            this.handleGroupChange(checkbox_group, target.checked);
            return;
        } else {
            var part_length = document.querySelectorAll('input[type="checkbox"][data-checkbox-part=' + checkbox_part + ']').length;

            if (group) {
                if (checked === 0) {
                    group.parentNode.classList.remove('indeterminate');
                    group.checked = false;
                } else if (checked < part_length) {
                    group.parentNode.classList.add('indeterminate');
                    group.checked = true;
                } else if (checked === part_length) {
                    group.parentNode.classList.remove('indeterminate');
                    group.checked = true;
                }
            }
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
            for (var _iterator = this.state.data[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var _i = _step.value;

                if (_i.value === e.target.dataset.value) {
                    _i.checked = target.checked;
                }

                new_data.push(_i);
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

        if (!checkbox_group && group) {
            var _iteratorNormalCompletion2 = true;
            var _didIteratorError2 = false;
            var _iteratorError2 = undefined;

            try {
                for (var _iterator2 = this.state.data[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                    var i = _step2.value;

                    var j = 0;

                    if (i.checkbox_group === checkbox_part) {
                        new_data[j].checked = group.checked;
                    }

                    j++;
                }
            } catch (err) {
                _didIteratorError2 = true;
                _iteratorError2 = err;
            } finally {
                try {
                    if (!_iteratorNormalCompletion2 && _iterator2.return) {
                        _iterator2.return();
                    }
                } finally {
                    if (_didIteratorError2) {
                        throw _iteratorError2;
                    }
                }
            }
        }

        this.setState({ data: new_data });

        if (this.props.childEvent) {
            this.props.childEvent(this.state);
        }
    },
    handleGroupChange: function handleGroupChange(checkbox_group, checked) {
        document.querySelector('input[type="checkbox"][data-checkbox-group=' + checkbox_group + ']').checked = checked;
        document.querySelectorAll('input[type="checkbox"][data-checkbox-part=' + checkbox_group + ']').checked = checked;

        var new_data = [];

        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
            for (var _iterator3 = this.state.data[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
                var i = _step3.value;

                if (i.checkbox_part === checkbox_group || i.checkbox_group === checkbox_group) {
                    i.checked = checked;
                    new_data.push(i);
                } else {
                    new_data.push(i);
                }
            }
        } catch (err) {
            _didIteratorError3 = true;
            _iteratorError3 = err;
        } finally {
            try {
                if (!_iteratorNormalCompletion3 && _iterator3.return) {
                    _iterator3.return();
                }
            } finally {
                if (_didIteratorError3) {
                    throw _iteratorError3;
                }
            }
        }

        this.setState({ data: new_data });
    },
    render: function render() {
        var checkboxes, checkbox_class;

        checkboxes = this.state.data.map(function (i) {

            if (i.checkbox_part !== undefined) {
                checkbox_class = "ml-checkbox indent " + this.props.className;
            } else {
                checkbox_class = "ml-checkbox " + this.props.className;
            }

            return React.createElement(
                'div',
                { className: checkbox_class },
                React.createElement('input', { type: 'checkbox',
                    checked: i.checked ? true : false,
                    name: i.name,
                    id: i.id,
                    value: i.value,
                    'data-id': i.id,
                    'data-value': i.value,
                    'data-checkall-part': i.checkall_part,
                    'data-checkbox-part': i.checkbox_part,
                    'data-checkbox-group': i.checkbox_group,
                    onChange: this.handleItemChange }),
                React.createElement('label', { htmlFor: i.id }),
                React.createElement(
                    'span',
                    { className: 'fake-label',
                        'data-id': i.id,
                        'data-value': i.value,
                        'data-checkbox-part': i.checkbox_part,
                        'data-checkbox-group': i.checkbox_group,
                        onClick: this.handleItemChange },
                    i.label
                )
            );
        }.bind(this));

        //console.log('state: ', this.state);

        return React.createElement(
            'div',
            null,
            checkboxes
        );
    }
});

module.exports = CheckboxList;

//# sourceMappingURL=CheckboxList-compiled.js.map