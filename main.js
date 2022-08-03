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
    ulList = document.querySelector('.todo-input')
}

const prepareDOMEvents = () => {

}

document.addEventListener('DOMContentLoader', main)

