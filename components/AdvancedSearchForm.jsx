var CheckboxList = require('./CheckboxList');
var Select = require('./Select');
var Text = require('./Text');

var AdvancedSearchForm = React.createClass({
    displayName: 'AdvancedSearchForm',
    propTypes: {
        data: React.PropTypes.object
    },
    getInitialState: function(){
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
    render: function() {

        var data = this.props.data,
            margin_top = '42px';

        //console.log('state: ', this.state);

        return (
            <div>
                <h2 className="inline" id="">Advanced Filters</h2>
                <Select data={data.any_or_all} className="pull-right"/>
                <hr/>
                <div className="row">
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-12 b-margin thirty">
                                <h3 className="inline">Key Fields</h3>
                                <button className="btn simple l-margin ten" type="button" data-add-field="key">
                                    Add Filter
                                </button>
                            </div>
                        </div>

                        <div className="row">
                            <div className="col-sm-4">Filter by</div>
                            <div className="col-sm-4">Filter</div>
                            <div className="col-sm-4">Text</div>
                        </div>

                        <hr className="subtle"/>

                        <div data-field-rows="key">
                            <div data-field-row="0">
                                <div className="row">
                                    <div className="col-sm-4 col-sm-offset-8">
                                        <CheckboxList data={data.key_fields_props.case_sensitive} className="small"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <Select data={data.key_fields_props.filter_by} className="fill-up"/>
                                    </div>

                                    <div className="col-sm-4">
                                        <Select data={data.key_fields_props.filter} className="fill-up"/>
                                    </div>

                                    <div className="col-sm-4">
                                        <Text data={data.key_fields_props.text_field} className="fill-up"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        &nbsp;&nbsp;
                                        <button className="btn simple" type="button" data-remove-field="key">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="col-sm-6">
                        <div className="row">
                            <div className="col-sm-12 b-margin thirty">
                                <h3 className="inline">Metric Fields</h3>
                                <button className="btn simple l-margin ten" type="button" data-add-field="metric">
                                    Add Filter
                                </button>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-4">Filter by</div>
                            <div className="col-sm-4">Filter</div>
                            <div className="col-sm-4">Value</div>
                        </div>

                        <hr className="subtle"/>

                        <div data-field-rows="metric" style={{marginTop: margin_top}}>
                            <div data-field-row="0">
                                <div className="row"></div>
                                <div className="row">
                                    <div className="col-sm-4">
                                        <Select data={data.metrics_props.filter_by} className="fill-up"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <Select data={data.metrics_props.filter} className="fill-up"/>
                                    </div>
                                    <div className="col-sm-4">
                                        <Text data={data.metrics_props.text_field} className="fill-up"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-12">
                                        &nbsp;&nbsp;
                                        <button className="btn simple" type="button" data-remove-field="metric">
                                            Delete
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr/>
            </div>
        );
    }
});

module.exports = AdvancedSearchForm;
