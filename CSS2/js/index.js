var myData4 = {
    items: [
        {
            id: "1 2 3",
            fName: "abe",
            lName: "lincoln",
            job: "president"
        },
        {
            id: "2 0 0",
            fName: "brad ",
            lName: "barfield",
            job: "vice president"
        },
        {
            id: "3 0 1",
            fName: "cody ",
            lName: "nash",
            job: "secretary"
        },
        {
            id: "4 4 4",
            fName: "edgar",
            lName: "raven",
            job: "treasurer"
        },
        {
            id: "5 1 0",
            fName: "franks",
            lName: "in burger",
            job: "swan"
        }
    ]
};

function clearTags() {
    var arr = document.getElementsByTagName("span");
    for (i = 0; i < arr.length; i++)
        arr[i].classList.remove("block", "hidden", "vhidden", "border");
}

function showMyList() {
    clearTags();
    var rows = document.getElementsByClassName("row");

    for (r = 0; r < rows.length; r++) {
        rows[r].classList.add("block", "border");

        var cells = rows[r].getElementsByClassName("cell");

        for (i = 0; i < cells.length; i++)
            cells[i].classList.add("block");
    }
}

function showMyTable() {
    clearTags();
    var table = document.getElementsByClassName("table");
    var rows = document.getElementsByClassName("row");
    var cells = document.getElementsByClassName("cell");

    for (i = 0; i < cells.length; i++)
        cells[i].classList.add("border");
}

function showMyLink() {
    clearTags();
    var table = document.getElementsByClassName("table");

    for (t = 0; t < table.length; t++)
        table[t].classList.add("block");

    var rows = document.getElementsByClassName("row");

    for (r = 0; r < rows.length; r++) {
        rows[r].classList.add("border", "block");
        var cells = rows[r].getElementsByClassName("cell");

        for (i = 1; i < cells.length; i++)
            cells[i].classList.add("hidden");

        var param = "";

        for (i = 0; i < cells.length; i++)
            param += cells[i].innerHTML + "-";

        rows[r].data.addEventListener('click', function () {
            document.getElementById('demoName2').innerHTML = this.data;
        })
    }
}

function createTable() {
    var output = "";

    output = "<span class='table'>";
    for (var i = 0; i < obj.items.length; i++) {
        output += "<span class='row'>";
        for (var field in obj.items[i]) {
            output += "<span class='cell border'>" + obj.items[i][field] + "</span>";
        }
        output += "</span>";
    }
    output += "</span>";
    document.getElementById("demoTable").innerHTML = output;
}