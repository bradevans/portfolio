'use strict';

var CharacterLimit = React.createClass({
    displayName: 'CharacterLimit',

    render: function render() {

        var count = this.props.owner.state.count,
            limit = +this.props.limit,
            color = count >= limit ? 'red' : '#999999';

        if (limit > 0) {
            return React.createElement(
                'span',
                null,
                React.createElement(
                    'span',
                    { className: 'pull-right', style: { color: color } },
                    React.createElement(
                        'span',
                        null,
                        count
                    ),
                    '/',
                    React.createElement(
                        'span',
                        null,
                        limit
                    )
                )
            );
        } else {
            return null;
        }
    }
});

module.exports = CharacterLimit;

//# sourceMappingURL=CharacterLimit-compiled.js.map