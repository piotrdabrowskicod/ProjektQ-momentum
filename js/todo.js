// definicja zmiennych
const form = document.querySelector("#task-form");
const taskList = document.querySelector(".collection");
const clearBtn = document.querySelector(".clear-tasks");
const filter = document.querySelector("#filter");
const taskInput = document.querySelector("#task");

// wczytuję wszystkie eventy
loadEventListeners();

// wczytuję eventy
function loadEventListeners() {
    // wczytanie DOM
    document.addEventListener("DOMContentLoaded", getTasks);
    // dodaj zadanie
    form.addEventListener("submit", addTask);
    // usuń zadanie
    taskList.addEventListener("click", removeTask);
    // usuń wszystkie zadania
    clearBtn.addEventListener("click", clearTasks);
    // filtrowanie zadań
    filter.addEventListener("keyup", filterTasks);
}

// pobranie zadań z ls
function getTasks() {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task) {
        // tworzę element listy
        const li = document.createElement("li");
        // dodaje klasę
        li.className = "collection-item";
        // tworzę tekst zadania
        li.appendChild(document.createTextNode(task));
        // link
        const link = document.createElement("a");
        // dodaję klasę
        link.className = "delete-item secondary-content";
        // tworzę ikonę w html
        link.innerHTML = '<i class="fas fa-eraser ikona"></i>';
        // dodaję link do li
        li.appendChild(link);

        // dodaję li do ul
        taskList.appendChild(li);
    });
}

// dodanie zadania
function addTask(e) {
    if (taskInput.value === "") {
        alert("Add a task");
    }

    // tworzę element listy
    const li = document.createElement("li");
    // dodaję klasę
    li.className = "collection-item";
    // tworzę tekst zadania
    li.appendChild(document.createTextNode(taskInput.value));
    // link
    const link = document.createElement("a");
    // dodaję klasę
    link.className = "delete-item secondary-content";
    // dodaję ikonę
    link.innerHTML = '<i class="fas fa-eraser ikona"></i>';
    // dodaję link do li
    li.appendChild(link);

    // dodaję li do ul
    taskList.appendChild(li);

    // przechowuję w LS
    storeTaskInLocalStorage(taskInput.value);

    // czyszczenie zadania
    taskInput.value = "";

    e.preventDefault();
}

// przechowanie zadania
function storeTaskInLocalStorage(task) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.push(task);

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// usunięcie zadania
function removeTask(e) {
    if (e.target.parentElement.classList.contains("delete-item")) {
        if (confirm(" Czy napewno usunąć zadanie ? ")) {
            e.target.parentElement.parentElement.remove();

            // usunięcie z LS
            removeTaskFromLocalStorage(e.target.parentElement.parentElement);
        }
    }
}

// usunięcie z LS
function removeTaskFromLocalStorage(taskItem) {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }

    tasks.forEach(function (task, index) {
        if (taskItem.textContent === task) {
            tasks.splice(index, 1);
        }
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
}

// czyszczenie zadań
function clearTasks() {
    taskList.innerHTML = "";

    // czyszczenie z LS
    clearTasksFromLocalStorage();
}

// usuwanie LS
function clearTasksFromLocalStorage() {
    localStorage.clear();
}

// flitrowanie
function filterTasks(e) {
    const text = e.target.value.toLowerCase();

    document.querySelectorAll(".collection-item").forEach(function (task) {
        const item = task.firstChild.textContent;
        if (item.toLowerCase().indexOf(text) != -1) {
            task.style.display = "block";
        } else {
            task.style.display = "none";
        }
    });
}
