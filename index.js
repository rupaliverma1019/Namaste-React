// how we create nested structure

//  <div id="parent ">
//     <div id="child">
//         <h1>I am Nested tag using React</h1>
//     </div>
// </div>

// React.createElement is an object which become Html that browser understand
//  the task or converting object to html is achieved by render method

const parent = React.createElement(
    "div", { id: "parent" },
    React.createElement(
        "div", { id: "child" },
        React.createElement("h1", {}, "I am Nested tag using React"))
);









const heading = React.createElement("h1", { id: "heading", className: "xyz" }, "Hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));












root.render(parent);