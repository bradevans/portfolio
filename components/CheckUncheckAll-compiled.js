'use strict';

var React = require('react');

var CheckUncheckAll = React.createClass({
    displayName: 'CheckUncheckAll',
    propTypes: {
        onClick: React.PropTypes.func
    },
    handleClick: function handleClick(e) {
        var checkall_group = this.props.checkall,
            group = document.querySelectorAll('[data-checkall-part=' + checkall_group + ']'),
            checked = 0,
            unchecked = 0;

        function toggleEm(checked) {
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
                for (var _iterator = group[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                    var i = _step.value;

                    i.checked = checked;
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
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
            for (var _iterator2 = group[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
                var i = _step2.value;

                if (i.checked) {
                    checked++;
                } else {
                    unchecked++;
                }
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

        if (checked === 0) {
            toggleEm(true);
        } else if (unchecked === 0) {
            toggleEm(false);
        } else if (checked >= unchecked) {
            toggleEm(true);
        } else if (checked < unchecked) {
            toggleEm(false);
        }
    },
    render: function render() {
        return React.createElement(
            'button',
            { type: 'button', className: 'btn simple tpad bpad twenty', onClick: this.handleClick },
            'Check/Uncheck All'
        );
    }
});

module.exports = CheckUncheckAll;

//# sourceMappingURL=CheckUncheckAll-compiled.js.map