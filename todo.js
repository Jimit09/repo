let list = [];

const addToList = () => {
    let newTask = document.getElementById("newTask");

    let todoList = document.getElementById("list");
    let item = document.createElement('li');

    //Add new  task text to item.
    item.innerText = newTask.value;

    item.onclick = removeFromList.bind(this, list.length);

    //Add new task item to list
    todoList.appendChild(item);

    list.push(newTask.value);

    //Reset the text
    newTask.value = '';
};

const removeFromList = (index) => {
    let todoList = document.getElementById('list');
    list.splice(index,1);
    console.log(index);
    todoList.innerHTML = "";
    reconstructList();
};

const reconstructList = () => {
    let todoList = document.getElementById('list');

    list.map((task, index) => {
        let item = document.createElement("li");

        item.innerText = task;
        item.onclick = removeFromList.bind(this, index);

        //Add new task item to list
        todoList.appendChild(item);
    });

}; 