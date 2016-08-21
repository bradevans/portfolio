var Icon = React.createClass({
    render: function(){
        if(this.props.classes === undefined){
            return null;
        } else {
            return (
                <i className={this.props.classes}></i>
            );
        }
    }
});

var Confirm = React.createClass({
    render: function(){

        var className = this.props.owner.state.showConfirmation === true ? 'confirm' : 'confirm transparent',
            zIndex = this.props.owner.state.showConfirmation === true ? 2 : 0;

        return (
            <span className={className} style={{zIndex: zIndex}}>
                <span className="sure">Are you sure?</span><br/>
                <span className="yes" onClick={this.props.deleteReport}>Yes</span>
                <span className="no" onClick={this.props.hideConfirmation}>No</span>
            </span>
        );
    }
});

var Options = React.createClass({
    buttonContent: function(){

        var className = this.props.owner.state.showOptions === false ? 'options transparent' : 'options';

        if(this.props.options === 'three') {
            return (
                <span>
                    <span className={className}>
                        <span style={{paddingRight: '20px'}}>Edit</span>
                        <span style={{paddingRight: '20px'}}>Run</span>
                        <span onClick={this.props.showConfirmation}>Delete</span>
                    </span>
                    <Confirm {...this.props.owner.state}
                        hideConfirmation={this.props.hideConfirmation}
                        deleteReport={this.props.deleteReport}/>
                </span>
            );
        } else if(this.props.options === 'two'){
            return (
                <span className={className}>
                    <span style={{paddingRight: '20px'}}>Edit</span>
                    <span>Run</span>
                </span>
            );

        } else if(this.props.options === 'one'){
            return (
                <span className={className}>
                    <span>Run</span>
                </span>
            );
        }
    },
    render: function () {
        if(this.props.options === undefined){
            return null;
        } else {
            return (<span>{this.buttonContent()}</span>);
        }
    }
});

var Deleting = React.createClass({
    render: function(){

        if(this.props.owner.state.showDeleting === false){
            return null;
        } else {
            return (
                <div style={{textAlign: "center"}}>
                    <i className="fa fa-spinner fa-spin"></i>
                </div>
            );
        }
    }
});

var DisplayName = React.createClass({
    render: function(){

        var className = this.props.owner.state.showDisplayName === false ? 'transparent' : '';

        return (
            <span className={className}>{this.props.label}</span>
        );
    }
});

var Button = React.createClass({
    displayName: 'Button',
    propTypes: {
        classes: React.PropTypes.string.isRequired,
        icon: React.PropTypes.string,
        label: React.PropTypes.string.isRequired,
        options: React.PropTypes.string
    },
    getInitialState: function(){
        return {
            showDisplayName: true,
            showConfirmation: false,
            showDeleting: false,
            showOptions: false,
            owner: this
        };
    },
    mouseEnter: function() {
        if(this.props.options === undefined){return;}

        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: false,
            showOptions: true
        });
    },
    mouseLeave: function(){
        this.setState({
            showDisplayName: true,
            showConfirmation: false,
            showDeleting: false,
            showOptions: false
        });
    },
    showConfirmation: function(){
        this.setState({
            showDisplayName: false,
            showConfirmation: true,
            showDeleting: false,
            showOptions: false
        });
    },
    hideConfirmation: function(){
        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: false,
            showOptions: true
        });
    },
    deleteReport: function(){
        console.log('TODO: ajax to delete report');

        this.setState({
            showDisplayName: false,
            showConfirmation: false,
            showDeleting: true,
            showOptions: false
        });
    },
    render: function(){

        var className = 'btn ' + this.props.className;

        if(this.state.showDeleting === true){

            className += ' no-over';

            return (
                <button type="button" className={className}>
                    <Deleting {...this.state}/>
                    <DisplayName {...this.state} label={this.props.label}/>
                </button>
            );
        } else {

            var iconClass = this.props.icon ? 'fa ' + this.props.icon : undefined;

            return (
                <button type="button"
                        className={className}
                        onClick={this.props.onClick}
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}>
                    <Icon classes={iconClass}/>
                    <Options {...this.state}
                        options={this.props.options}
                        showConfirmation={this.showConfirmation}
                        hideConfirmation={this.hideConfirmation}
                        deleteReport={this.deleteReport}/>
                    <DisplayName {...this.state} label={this.props.label}/>
                </button>
            );
        }
    }
});

module.exports = Button;
