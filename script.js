window.onload = () => {

    let prevElement;
    let tableBody = document.getElementById("tableBody");
    let firstBlock = document.getElementById("firstBlock");
    let secondBlock = document.getElementById("secondBlock");
    let input = document.getElementById("input");

    if (tableBody.firstElementChild) {
        tableBody.firstElementChild.focus();
    }

    document.onkeydown = (event) => {
        const activElement = document.activeElement;
        console.log(event, activElement.nodeName);
        switch (event.code) {
            case "ArrowRight":
                if (activElement.nodeName == "TR") {
                    document.getElementById("add").focus();
                    prevElement = activElement;
                }
                break;
            case "ArrowDown":
                if (activElement.nextElementSibling)
                    activElement.nextElementSibling.focus();

                break;
            case "ArrowUp":
                if (activElement.previousElementSibling)
                    activElement.previousElementSibling.focus();

                break;
            case "ArrowLeft":
                if (activElement.nodeName == "BUTTON")
                    prevElement.focus();
                else if (activElement.nodeName == "TR") {
                    if (activElement.previousElementSibling)
                        activElement.previousElementSibling.focus();
                    else if (activElement.nextElementSibling)
                        activElement.nextElementSibling.focus();
                    else
                        document.getElementById("add").focus();
                    activElement.remove();
                }
                break;
            // case "Enter":
            //     if (activElement.id == "add") {
            //         document.getElementById("firstBlock").style.display = "none";
            //         document.getElementById("secondBlock").style.display = "";
            //     }
            //     break;
            default:
                break;
        }
    }

    addForm = () => {
        firstBlock.style.display = "none";
        secondBlock.style.display = "block";

        input.focus();
    }

    addElement = () => {
        firstBlock.style.display = "flex";
        secondBlock.style.display = "none";

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = input.value;

        tr.appendChild(td);
        tr.tabIndex = 0;
        tableBody.appendChild(tr);
        input.value = '';

        tableBody.firstElementChild.focus();
    }

    cancel = () => {

        firstBlock.style.display = "flex";
        secondBlock.style.display = "none";

        input.value = '';

        tableBody.firstElementChild.focus();
    }

}
