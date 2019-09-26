import React from 'react';
import './styles.css';
export function TaskPage(_a) {
    var input = _a.input, setDone = _a.setDone;
    var isCorrect = function (value) { return parseInt(value) === input[2]; };
    return (React.createElement(React.Fragment, null,
        React.createElement("div", { class: "flex-container row" },
            React.createElement("div", { class: "flex-item" }, input[0]),
            React.createElement("div", { class: "flex-item" }, "+"),
            React.createElement("div", { class: "flex-item" }, input[1]),
            React.createElement("div", { class: "flex-item" }, "="),
            React.createElement("input", { class: "flex-item color-0", type: "text", onChange: function (event) {
                    if (isCorrect(event.target.value)) {
                        setDone(true);
                    }
                } })),
        false && React.createElement("div", { class: "flex-container row" },
            React.createElement("button", { class: "flex-item button", text: "valmis", onClick: function () {
                } }, "TARKISTA"))));
}
//# sourceMappingURL=TaskPage.js.map