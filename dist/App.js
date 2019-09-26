import React, { useState } from 'react';
import './App.css';
import './styles.css';
import { task } from './task';
import { TaskPage } from './TaskPage';
import belle from './belle.png';
import carriage from './carriage.png';
var getImage = function (count) { return count % 2 === 0 ? carriage : belle; };
function App() {
    var handleTaskDone = function (done) {
        setCurrentTaskDone(done);
        setDoneCount(doneCount + 1);
    };
    var _a = useState(false), currentTaskDone = _a[0], setCurrentTaskDone = _a[1];
    var _b = useState(0), doneCount = _b[0], setDoneCount = _b[1];
    return (React.createElement("div", { className: "App" },
        React.createElement("div", { className: "flex-container-3" },
            React.createElement("div", { className: "flex-row color-2" }, "LYYTIN LASKUPELI")),
        currentTaskDone ?
            React.createElement("div", { className: "flex-row column" },
                React.createElement("img", { className: "flex-item color-2", style: { height: 500, padding: 0, justifySelf: 'center', pointerEvents: "all" }, src: getImage(doneCount), onClick: function () {
                        setCurrentTaskDone(false);
                    } }))
            :
                React.createElement(TaskPage, { input: task(), setDone: handleTaskDone }),
        React.createElement("p", null, doneCount)));
}
export default App;
//# sourceMappingURL=App.js.map