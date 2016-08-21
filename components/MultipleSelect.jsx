var sass = require('./Sass/MultipleSelect.sass');

var CheckboxList = require('./CheckboxList');

var MultipleSelect = React.createClass({
    getInitialState: function(){
        return {
            dropdownDisplay: 'none',
            selected: 'None'
        };
    },
    handleClick: function(){
        if(this.state.dropdownDisplay === 'none'){
            this.setState({dropdownDisplay: 'block'});
        } else {
            this.setState({dropdownDisplay: 'none'});
        }
    },
    blur: function(){
        setTimeout(function(){
            this.setState({dropdownDisplay: 'none'});
        }.bind(this), 200);
    },
    getSelected: function(childState){
        var count = 0,
            selected = [];

        for(let i of childState.data){
            if(i.checked === true){
                count++;
                selected.push(i.label);
            }
        }

        count = count === 0
            ? 'None selected'
            : count === childState.data.length
            ? 'All selected'
            : count <= 3
            ? selected.join(', ')
            : count + ' of ' + childState.data.length + ' selected';

        this.setState({selected: count});
    },
    render: function() {
        return (
            <div className={sass.container} onMouseLeave={this.blur}>
                <label htmlFor={this.props.label}>{this.props.label}</label>
                <button id={this.props.label} type="button" className={sass.button} onClick={this.handleClick}>
                    <span>{this.state.selected}</span>
                </button>
                <div className={sass.dropdown} style={{display: this.state.dropdownDisplay}}>
                    <CheckboxList data={this.props.data} childEvent={this.getSelected}/>
                </div>
            </div>
        );
    }
});

module.exports = MultipleSelect;
