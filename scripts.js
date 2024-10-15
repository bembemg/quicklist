const itemName = document.getElementById("item-name");
const btnItem = document.getElementById("btn-item");
const items = document.querySelector("ul");

btnItem.addEventListener("click", function (event) {
    event.preventDefault();

    const inputName = itemName.value;

    if (inputName !== "") {
        const newItem = document.createElement("div");
        newItem.classList.add("list")

        const newListItem = document.createElement("li")
        newListItem.classList.add("item")

        const checkbox = document.createElement("input")
        checkbox.type = "checkbox"
        checkbox.classList.add("checkbox")

        const newItemName = document.createElement("span");
        newItemName.textContent = inputName;

        const delBtn = document.createElement("a")
        delBtn.classList.add("del-btn")

        const delImg = document.createElement("img")
        delImg.classList.add("del-img")
        delImg.src = "./assets/icons/Frame-3.svg"
        delImg.alt = "Deletar"

        items.prepend(newItem)
        newItem.appendChild(newListItem)
        newListItem.appendChild(checkbox)
        newListItem.appendChild(newItemName)
        newItem.appendChild(delBtn)
        delBtn.appendChild(delImg)

        delBtn.addEventListener("click", function() {
            var removed = document.getElementById("removed")
            newItem.remove()

            if (newItem.remove) {
                removed.style.visibility = "visible"

                const removedBtn = document.getElementById("removed-btn")
                removedBtn.addEventListener("click", () => {
                    removed.style.visibility = "hidden"
                })
            }
        })
    }
})