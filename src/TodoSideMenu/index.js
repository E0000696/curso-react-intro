import './TodoSideMenu.css';
import {CreateTodoButton} from '../CreateTodoButton';

function TodoSideMenu(){
return (
    <nav className="main-menu">
    <div className='d-flex flex-row justify-content-center'>
    <CreateTodoButton/>
    </div>     
    
        </nav>
        
);
}

export {TodoSideMenu};