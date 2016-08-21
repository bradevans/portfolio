var CheckboxList = React.createClass({
    displayName: 'CheckboxList',
    propTypes: {
        data: React.PropTypes.array,
        onChange: React.PropTypes.func
    },
    getInitialState: function(){
        return {
            data: this.props.data || []
        };
    },
    handleItemChange: function(e){
        var new_data = [],
            target = document.querySelector('#' + e.target.dataset.id),
            checkbox_group = target.dataset.checkboxGroup,
            checkbox_part = target.dataset.checkboxPart,
            checked,
            group = document.querySelector(
                    'input[type="checkbox"][data-checkbox-group=' + checkbox_part + ']') || undefined;

        if(e.target.nodeName.toLowerCase() === 'span'){
            target.checked = !target.checked;
        }

        checked = document.querySelectorAll(
            'input[type="checkbox"]:checked[data-checkbox-part=' + checkbox_part + ']').length;

        if(checkbox_group){
            target.parentNode.classList.remove('indeterminate');
            this.handleGroupChange(checkbox_group, target.checked);
            return;
        } else {
            let part_length = document
                    .querySelectorAll('input[type="checkbox"][data-checkbox-part=' + checkbox_part + ']').length;

            if(group){
                if(checked === 0){
                    group.parentNode.classList.remove('indeterminate');
                    group.checked = false;
                } else if(checked < part_length){
                    group.parentNode.classList.add('indeterminate');
                    group.checked = true;
                } else if(checked === part_length){
                    group.parentNode.classList.remove('indeterminate');
                    group.checked = true;
                }
            }
        }

        for(let i of this.state.data){
            if(i.value === e.target.dataset.value){
                i.checked = target.checked;
            }

            new_data.push(i);
        }

        if(!checkbox_group && group){
            for(let i of this.state.data){
                let j = 0;

                if(i.checkbox_group === checkbox_part){
                    new_data[j].checked = group.checked;
                }

                j++;
            }
        }

        this.setState({data: new_data});

        if(this.props.childEvent) {
            this.props.childEvent(this.state);
        }
    },
    handleGroupChange: function(checkbox_group, checked){
        document.querySelector('input[type="checkbox"][data-checkbox-group=' + checkbox_group + ']').checked = checked;
        document.querySelectorAll(
            'input[type="checkbox"][data-checkbox-part=' + checkbox_group + ']').checked = checked;

        var new_data = [];

        for(let i of this.state.data){
            if(i.checkbox_part === checkbox_group || i.checkbox_group === checkbox_group){
                i.checked = checked;
                new_data.push(i);
            } else {
                new_data.push(i);
            }
        }

        this.setState({data: new_data});
    },
    render: function() {
        var checkboxes,
            checkbox_class;

        checkboxes = this.state.data.map(function(i){

            if(i.checkbox_part !== undefined){
                checkbox_class = "ml-checkbox indent " + this.props.className;
            } else {
                checkbox_class = "ml-checkbox " + this.props.className;
            }

            return (
                <div className={checkbox_class}>
                    <input type="checkbox"
                           checked={i.checked ? true : false}
                           name={i.name}
                           id={i.id}
                           value={i.value}
                           data-id={i.id}
                           data-value={i.value}
                           data-checkall-part={i.checkall_part}
                           data-checkbox-part={i.checkbox_part}
                           data-checkbox-group={i.checkbox_group}
                           onChange={this.handleItemChange}/>
                    <label htmlFor={i.id} />
                    <span className="fake-label"
                          data-id={i.id}
                          data-value={i.value}
                          data-checkbox-part={i.checkbox_part}
                          data-checkbox-group={i.checkbox_group}
                          onClick={this.handleItemChange}>
                        {i.label}
                    </span>
                </div>
            );
        }.bind(this));

        //console.log('state: ', this.state);

        return (<div>{checkboxes}</div>);
	}
});

module.exports = CheckboxList;
