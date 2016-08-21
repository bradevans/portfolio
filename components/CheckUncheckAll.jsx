var React = require('react');

var CheckUncheckAll = React.createClass({
    displayName: 'CheckUncheckAll',
    propTypes: {
        onClick: React.PropTypes.func
    },
    handleClick: function(e){
        var checkall_group = this.props.checkall,
            group = document.querySelectorAll('[data-checkall-part=' + checkall_group + ']'),
            checked = 0,
            unchecked = 0;

        function toggleEm(checked){
            for(let i of group){
                i.checked = checked;
            }
        }

        for(let i of group){
            if(i.checked){
                checked++;
            } else {
                unchecked++;
            }
        }

        if(checked === 0){
            toggleEm(true);
        } else if (unchecked === 0){
            toggleEm(false);
        } else if(checked >= unchecked){
            toggleEm(true);
        } else if(checked < unchecked) {
            toggleEm(false);
        }
    },
    render: function() {
        return (
            <button type="button" className="btn simple tpad bpad twenty" onClick={this.handleClick}>
                Check/Uncheck All
            </button>
        );
	}
});

module.exports = CheckUncheckAll;
