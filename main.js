let todoInput
let errorInfo
let addBtn
let ulList
let newTodo

const main = () => {
    prepareDOMElements()
    prepareDOMEvents()

}

const prepareDOMElements = () => {
    todoInput = document.querySelector('.todo-input')
    errorInfo = document.querySelector('.error-info')
    addBtn = document.querySelector('.btn-add')
    ulList = document.querySelector('.ulList')
}

const prepareDOMEvents = () => {
    addBtn.addEventListener('click', addNewTodo)
}

const addNewTodo = () => {
    if (todoInput.value !=='') {
        newTodo = document.createElement('li')
        newTodo.textContent = todoInput.value
    } else{
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

document.addEventListener('DOMContentLoader', main)

