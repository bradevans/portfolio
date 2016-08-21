var CharacterLimit = require('./CharacterLimit');

var TextArea = React.createClass({
    getInitialState: function(){
        return {
            value: this.props.data.value,
            count: this.props.data.value.length,
            owner: this
        }
    },
    handleChange: function(e){
        if(this.props.limit > 0){
            if(e.target.value.length <= this.props.limit){
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
    render: function() {

        var data = this.props.data;

        return (
            <div>
                <label htmlFor={data.id}>
                    {this.props.label}
                </label>
                <CharacterLimit limit={+this.props.limit} {...this.state}/>
                <textarea
                    placeholder={this.props.placeholder}
                    id={data.id}
                    name={data.name}
                    value={this.state.value}
                    className={this.props.className}
                    rows={this.props.rows}
                    cols={this.props.cols}
                    onChange={this.handleChange}/>
            </div>
        );
    }
});

module.exports = TextArea;
