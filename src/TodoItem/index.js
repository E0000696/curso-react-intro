import './TodoItem.css';

function TodoItem(props){
    return (
      
      <li>
      <label className="task" >
        <input className="task__check" type="checkbox" 
        defaultChecked={props.completed}
        onClick={props.onComplete}
        /> 
        <div className="task__field task--row"> {props.text}
          <button className={`task__important ${props.completed && "xd"}`} >
            <i className="fa fa-check" ></i>
          </button>
        </div>
      </label>
        <a className="button" href="#" role="button" onClick={props.onDelete}>
          <span>Borrar</span>
          <div className="icon">
            <i className="fa fa-remove"></i>
            <i className="fa fa-check"></i>
          </div>
        </a>       
      </li>  
    );
  }

  export {TodoItem};