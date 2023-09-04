const taskList = document.querySelector(".task-list");

function addTask() {
    const title = document.getElementById("task-title").value;
    const description = document.getElementById("task-description").value;
    const deadline = document.getElementById("task-deadline").value;
    const priority = document.getElementById("task-priority").value;

    if (!title || !description || !deadline || !priority) {
        alert("Veuillez remplir tous les champs.");
        return;
    }

    const taskItem = document.createElement("li");
    taskItem.className = "task-item";
    taskItem.innerHTML = `
        <h3>${title}</h3>
        <p>${description}</p>
        <p>Deadline: ${deadline}</p>
        <p>Priorité: ${priority}</p>
        <button onclick="completeTask(this)">Terminé</button>
        <button onclick="editTask(this)">Modifier</button>
        <button onclick="deleteTask(this)">Supprimer</button>
    `;

    taskList.appendChild(taskItem);

    // Réinitialiser les champs du formulaire
    document.getElementById("task-title").value = "";
    document.getElementById("task-description").value = "";
    document.getElementById("task-deadline").value = "";
    document.getElementById("task-priority").value = "faible";
}

function completeTask(button) {
    const taskItem = button.parentElement;
    taskItem.classList.toggle("completed");
}

function editTask(button) {
    const taskItem = button.parentElement;
    const [title, description, deadline, priority] = taskItem.querySelectorAll("h3, p, p, p");

    const newTitle = prompt("Nouveau titre :", title.textContent);
    if (newTitle === null) return;

    const newDescription = prompt("Nouvelle description :", description.textContent);
    if (newDescription === null) return;

    const newDeadline = prompt("Nouvelle date limite :", deadline.textContent);
    if (newDeadline === null) return;

    const newPriority = prompt("Nouvelle priorité :", priority.textContent.split(": ")[1]);
    if (newPriority === null) return;

    title.textContent = newTitle;
    description.textContent = newDescription;
    deadline.textContent = `Deadline: ${newDeadline}`;
    priority.textContent = `Priorité: ${newPriority}`;
}

function deleteTask(button) {
    const taskItem = button.parentElement
}