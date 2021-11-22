const Box = ({ name, title, age }) => {
  const addEventHandler = () => {
    console.log("WOW from box");
  };

  return (
    <div className="box">
      <div>
        <h2>{name}</h2>
        <p>Title: {title}</p>
        <p>Age: {age}</p>
        <button onClick={addEventHandler}>Click me</button>
      </div>
    </div>
  );
};

export default Box;
