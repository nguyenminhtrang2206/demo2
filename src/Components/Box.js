const Box = (props) => {
    return(
        <div class="box">
                  <p>{props.name}</p>
                  <p>Title: {props.title}</p>
                  <p>Age: {props.age}</p>
        </div>
    )
  }

  export default Box;