'use strict';

var sass = require('./Sass/AdvancedSearch.sass');

var AdvancedSearchForm = require('./AdvancedSearchForm.jsx');
var Button = require('./Button.jsx');

var AdvancedSearchModal = React.createClass({
    displayName: 'AdvancedSearchModal',

    render: function render() {

        var searchShown = this.props.searchShown === true ? 'block' : 'none';

        return React.createElement(
            'div',
            null,
            React.createElement('div', { className: sass.background, style: { display: searchShown } }),
            React.createElement(
                'div',
                { className: 'col-sm-12' },
                React.createElement(
                    'div',
                    { className: sass.container, style: { display: searchShown } },
                    React.createElement(AdvancedSearchForm, { data: this.props.data }),
                    React.createElement(
                        'div',
                        { className: 'col-sm-8 l-align' },
                        React.createElement(
                            'span',
                            null,
                            React.createElement('i', { className: 'fa fa-warning text-orange' }),
                            ' — You must save or run the report for Advanced Filters to take effect'
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'col-sm-4 r-align' },
                        React.createElement(Button, { className: 'compact orange', label: 'Cancel', onClick: this.props.closeSearch }),
                        React.createElement(Button, { className: 'compact purple', label: 'Apply' })
                    )
                )
            )
        );
    }
});

module.exports = AdvancedSearchModal;

//# sourceMappingURL=AdvancedSearchModal-compiled.js.map