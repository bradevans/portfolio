'use strict';

var CheckboxList = require('./CheckboxList');
var Select = require('./Select');
var Text = require('./Text');

var AdvancedSearchForm = React.createClass({
    displayName: 'AdvancedSearchForm',
    propTypes: {
        data: React.PropTypes.object
    },
    getInitialState: function getInitialState() {
        return {
            key_fields: {
                fields: [],
                types: [],
                values: []
            },
            metric_fields: {
                fields: [],
                types: [],
                values: []
            },
            search_boolean: ''
        };
    },
    render: function render() {

        var data = this.props.data,
            margin_top = '42px';

        //console.log('state: ', this.state);

        return React.createElement(
            'div',
            null,
            React.createElement(
                'h2',
                { className: 'inline', id: '' },
                'Advanced Filters'
            ),
            React.createElement(Select, { data: data.any_or_all, className: 'pull-right' }),
            React.createElement('hr', null),
            React.createElement(
                'div',
                { className: 'row' },
                React.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-12 b-margin thirty' },
                            React.createElement(
                                'h3',
                                { className: 'inline' },
                                'Key Fields'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn simple l-margin ten', type: 'button', 'data-add-field': 'key' },
                                'Add Filter'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Filter by'
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Filter'
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Text'
                        )
                    ),
                    React.createElement('hr', { className: 'subtle' }),
                    React.createElement(
                        'div',
                        { 'data-field-rows': 'key' },
                        React.createElement(
                            'div',
                            { 'data-field-row': '0' },
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4 col-sm-offset-8' },
                                    React.createElement(CheckboxList, { data: data.key_fields_props.case_sensitive, className: 'small' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Select, { data: data.key_fields_props.filter_by, className: 'fill-up' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Select, { data: data.key_fields_props.filter, className: 'fill-up' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Text, { data: data.key_fields_props.text_field, className: 'fill-up' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-12' },
                                    '  ',
                                    React.createElement(
                                        'button',
                                        { className: 'btn simple', type: 'button', 'data-remove-field': 'key' },
                                        'Delete'
                                    )
                                )
                            )
                        )
                    )
                ),
                React.createElement(
                    'div',
                    { className: 'col-sm-6' },
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-12 b-margin thirty' },
                            React.createElement(
                                'h3',
                                { className: 'inline' },
                                'Metric Fields'
                            ),
                            React.createElement(
                                'button',
                                { className: 'btn simple l-margin ten', type: 'button', 'data-add-field': 'metric' },
                                'Add Filter'
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { className: 'row' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Filter by'
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Filter'
                        ),
                        React.createElement(
                            'div',
                            { className: 'col-sm-4' },
                            'Value'
                        )
                    ),
                    React.createElement('hr', { className: 'subtle' }),
                    React.createElement(
                        'div',
                        { 'data-field-rows': 'metric', style: { marginTop: margin_top } },
                        React.createElement(
                            'div',
                            { 'data-field-row': '0' },
                            React.createElement('div', { className: 'row' }),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Select, { data: data.metrics_props.filter_by, className: 'fill-up' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Select, { data: data.metrics_props.filter, className: 'fill-up' })
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-4' },
                                    React.createElement(Text, { data: data.metrics_props.text_field, className: 'fill-up' })
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'row' },
                                React.createElement(
                                    'div',
                                    { className: 'col-sm-12' },
                                    '  ',
                                    React.createElement(
                                        'button',
                                        { className: 'btn simple', type: 'button', 'data-remove-field': 'metric' },
                                        'Delete'
                                    )
                                )
                            )
                        )
                    )
                )
            ),
            React.createElement('hr', null)
        );
    }
});

module.exports = AdvancedSearchForm;

//# sourceMappingURL=AdvancedSearchForm-compiled.js.map