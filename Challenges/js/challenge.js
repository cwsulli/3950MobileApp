var myData = {
    items: [
        {
            name: "Names",
            place: "Places",
            thing: "Things"
        },
        {
            name: "James",
            place: "Paris",
            thing: "Books"
        },
        {
            name: "Laura",
            place: "Mexico",
            thing: "Chairs"
        },
        {
            name: "Sam",
            place: "Italy",
            thing: "Paper"
        }
		]
};

function showTable(obj) {
    console.log("function is running");

    var output = "";
    var ul = document.createElement("ul");

    ul.classList.add("tableList");

    for (var x = 0; x < obj.items.length; x++) {
        var li = document.createElement("li");
        //console.log("first for is running")
        for (var field in obj.items[x]) {
            //console.log("second for is running")
            var span = document.createElement("span");
            span.classList.add("tableEntry");
            var text = document.createTextNode(obj.items[x][field]);

            span.appendChild(text);
            li.appendChild(span);

            //console.log("function is running");
        }
        ul.appendChild(li);
    }
    document.getElementById("demoTable").appendChild(ul);
}

function showList(obj) {
    var output = "";
    var ul = document.createElement("ul");
    ul.classList.add("list");

    for (var x = 0; x < obj.items.length; x++) {
        //console.log("first for is running")
        for (var field in obj.items[x]) {
            if (obj.items[x][field] != "Names" && obj.items[x][field] != "Places" && obj.items[x][field] != "Things") {
                //console.log("second for is running")

                var li = document.createElement("li");
                var span = document.createElement("span");
                span.classList.add("listEntry");

                var text = document.createTextNode(obj.items[0][field] + ": " + obj.items[x][field]);

                console.log(text);

                span.appendChild(text);
                li.appendChild(span);

                //console.log("function is running");

                ul.appendChild(li);
            }
            document.getElementById("demoList").appendChild(ul);
        }
    }
}

function showName(obj) {
    var output = "";
    var ul = document.createElement("ul");
    ul.classList.add("name");
    var namesArray = [obj.items[0]["name"]];

    //-------get Names and put into array to print to list----------//

    /*
    for (var i = 1; i < obj.items.length; i++) {
        namesArray.push(obj.items[i]["name"]);

        var className = "btnName" + i;

        var temp = document.createTextNode(namesArray[i]);
        var li = document.createElement("li");
        var span = document.createElement("span");
        var btn = document.createElement("button");
        span.classList.add(className);

        btn.appendChild(temp);
        span.appendChild(btn);
        li.appendChild(span);
        ul.appendChild(li);


    }

    document.getElementById("demoName").appendChild(ul);
    */

    output = "<button id=" + " onclick= showName2();>" + ;

}

function showName2() {
    document.getElementById("demoName2").innerHTML(output);
}

window.onload = function () {
    showTable(myData);
    showList(myData);
    showName(myData);
    showName2(myData);
}