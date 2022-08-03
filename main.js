let todoInput
let errorInfo
let addBtn
let ulList

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
    addBtn.addEventListener('click', addNewTask)
}

const addNewTask = () => {
    if (todoInput.value !=='') {
        console.log('ok')
    } else{
        errorInfo.textContent = 'Wpisz treść zadania!'
    }
}

document.addEventListener('DOMContentLoader', main)

