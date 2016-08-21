/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/static/components/bundle/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	window.Globals = {
	    adv_search: {
	        any_or_all: {
	            id: 'any_or_all',
	            options: [{ value: 'and', text: 'ALL of these filters are true' }, { value: 'or', text: 'ANY of these filters are true' }]
	        },
	        key_fields_props: {
	            case_sensitive: [{
	                label: 'Case sensitive',
	                id: 'key-field-case-',
	                name: undefined,
	                checkall_part: undefined,
	                checkbox_part: undefined,
	                checkbox_group: undefined,
	                checked: false
	            }],
	            filter_by: {
	                id: 'key-field-filter-by-',
	                options: [{ value: 'author', text: 'Author' }, { value: 'domain', text: 'Domain' }, { value: 'title', text: 'Title' }, { value: 'keywords', text: 'Keyword' }, { value: 'entities', text: 'Entity' }, { value: 'taxonomies-1', text: 'Topic Level 1' }, { value: 'taxonomies-2', text: 'Topic Level 2' }, { value: 'taxonomies-3', text: 'Topic Level 3' }, { value: 'taxonomies-4', text: 'Topic Level 4' }, { value: 'taxonomies-5', text: 'Topic Level 5' }]
	            },
	            filter: {
	                id: 'key-field-filter-',
	                options: [{ value: 'notcontain', text: 'Does not contain' }, { value: 'contains', text: 'Contains' }, { value: 'equals', text: 'Equals' }, { value: 'starts', text: 'Starts with' }, { value: 'ends', text: 'Ends with' }, { value: 'notnull', text: 'Is not empty' }]
	            },
	            text_field: {
	                id: 'key-field-text-',
	                placeholder: ''
	            }
	        },
	        metrics_props: {
	            filter_by: {
	                id: 'metric-filter-by-',
	                options: [{ value: 'interactions', text: 'Eng.' }, { value: 'reach', text: 'Reach' }, { value: 'posts', text: 'Posts' }]
	            },
	            filter: {
	                id: 'metric-filter-',
	                options: [{ value: 'eq', text: '=' }, { value: 'gt', text: '>' }, { value: 'lt', text: '<' }, { value: 'gte', text: '>=' }, { value: 'lte', text: '<=' }]
	            },
	            text_field: {
	                id: 'metric-text-',
	                placeholder: ''
	            }
	        }
	    },
	    sources_a: [{
	        label: 'Facebook',
	        id: 'sources-fb',
	        name: 'widget_sources',
	        value: '2',
	        checkall_part: 'sources',
	        checkbox_part: undefined,
	        checkbox_group: 'facebook',
	        checked: false
	    }, {
	        label: 'Status',
	        id: 'sources-fb-status',
	        name: 'widget_sources',
	        value: '6',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Photo',
	        id: 'sources-fb-photo',
	        name: 'widget_sources',
	        value: '7',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Video',
	        id: 'sources-fb-video',
	        name: 'widget_sources',
	        value: '8',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Link',
	        id: 'sources-fb-link',
	        name: 'widget_sources',
	        value: '9',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Offer',
	        id: 'sources-fb-offer',
	        name: 'widget_sources',
	        value: '10',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Comment',
	        id: 'sources-fb-comment',
	        name: 'widget_sources',
	        value: '11',
	        checkall_part: 'sources',
	        checkbox_part: 'facebook',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Twitter',
	        id: 'sources-twitter',
	        name: 'widget_sources',
	        value: '3',
	        checkall_part: 'sources',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Disqus',
	        id: 'sources-disqus',
	        name: 'widget_sources',
	        value: '4',
	        checkall_part: 'sources',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Tumblr',
	        id: 'sources-tumblr',
	        name: 'widget_sources',
	        value: '5',
	        checkall_part: 'sources',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }],
	    sources_b: [{
	        label: 'Websites',
	        id: 'sources-websites',
	        name: 'widget_sources',
	        value: '1',
	        checkall_part: 'sources',
	        checkbox_part: undefined,
	        checkbox_group: 'websites',
	        checked: false
	    }, {
	        label: 'Traditional Media',
	        id: 'sources-trad-media',
	        name: 'widget_categories',
	        value: '9',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Digital Media',
	        id: 'sources-dig-media',
	        name: 'widget_categories',
	        value: '10',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Coupons/Deals',
	        id: 'sources-coupons',
	        name: 'widget_categories',
	        value: '13',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'E-Commerce',
	        id: 'sources-ecom',
	        name: 'widget_categories',
	        value: '72',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Portals/Search',
	        id: 'sources-portals',
	        name: 'widget_categories',
	        value: '70',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Other',
	        id: 'sources-other',
	        name: 'widget_categories',
	        value: 'other',
	        checkall_part: 'sources',
	        checkbox_part: 'websites',
	        checkbox_group: undefined,
	        checked: false
	    }],
	    key_fields: [{
	        label: 'Author',
	        id: 'Author',
	        name: 'widget_columns',
	        value: 'author',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Title',
	        id: 'Title',
	        name: 'widget_columns',
	        value: 'title',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Brand',
	        id: 'Brand',
	        name: 'widget_columns',
	        value: 'brand',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Category',
	        id: 'Category',
	        name: 'widget_columns',
	        value: 'category',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Source',
	        id: 'Source',
	        name: 'widget_columns',
	        value: 'source',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Domain',
	        id: 'Domain',
	        name: 'widget_columns',
	        value: 'domain',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Date',
	        id: 'Date',
	        name: 'widget_columns',
	        value: 'date',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Owned',
	        id: 'Owned',
	        name: 'widget_columns',
	        value: 'owned',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Engaged',
	        id: 'Engaged',
	        name: 'widget_columns',
	        value: 'engaged',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Topic',
	        id: 'Topic',
	        name: 'widget_columns',
	        value: 'topic',
	        checkall_part: 'key-fields',
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }],
	    brands: [{
	        label: 'Benoit Faucon',
	        id: 'benoit-faucon',
	        name: 'brands',
	        value: '0',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'ISIS and KSA',
	        id: 'isis-and-ksa',
	        name: 'brands',
	        value: '1',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'KSA',
	        id: 'ksa',
	        name: 'brands',
	        value: '2',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Saudi and Christians',
	        id: 'saudi-and-christians',
	        name: 'brands',
	        value: '3',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Saudi and Islam',
	        id: 'saudi-and-islam',
	        name: 'brands',
	        value: '4',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }],
	    brand_groups: {
	        label: 'Brand Group',
	        id: 'brand-group',
	        name: 'brand-group',
	        options: [{
	            value: '318',
	            text: 'Facebook Pages'
	        }, {
	            value: '319',
	            text: 'Iran'
	        }, {
	            value: '320',
	            text: 'ISIS'
	        }, {
	            value: '321',
	            text: 'KSA'
	        }, {
	            value: '322',
	            text: 'NOW'
	        }]
	    },
	    organic_or_owned: {
	        label: 'Organic or Owned',
	        id: 'organic-or-owned',
	        name: 'organic-or-owned',
	        options: [{
	            value: '0',
	            text: 'Both'
	        }, {
	            value: '1',
	            text: 'Organic'
	        }, {
	            value: '2',
	            text: 'Owned'
	        }]
	    },
	    metrics: [{
	        label: 'Posts',
	        id: 'posts',
	        name: 'metrics',
	        value: '0',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Reach',
	        id: 'reach',
	        name: 'metrics',
	        value: '1',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Engagement',
	        id: 'engagement',
	        name: 'metrics',
	        value: '2',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Sentiment',
	        id: 'sentiment',
	        name: 'metrics',
	        value: '3',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Likes',
	        id: 'likes',
	        name: 'metrics',
	        value: '4',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Comments',
	        id: 'comments',
	        name: 'metrics',
	        value: '5',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }, {
	        label: 'Shares',
	        id: 'shares',
	        name: 'metrics',
	        value: '6',
	        checkall_part: undefined,
	        checkbox_part: undefined,
	        checkbox_group: undefined,
	        checked: false
	    }],
	    name: {
	        limit: 30,
	        id: "report-name",
	        name: "report-name",
	        value: ""
	    },
	    description: {
	        limit: 80,
	        id: "report-description",
	        name: "report-description",
	        value: ""
	    }
	};

	var Drawer = __webpack_require__(1);

	ReactDOM.render(React.createElement(Drawer, null), document.getElementById('Drawer'));

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	window.ML = window.ML || {};

	var sass = __webpack_require__(2);
	var Button = __webpack_require__(3);
	var Select = __webpack_require__(4);
	var MultipleSelect = __webpack_require__(5);
	var CheckUncheckAll = __webpack_require__(8);
	var CheckboxList = __webpack_require__(7);
	var TextInput = __webpack_require__(10);
	var TextArea = __webpack_require__(12);
	var AdvancedSearchModal = __webpack_require__(13);

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

/***/ },
/* 2 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"handleContainer":"Drawer__handleContainer___TW6E4","handle":"Drawer__handle___1FOna","background":"Drawer__background___kQLCX","loader":"Drawer__loader___2vd2i","drawer":"Drawer__drawer___3OiDQ","form":"Drawer__form___3uSbR","centered":"Drawer__centered___3GC1r"};

/***/ },
/* 3 */
/***/ function(module, exports) {

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

/***/ },
/* 4 */
/***/ function(module, exports) {

	"use strict";

	var Select = React.createClass({
	    displayName: "Select",

	    render: function render() {

	        var data = this.props.data,
	            options;

	        options = data.options.map(function (i) {
	            return React.createElement(
	                "option",
	                { value: i.value },
	                i.text
	            );
	        });

	        return React.createElement(
	            "span",
	            null,
	            React.createElement(
	                "label",
	                { htmlFor: data.id },
	                data.label
	            ),
	            React.createElement(
	                "select",
	                { className: this.props.className, id: data.id, name: data.name },
	                options
	            )
	        );
	    }
	});

	module.exports = Select;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var sass = __webpack_require__(6);

	var CheckboxList = __webpack_require__(7);

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

/***/ },
/* 6 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"button":"MultipleSelect__button___1Arp3","container":"MultipleSelect__container___1wOO1","dropdown":"MultipleSelect__dropdown___LVTb-"};

/***/ },
/* 7 */
/***/ function(module, exports) {

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

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(9);

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

/***/ },
/* 9 */
/***/ function(module, exports) {

	module.exports = React;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var CharacterLimit = __webpack_require__(11);

	var TextField = React.createClass({
	    displayName: "TextField",

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
	            "div",
	            null,
	            React.createElement(
	                "label",
	                { htmlFor: data.id },
	                this.props.label
	            ),
	            React.createElement(CharacterLimit, _extends({ limit: +this.props.limit }, this.state)),
	            React.createElement("input", {
	                type: "text",
	                placeholder: this.props.placeholder,
	                id: data.id,
	                name: data.name,
	                value: this.state.value,
	                className: this.props.className,
	                onChange: this.handleChange })
	        );
	    }
	});

	module.exports = TextField;

/***/ },
/* 11 */
/***/ function(module, exports) {

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

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var CharacterLimit = __webpack_require__(11);

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

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var sass = __webpack_require__(14);

	var AdvancedSearchForm = __webpack_require__(15);
	var Button = __webpack_require__(3);

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

/***/ },
/* 14 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin
	module.exports = {"background":"AdvancedSearch__background___2PwkY","container":"AdvancedSearch__container___SR1D8"};

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var CheckboxList = __webpack_require__(7);
	var Select = __webpack_require__(4);
	var Text = __webpack_require__(16);

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

/***/ },
/* 16 */
/***/ function(module, exports) {

	"use strict";

	var Text = React.createClass({
	    displayName: "Text",

	    render: function render() {

	        var data = this.props.data;

	        return React.createElement("input", { type: "text", className: this.props.className, id: data.id, placeholder: data.placeholder });
	    }
	});

	module.exports = Text;

/***/ }
/******/ ]);