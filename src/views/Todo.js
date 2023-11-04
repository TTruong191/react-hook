

function Todo(props) {
  // const todos = props.myData
  // const handleDeleteTodo = props.handleDeleteTodo
  const {todos, title, handleDeleteTodo} = props;
  const handleDelete = (id) => {
    handleDeleteTodo(id)
  }
  return (

    <div className='todo-container'>
      <div className="title">
          {/* {props.title} */}
          {title}
      </div>
      {todos.map(todo => {
        return (
          <div key={todo.id}>
              <li className='todo-child' >{todo.title}  <span onClick={ () => handleDelete(todo.id)}>X</span></li>
          </div>
        )
      })}
      <hr/>
    </div>
  )
}

export default Todo;