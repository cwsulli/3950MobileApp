window.onload = function () {
    document.getElementById('btnShow').addEventListener('click', showMe, false);
    document.getElementById('btnAdd').addEventListener('click', addNumbers, false);

    var btn = document.createElement('button');
    var text = document.createTextNode('CLICK ME');
    btn.appendChild(text);
    document.body.appendChild(btn);

    var myDiv = document.getElementById('content');
    //myDiv.innerHTML = "Georgia College";
    var theElements = myDiv.getElementsByClassName('large');
    theElements[0].innerHTML = "Georgia College"
};

function showMe() {
    alert("Show Me");
}

function testJS() {
    //alert('Testing JS');

    var text = "ABCD";
    var strLength = text.length;
    //alert(strLength);

    var pos = text.search("B");
    //alert(pos);

    var values = ["Volvo", "Saab", "Fiat"];
    //alert(values[0]);
    console.log("Array testing " + values[0]);

    var result = "";
    var foods = ['Apples', 'Banana', 'Oranges'];
    for (var i in foods) {
        if (foods[i] == 'Apples')
            result += foods[i] + ' are good. ';
        else
            result += foods[i] + ' are ok. ';
    }
    //alert(result);

    var count = 0;
    for (var i = 0; i < foods.length; i++)
        if (foods[i] != 'Apples')
            count++;
    console.log("Count of non apples " + count);

    /*
    var person = {
        firstName: "John",
        lastName: "Doe",
        age: 50,
        eyeColor: "blue"
    };
    console.log("Full Name: " + person.firstName + " " + person.lastName);
    */

    var myFather = new person("John", "Doe", 50, "blue");
    var myMother = new person("Sally", "Rally", 48, "green");
    display(myFather);
    display(myMother);

    result = "";
    for (var field in myMother) {
        result += "myMother." + field + " = " + myMother[field] + "<br />";
    }
    console.log(result);

    var text = '{"employees" : [' +
        '{"firstName":"John", "lastName":"Doe"},' +
        '{"firstName":"Anna", "lastName":"Smith"},' +
        '{"firstName":"Peter", "lastName":"Jones"}]}';
    var obj = JSON.parse(text);
    console.log("First Employee: " + obj.employees[0].firstName + " " + obj.employees[0].lastName)
    console.log("Second Employee: " + obj.employees[1].firstName + " " + obj.employees[1].lastName)
    console.log("Third Employee: " + obj.employees[2].firstName + " " + obj.employees[2].lastName)

    var myInputs = document.getElementsByTagName("input");
    console.log("Number of input elements: " + myInputs.length);
    myInputs[0].style.backgroundColor = "red";
    myInputs[1].style.backgroundColor = "blue";
    myInputs[2].style.backgroundColor = "purple";

    var demo = document.getElementById('demo');
    demo.innerHTML = "<h1>Hello</h1> <ul> <li>one</li></ul>";

    var image = document.getElementById('myImage');
    if (image.src.match('go'))
        image.src = "img/stop.jpg";
    else
        image.src = "img/go.gif";
}

function person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

function display(obj) {
    console.log("Name: " + obj.firstName + " " + obj.lastName);
}

function addNumbers() {
    var num1 = document.getElementById('num1');
    var num2 = document.getElementById('num2');
    var result = document.getElementById('result');

    if (isNaN(num1.value) || isNaN(num2.value))
        result.value = "Invalid Data";
    else
        result.value = parseInt(num1.value) + parseInt(num2.value);
}