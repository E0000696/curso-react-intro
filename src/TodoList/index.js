import './TodoList.css'

function TodoList(props){
    return (
      <div className='d-flex p-2 bd-d-flex p-2 justify-content-center'>
        <ul className='searchList'>
          {props.children}
        </ul>
      </div>
    );
  }

  export { TodoList };
  