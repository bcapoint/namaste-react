
{/* <div id = "parent">
<div id="child">
  <h1>hi bro how</h1>
</div>
</div> */}



// const heading = React.createElement("h1", { id: "heading", className: 'red' }, "hello world from React!");
const parent = React.createElement('div', { id: 'parent' }, [
    React.createElement('div', { id: 'child1' }, [React.createElement('h1', { key: 1 }, 'Hell I am H1 Tag'), React.createElement('h2', { key: 2 }, 'Hell I am H1 Tag')]),
    React.createElement('div', { id: 'child2' }, [React.createElement('h1', { key: 1 }, 'Hell I am H1 Tag'), React.createElement('h2', { key: 2 }, 'Hell I am H1 Tag')])
]);
console.log(parent)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);