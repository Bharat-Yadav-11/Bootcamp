const itemsArray = localStorage.getItem('items') ? JSON.parse(localStorage.getItem('items')) : [];

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item")
    if (item.value == "") {
        alert("Please enter your task")
    } else {
        createItem(item)
    }
})

document.querySelector("#item").addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        if (item.value == "") {
            alert("Please enter your task")
        } else {
        const item = document.querySelector("#item")
        createItem(item)
        }
    }
})

function displayItems() {
    let items = ""
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
                    <div class="input-controller">
                    <textarea disabled>${itemsArray[i]}</textarea>
                    <i class="ri-delete-bin-line deleteBtn"></i>
                    </div>
                </div>`
    }
    document.querySelector(".to-do-list").innerHTML = items
    activateDeleteListeners()
}

function activateDeleteListeners() {
    let deleteBtn = document.querySelectorAll(".deleteBtn")
    deleteBtn.forEach((dB, i) => {
      dB.addEventListener("click", () => { deleteItem(i) })
    })
}

function createItem(item) {
    itemsArray.push(item.value)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

function deleteItem(i) {
    itemsArray.splice(i, 1)
    localStorage.setItem('items', JSON.stringify(itemsArray))
    location.reload()
}

window.onload = function () {
    displayItems()
}