window.ML = window.ML || {};

var sass = require('./Sass/Drawer.sass');
var Button = require('./Button.jsx');
var Select = require('./Select.jsx');
var MultipleSelect = require ('./MultipleSelect.jsx');
var CheckUncheckAll = require('./CheckUncheckAll.jsx');
var CheckboxList= require('./CheckboxList.jsx');
var TextInput = require('./TextInput.jsx');
var TextArea = require('./TextArea.jsx');
var AdvancedSearchModal = require('./AdvancedSearchModal');

var DrawerHandle = React.createClass({

    /*$(window).on('scroll load', function(){
        handle.css('top', function(){
            return scroll_top() > 50 ? '0px' : nav_height - scroll_top() + 'px';
        });
    });*/

    getInitialState: function(){
        return {
            //shown: true
        }
    },
    render: function(){

        var drawerHandleClass = sass.handleContainer + ' row';

        return (
            <div className={drawerHandleClass} style={{display: this.props.display}}>
                <div className={sass.handle} onClick={this.props.clickHandler}>
                    <i className="fa fa-chevron-down"></i>
                </div>
            </div>
        );
    }
});

var Drawer = React.createClass({
    displayName: 'Drawer',
    propTypes: {

    },
    getInitialState: function () {
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
        }
    },
    getDefaultProps: function(){
        var Drawer = document.getElementById('Drawer');

        return {
            dashId: Drawer.dataset.dashId,
            widgetId: document.getElementById('WidgetId').dataset.widget,
            slug: Drawer.dataset.slug
        }
    },
    componentDidMount: function(){
        $.ajax({
            type: "GET",
            url: Urls.edit_widget(),
            data: { "widget_id": this.props.widgetId, "dash_id": this.props.dashId },
            success: function(data) {
                this.setState({form: data}, function(){ console.log(this.state)});
            }.bind(this),
                error: function(xhr, status, err) {
                console.error(xhr);
                console.error(status);
                console.error(err);
            }.bind(this)
        });
    },
    openDrawer: function(){
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
        })
    },
    closeDrawer: function(){
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
    toggleSearch: function(){
        this.setState({searchShown: !this.state.searchShown})
    },
    render: function () {
        var drawerClasses = 'row ' + sass.drawer,
            styles = this.state.styles,
            handle = this.state.handleShown === true ? 'block' : 'none';

        return (
            <div>
                <AdvancedSearchModal data={window.Globals.adv_search} searchShown={this.state.searchShown}
                                     closeSearch={this.toggleSearch}/>
                
                <div className={sass.background} style={styles.background}></div>
                <div className="col-sm-12">
                    <DrawerHandle clickHandler={this.openDrawer} display={handle}/>
                    <div className={drawerClasses} style={styles.container} id="drawer-container">
                        <div className={sass.loader} style={styles.loader}>
                            <i className="fa fa-spinner fa-spin"></i>
                        </div>

                        {/*   DRAWER REPORT BUTTONS   */}

                        <div style={styles.reports} id="drawer-reports">
                            <div className="col-sm-12 centered">
                                <h2 className="underline">Choose a Marketing Intelligence Dashboard or a Report</h2>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 tpad sixty">
                                    <h5>My Reports</h5>
                                </div>
                                <div className="col-sm-12 tpad thirty" data-my-report-buttons>
                                    {/*
                                    {% for dash in user_created_db_list %}
                                    {% with color='green' count='three' report_id=dash.report_id dash_id=dash.id slug=brandgroup.slug text=dash.display_name %}
                                    {% include 'form_elements/option_btn.html' %}
                                    {% endwith %}
                                    {% endfor %}
                                    */}
                                    <hr className="t-margin b-margin thirty" />
                                </div>

                                <div className="col-sm-12">
                                    <h5>Intelligence Dashboards</h5>
                                </div>
                                <div className="col-sm-12 tpad thirty" data-dashboard-buttons>
                                    {/*
                                    {% for dash in dash_list %}
                                    {% if not dash.is_report %}
                                    {% with color='purple' count='one' report_id=dash.report_id dash_id=dash.id slug=brandgroup.slug text=dash.display_name %}
                                    {% include 'form_elements/option_btn.html' %}
                                    {% endwith %}
                                    {% endif %}
                                    {% endfor %}
                                    */}
                                    <hr className="t-margin b-margin thirty" />
                                </div>

                                <div className="col-sm-12">
                                    <h5>Reports</h5>
                                </div>
                                <div className="col-sm-12 tpad thirty" data-report-buttons>
                                    {/*
                                    {% for dash in dash_list %}
                                    {% if dash.is_report %}
                                    {% with color='purple' count='two' report_id=dash.report_id dash_id=dash.id slug=brandgroup.slug text=dash.display_name %}
                                    {% include 'form_elements/option_btn.html' %}
                                    {% endwith %}
                                    {% endif %}
                                    {% endfor %}
                                    */}
                                    <hr className="t-margin b-margin thirty" />
                                </div>

                                <div className="col-sm-12">
                                    <Button label="Cancel" className="btn big orange no-over pull-right"
                                            onClick={this.closeDrawer}/>
                                </div>
                            </div>
                        </div>

                        {/*   DRAWER REPORT FORM   */}

                        <div id="drawer-form" className={sass.form} style={styles.form}>
                            <div className="row">
                                <div className="col-sm-3">
                                    <Button className="compact" icon="fa-arrow-circle-left" label="Reports"/>
                                </div>
                                <div className="col-sm-6 centered">
                                    <h2 className="underline">Customize your Report</h2>
                                </div>
                                <div className="col-sm-3">
                                    <Button className="compact pull-right" icon="fa-undo" label="Reset"/>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-sm-12 tpad sixty r-align">
                                    <Button className="compact purple" label="Advanced Search"
                                            onClick={this.toggleSearch}/>
                                </div>
                            </div>
                            <div className="row tpad twenty">
                                <div className="col-sm-3">
                                    <Select data={window.Globals.brand_groups} className="fill-up"/>
                                </div>
                                <div className="col-sm-3">
                                    <MultipleSelect data={window.Globals.brands} label="Brands"/>
                                </div>
                                <div className="col-sm-2">
                                    <Select data={window.Globals.organic_or_owned} className="fill-up"/>
                                </div>
                                <div className="col-sm-4">
                                    <MultipleSelect data={window.Globals.metrics} label="Metrics"/>
                                </div>
                            </div>
                            <div className="row tpad fifty">
                                <div className="col-sm-6">
                                    <h6 className="inline">Sources</h6>
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <CheckUncheckAll checkall="sources"/>
                                        </div>
                                        <div className="col-sm-6 bpad thirty">
                                            <CheckboxList data={window.Globals.sources_a}/>
                                        </div>
                                        <div className="col-sm-6">
                                            <CheckboxList data={window.Globals.sources_b}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-2">
                                    <h6 className="inline">Key Fields</h6>
                                    <CheckUncheckAll checkall="key-fields"/>
                                    <CheckboxList data={window.Globals.key_fields}/>
                                </div>
                                <div className="col-sm-4">
                                    <div className="row">
                                        <div className="col-sm-12">
                                            <TextInput className="fill-up" placeholder="Required to save a report"
                                                       limit="30" label="Report" data={window.Globals.name}/>
                                        </div>
                                        <div className="col-sm-12 tpad fifty">
                                            <TextArea data={window.Globals.description} limit="150" label="Description"
                                                      placeholder="Optional" className="fill-up no-resize" rows="3"
                                                      cols=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <hr/>
                            <div className="row">
                                <div className="col-sm-4 tpad fifty"></div>
                                <div className="col-sm-8 tpad thirty r-align">
                                    <Button className="big orange no-over" label="Cancel" onClick={this.closeDrawer}/>
                                    <Button className="big purple no-over" label="Run"/>
                                    <Button className="big purple no-over" label="Save"/>
                                    <Button className="big purple no-over" label="Save a Copy"/>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        );
    }
});

module.exports = Drawer;
