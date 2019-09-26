import React, { useState } from 'react';
import './styles.css';
import unicorn from './unicorn.jpg';
export function TaskRow(_a) {
    var input = _a.input;
    var _b = useState(''), arvo = _b[0], setValue = _b[1];
    var showImage = parseInt(arvo) === input[2];
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { class: "flex-container row" },
            React.createElement("div", { class: "flex-item" }, input[0]),
            React.createElement("div", { class: "flex-item" }, "+"),
            React.createElement("div", { class: "flex-item" }, input[1]),
            React.createElement("div", { class: "flex-item" }, "="),
            React.createElement("form", { class: "flex-item", onSubmit: function (event) {
                    setValue(event);
                    event.preventDefault();
                } },
                React.createElement("label", null,
                    React.createElement("input", { type: "text", onChange: function (event) { setValue(event.target.value); } }))),
            React.createElement("img", { class: "flex-item", style: { width: 100, height: 150, padding: 0, justifySelf: 'center', visibility: showImage ? 'visible' : 'hidden' }, src: unicorn }))));
}
//# sourceMappingURL=TaskRow.js.map