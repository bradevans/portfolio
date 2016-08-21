var sass = require('./Sass/AdvancedSearch.sass');

var AdvancedSearchForm = require('./AdvancedSearchForm.jsx');
var Button = require('./Button.jsx');

var AdvancedSearchModal = React.createClass({
    render: function(){

        var searchShown = this.props.searchShown === true ? 'block' : 'none';
        
        return (
            <div>
                <div className={sass.background} style={{display: searchShown}}></div>
                <div className="col-sm-12">
                    <div className={sass.container} style={{display: searchShown}}>

                        <AdvancedSearchForm data={this.props.data}/>

                        <div className="col-sm-8 l-align">
                          <span>
                            <i className="fa fa-warning text-orange"></i>
                              &nbsp;&mdash;&nbsp;You must save or run the report for Advanced Filters to take effect
                          </span>
                        </div>
                        <div className="col-sm-4 r-align">
                            <Button className="compact orange" label="Cancel" onClick={this.props.closeSearch}/>
                            <Button className="compact purple" label="Apply"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
});

module.exports = AdvancedSearchModal;
