const Box = (props) => {
  const addEventHandler = () => {
    console.log("WOW from box");
  };

    return (
      <div className="box">
        <div>
          <h2>{props.name}</h2>
          <p>Title: {props.title}</p>
          <p>Age: {props.age}</p>
          <button onClick ={addEventHandler}>Click me</button>
        </div>
      </div>
    );
  };
  
  export default Box;