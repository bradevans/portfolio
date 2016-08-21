"use strict";

var Select = React.createClass({
    displayName: "Select",

    render: function render() {

        var data = this.props.data,
            options;

        options = data.options.map(function (i) {
            return React.createElement(
                "option",
                { value: i.value },
                i.text
            );
        });

        return React.createElement(
            "span",
            null,
            React.createElement(
                "label",
                { htmlFor: data.id },
                data.label
            ),
            React.createElement(
                "select",
                { className: this.props.className, id: data.id, name: data.name },
                options
            )
        );
    }
});

module.exports = Select;

//# sourceMappingURL=Select-compiled.js.map