"use strict";

var Text = React.createClass({
    displayName: "Text",

    render: function render() {

        var data = this.props.data;

        return React.createElement("input", { type: "text", className: this.props.className, id: data.id, placeholder: data.placeholder });
    }
});

module.exports = Text;

//# sourceMappingURL=Text-compiled.js.map