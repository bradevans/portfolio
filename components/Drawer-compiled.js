'use strict';

window.ML = window.ML || {};

var sass = require('./Sass/Drawer.sass');
var Button = require('./Button.jsx');
var Select = require('./Select.jsx');
var MultipleSelect = require('./MultipleSelect.jsx');
var CheckUncheckAll = require('./CheckUncheckAll.jsx');
var CheckboxList = require('./CheckboxList.jsx');
var TextInput = require('./TextInput.jsx');
var TextArea = require('./TextArea.jsx');
var AdvancedSearchModal = require('./AdvancedSearchModal');

var DrawerHandle = React.createClass({
    displayName: 'DrawerHandle',


    /*$(window).on('scroll load', function(){
        handle.css('top', function(){
            return scroll_top() > 50 ? '0px' : nav_height - scroll_top() + 'px';
        });
    });*/

    getInitialState: function getInitialState() {
        return {
            //shown: true
        };
    },
    render: function render() {

        var drawerHandleClass = sass.handleContainer + ' row';

        return React.createElement(
            'div',
            { className: drawerHandleClass, style: { display: this.props.display } },
            React.createElement(
                'div',
                { className: sass.handle, onClick: this.props.clickHandler },
                React.createElement('i', { className: 'fa fa-chevron-down' })
            )
        );
    }
});

var Drawer = React.createClass({
    displayName: 'Drawer',
    propTypes: {},
    getInitialState: function getInitialState() {
        return {
            drawerShown: false,
            handleShown: true,
            searchShown: false,
            styles: {
                background: {
                    zIndex: -1,
                    opacity: 0
                },
                loader: {
                    display: 'none'
                },
                reports: {
                    display: 'none',
                    opacity: 0
                },
                form: {
                    display: 'block',
                    opacity: 1
                },
                container: {
                    marginTop: -100 + 'vh'
                }
            }
        };
    },
    getDefaultProps: function getDefaultProps() {
        var Drawer = document.getElementById('Drawer');

        return {
            dashId: Drawer.dataset.dashId,
            widgetId: document.getElementById('WidgetId').dataset.widget,
            slug: Drawer.dataset.slug
        };
    },
    componentDidMount: function componentDidMount() {
        $.ajax({
            type: "GET",
            url: Urls.edit_widget(),
            data: { "widget_id": this.props.widgetId, "dash_id": this.props.dashId },
            success: function (data) {
                this.setState({ form: data }, function () {
                    console.log(this.state);
                });
            }.bind(this),
            error: function (xhr, status, err) {
                console.error(xhr);
                console.error(status);
                console.error(err);
            }.bind(this)
        });
    },
    openDrawer: function openDrawer() {
        this.setState({
            drawerShown: true,
            handleShown: false,
            searchShown: false,
            styles: {
                background: {
                    zIndex: 1,
                    opacity: 0.4
                },
                loader: {
                    display: 'none'
                },
                reports: {
                    display: 'none',
                    opacity: 0
                },
                form: {
                    display: 'block',
                    opacity: 1
                },
                container: {
                    marginTop: 0 + 'vh'
                }
            }
        });
    },
    closeDrawer: function closeDrawer() {
        this.setState({
            drawerShown: false,
            handleShown: true,
            searchShown: false,
            styles: {
                background: {
                    zIndex: -1,
                    opacity: 0
                },
                loader: {
                    display: 'none'
                },
                reports: {
                    display: 'none',
                    opacity: 0
                },
                form: {
                    display: 'block',
                    opacity: 1
                },
                container: {
                    marginTop: -100 + 'vh'
                }
            }
        });
    },
    toggleSearch: function toggleSearch() {
        this.setState({ searchShown: !this.state.searchShown });
    },
    render: function render() {
        var drawerClasses = 'row ' + sass.drawer,
            styles = this.state.styles,
            handle = this.state.handleShown === true ? 'block' : 'none';

        return React.createElement(
            'div',
            null,
            React.createElement(AdvancedSearchModal, { data: window.Globals.adv_search, searchShown: this.state.searchShown,
                closeSearch: this.toggleSearch }),
            React.createElement('div', { className: sass.background, style: styles.background }),
            React.createElement(
                'div',
                { className: 'col-sm-12' },
                React.createElement(DrawerHandle, { clickHandler: this.openDrawer, display: handle }),
                React.createElement(
                    'div',
                    { className: drawerClasses, style: styles.container, id: 'drawer-container' },
                    React.createElement(
                        'div',
                        { className: sass.loader, style: styles.loader },
                        React.createElement('i', { className: 'fa fa-spinner fa-spin' })
                    ),
                    React.createElement(
                        'div',
                        { style: styles.reports, id: 'drawer-reports' },
                        React.createElement(
                            'div',
                            { className: 'col-sm-12 centered' },
                            React.createElement(
                                'h2',
                                { className: 'underline' },
                                'Choose a Marketing Intelligence Dashboard or a Report'
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12 tpad sixty' },
                                React.createElement(
                                    'h5',
                                    null,
                                    'My Reports'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12 tpad thirty', 'data-my-report-buttons': true },
                                React.createElement('hr', { className: 't-margin b-margin thirty' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(
                                    'h5',
                                    null,
                                    'Intelligence Dashboards'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12 tpad thirty', 'data-dashboard-buttons': true },
                                React.createElement('hr', { className: 't-margin b-margin thirty' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(
                                    'h5',
                                    null,
                                    'Reports'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12 tpad thirty', 'data-report-buttons': true },
                                React.createElement('hr', { className: 't-margin b-margin thirty' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-12' },
                                React.createElement(Button, { label: 'Cancel', className: 'btn big orange no-over pull-right',
                                    onClick: this.closeDrawer })
                            )
                        )
                    ),
                    React.createElement(
                        'div',
                        { id: 'drawer-form', className: sass.form, style: styles.form },
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-3' },
                                React.createElement(Button, { className: 'compact', icon: 'fa-arrow-circle-left', label: 'Reports' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-6 centered' },
                                React.createElement(
                                    'h2',
                                    { className: 'underline' },
                                    'Customize your Report'
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-3' },
                                React.createElement(Button, { className: 'compact pull-right', icon: 'fa-undo', label: 'Reset' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-12 tpad sixty r-align' },
                                React.createElement(Button, { className: 'compact purple', label: 'Advanced Search',
                                    onClick: this.toggleSearch })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row tpad twenty' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-3' },
                                React.createElement(Select, { data: window.Globals.brand_groups, className: 'fill-up' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-3' },
                                React.createElement(MultipleSelect, { data: window.Globals.brands, label: 'Brands' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-2' },
                                React.createElement(Select, { data: window.Globals.organic_or_owned, className: 'fill-up' })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-4' },
                                React.createElement(MultipleSelect, { data: window.Globals.metrics, label: 'Metrics' })
                            )
                        ),
                        React.createElement(
                            'div',
                            { className: 'row tpad fifty' },
                            React.createElement(
                                'div',
                                { className: 'col-sm-6' },
                                React.createElement(
                                    'h6',
                                    { className: 'inline' },
                                    'Sources'
                                ),
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-12' },
                                        React.createElement(CheckUncheckAll, { checkall: 'sources' })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-6 bpad thirty' },
                                        React.createElement(CheckboxList, { data: window.Globals.sources_a })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-6' },
                                        React.createElement(CheckboxList, { data: window.Globals.sources_b })
                                    )
                                )
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-2' },
                                React.createElement(
                                    'h6',
                                    { className: 'inline' },
                                    'Key Fields'
                                ),
                                React.createElement(CheckUncheckAll, { checkall: 'key-fields' }),
                                React.createElement(CheckboxList, { data: window.Globals.key_fields })
                            ),
                            React.createElement(
                                'div',
                                { className: 'col-sm-4' },
                                React.createElement(
                                    'div',
                                    { className: 'row' },
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-12' },
                                        React.createElement(TextInput, { className: 'fill-up', placeholder: 'Required to save a report',
                                            limit: '30', label: 'Report', data: window.Globals.name })
                                    ),
                                    React.createElement(
                                        'div',
                                        { className: 'col-sm-12 tpad fifty' },
                                        React.createElement(TextArea, { data: window.Globals.description, limit: '150', label: 'Description',
                                            placeholder: 'Optional', className: 'fill-up no-resize', rows: '3',
                                            cols: '' })
                                    )
                                )
                            )
                        ),
                        React.createElement('hr', null),
                        React.createElement(
                            'div',
                            { className: 'row' },
                            React.createElement('div', { className: 'col-sm-4 tpad fifty' }),
                            React.createElement(
                                'div',
                                { className: 'col-sm-8 tpad thirty r-align' },
                                React.createElement(Button, { className: 'big orange no-over', label: 'Cancel', onClick: this.closeDrawer }),
                                React.createElement(Button, { className: 'big purple no-over', label: 'Run' }),
                                React.createElement(Button, { className: 'big purple no-over', label: 'Save' }),
                                React.createElement(Button, { className: 'big purple no-over', label: 'Save a Copy' })
                            )
                        )
                    )
                )
            )
        );
    }
});

module.exports = Drawer;

//# sourceMappingURL=Drawer-compiled.js.map