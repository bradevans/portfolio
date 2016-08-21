var CharacterLimit = React.createClass({
    render: function(){

        var count = this.props.owner.state.count,
            limit = +this.props.limit,
            color = count >= limit ? 'red' : '#999999';

        if(limit > 0){
            return (
                <span>
                    <span className="pull-right" style={{color: color}}>
                        <span>{count}</span>/<span>{limit}</span>
                    </span>
                </span>
            );
        } else {
            return null;
        }
    }
});

module.exports = CharacterLimit;