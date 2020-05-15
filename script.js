window.onload = () => {

    let prevElement;
    let tableBody = document.getElementById("tableBody");
    let firstBlock = document.getElementById("firstBlock");
    let secondBlock = document.getElementById("secondBlock");
    let input = document.getElementById("input");
    let accounts = data.accounts;

    // document.onkeyup = () => {
    //     console.log(document.activeElement.parentNode)
    //     var index = Array.prototype.indexOf.call(tableBody.children, document.activeElement);
    //     console.log(index);
    // }

    document.onkeydown = (event) => {
        const activElement = document.activeElement;
        switch (event.code) {
            case "ArrowRight":
                if (activElement.nodeName == "TR") {
                    document.getElementById("add").focus();
                    prevElement = activElement;
                } else if (activElement.id == "add_2") {
                    document.getElementById("cancel").focus();
                }
                break;
            case "ArrowDown":
                if (activElement.nextElementSibling)
                    activElement.nextElementSibling.focus();
                else if (activElement.id == "input") {
                    if (prevElement) {
                        prevElement.focus();
                    } else
                        document.getElementById("add_2").focus();
                }

                break;
            case "ArrowUp":
                if (activElement.id == "add_2" || activElement.id == "cancel") {
                    prevElement = activElement;
                    input.focus();
                } else if (activElement.previousElementSibling)
                    activElement.previousElementSibling.focus();
                break;
            case "ArrowLeft":
                if (activElement.nodeName == "TR") {
                    if (activElement.previousElementSibling)
                        activElement.previousElementSibling.focus();
                    else if (activElement.nextElementSibling)
                        activElement.nextElementSibling.focus();
                    else
                        document.getElementById("add").focus();
                        delElement(Array.prototype.indexOf.call(tableBody.children, activElement))
                    activElement.remove();
                } else if (activElement.id == "add")
                    prevElement.focus();
                else if (activElement.id == "cancel")
                    document.getElementById("add_2").focus();
                break;
            default:
                break;
        }
    }

    delElement = (i) => {
        accounts.splice(i, 1);
        console.log(accounts);
    }

    addForm = () => {
        firstBlock.style.display = "none";
        secondBlock.style.display = "block";
        prevElement = null;

        input.focus();
    }

    addElement = () => {
        if (!input.value)
            return;

        let tr = document.createElement('tr');
        let td = document.createElement('td');
        td.innerHTML = input.value;

        tr.appendChild(td);
        tr.tabIndex = 0;
        tableBody.appendChild(tr);

        accounts.push({title: input.value, img: "image.png"})
        console.log(accounts);

        input.value = '';

        firstBlock.style.display = "flex";
        secondBlock.style.display = "none";

        tableBody.firstElementChild.focus();
    }

    cancel = () => {

        firstBlock.style.display = "flex";
        secondBlock.style.display = "none";

        input.value = '';

        tableBody.firstElementChild.focus();
    }

    tableFill = () => {
        for (item in accounts) {
            let tr = document.createElement('tr');
            tr.tabIndex = 0;
            let tdImg = document.createElement('td');
            let tdTitle = document.createElement('td');

            tdImg.innerHTML = '<img src="' + accounts[item].img + '" alt="images">';
            tdTitle.innerHTML = '<h2>' + accounts[item].title + '</h2>';

            tr.appendChild(tdImg);
            tr.appendChild(tdTitle);
            tableBody.appendChild(tr);
        }
    }

    tableFill();
    tableBody.firstElementChild.focus();
}

const data = {
    "accounts": [{
            "title": "test_1",
            "img": "image.png"
        },
        {
            "title": "test_2",
            "img": "image.png"
        },
        {
            "title": "test_3",
            "img": "image.png"
        }
    ]
}