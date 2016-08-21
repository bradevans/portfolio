var Text = React.createClass({
    render: function() {

        var data = this.props.data;

        return (
            <input type="text" className={this.props.className} id={data.id} placeholder={data.placeholder} />
        );
    }
});

module.exports = Text;
