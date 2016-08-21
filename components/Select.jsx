var Select = React.createClass({
    render: function() {

        var data = this.props.data,
            options;

        options = data.options.map(function(i){
            return (
                <option value={i.value}>{i.text}</option>
            );
        });

        return (
            <span>
                <label htmlFor={data.id}>{data.label}</label>
                <select className={this.props.className} id={data.id} name={data.name}>
                    {options}
                </select>
            </span>
        );
    }
});

module.exports = Select;
