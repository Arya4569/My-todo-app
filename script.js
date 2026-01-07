function addTask() {
    const title = document.getElementById("title").value.trim();
    const description = document.getElementById("description").value.trim();
    const priority = document.getElementById("priority").value;

    if (title === "") {
        alert("⚠ Please enter a task title!");
        return;
    }

    const time = new Date().toLocaleString();

    const task = document.createElement("div");
    task.className = "task";

    task.innerHTML = `
        <div>
            <strong>${title}</strong>
            <p>${description}</p>
            <span class="priority">⭐ Priority: ${priority}</span>
            <small>🕒 Added: ${time}</small>
        </div>
        <div class="actions">
            <button class="complete" onclick="completeTask(this)">✔</button>
            <button class="delete" onclick="deleteTask(this)">✖</button>
        </div>
    `;

    document.getElementById("pending").appendChild(task);

    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
}

function completeTask(btn) {
    const task = btn.parentElement.parentElement;
    task.classList.add("completed-task");

    btn.remove();

    const doneTime = document.createElement("small");
    doneTime.innerText = "🎉 Completed: " + new Date().toLocaleString();
    task.querySelector("div").appendChild(doneTime);

    document.getElementById("completed").appendChild(task);
}

function deleteTask(btn) {
    if (confirm("🗑 Are you sure you want to delete this task?")) {
        btn.parentElement.parentElement.remove();
    }
}
