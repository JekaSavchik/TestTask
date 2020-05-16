window.onload = () => {

    
    let prevElement;
    let tableBody = document.getElementById("tableBody");
    let firstBlock = document.getElementById("firstBlock");
    let secondBlock = document.getElementById("secondBlock");
    let input = document.getElementById("input");
    let addFormButton = document.getElementById("add");
    let addElementButton = document.getElementById("add_2");
    let cancelButton = document.getElementById("cancel");

    let accounts = data.accounts;

    accounts.forEach(element => {
        tableFill(element.title, element.img);
    });
    tableBody.firstElementChild.focus();

    

    tableBody.addEventListener('keydown', tableConrol);
    addFormButton.addEventListener('keydown', addFormButtonControl);
    addElementButton.addEventListener('keydown', addElementButtonControl);
    cancelButton.addEventListener('keydown', cancelButtonControl);
    input.addEventListener('keydown', inputControl);

    function tableConrol(event) {
        const activElement = document.activeElement;
        switch (event.code) {
            case "ArrowRight":
                addFormButton.focus();
                prevElement = activElement;
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
                if (activElement.previousElementSibling)
                    activElement.previousElementSibling.focus();
                else if (activElement.nextElementSibling)
                    activElement.nextElementSibling.focus();
                else
                    addFormButton.focus();
                delElement(Array.prototype.indexOf.call(tableBody.children, activElement))
                activElement.remove();
                break;
            default:
                break;
        }
    }

    function addFormButtonControl(event) {
        switch (event.code) {
            case "Enter":
                firstBlock.style.display = "none";
                secondBlock.style.display = "block";
                prevElement = null;

                input.focus();
                break;
            case "ArrowLeft":
                prevElement.focus();
                break;
            default:
                break;
        }
    }

    function addElementButtonControl(event) {
        switch (event.code) {
            case "Enter":
                if (!input.value)
                    return;

                addElement(input.value);

                input.value = '';

                firstBlock.style.display = "flex";
                secondBlock.style.display = "none";

                tableBody.firstElementChild.focus();
                break;
            case "ArrowRight":
                cancelButton.focus();
                break;
            case "ArrowUp":
                input.focus();
                break;
            default:
                break;
        }
    }

    function cancelButtonControl(event) {
        switch (event.code) {
            case "Enter":
                firstBlock.style.display = "flex";
                secondBlock.style.display = "none";

                input.value = '';

                tableBody.firstElementChild.focus();

                break;
            case "ArrowUp":
                prevElement = cancelButton;
                input.focus();
                break;
            case "ArrowLeft":
                addElementButton.focus();
                break;
            default:
                break;
        }
    }

    function inputControl(event) {
        if (event.code == "ArrowDown") {
            if (prevElement) {
                prevElement.focus();
            } else
                addElementButton.focus();
        }
    }

    delElement = (i) => {
        accounts.splice(i, 1);
        console.log(accounts);
    }

    addElement = (title) => {
        accounts.push({
            title: title,
            img: "image.png"
        });
        const lastElem = accounts[accounts.length - 1];
        tableFill(lastElem.title, lastElem.img)
    }

    function tableFill(title, img) {
        let tr = document.createElement('tr');
        tr.tabIndex = 0;
        let tdImg = document.createElement('td');
        let tdTitle = document.createElement('td');

        tdImg.innerHTML = '<img src="' + img + '" alt="images">';
        tdTitle.innerHTML = '<h2>' + title + '</h2>';

        tr.appendChild(tdImg);
        tr.appendChild(tdTitle);
        tableBody.appendChild(tr);
    }

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
