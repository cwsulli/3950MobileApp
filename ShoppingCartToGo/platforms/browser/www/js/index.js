window.onload = function() {
    showOptions();
    
    var keys = localStorage.getItem("keys");
    if (keys == null) {
        var temp = [];
        localStorage.setItem("keys", JSON.stringify(temp));
    }
}

function testIt() {
    var fruits = {"Banana", "Orange", "Apple", "Mango"};
    var str = JSON.stringify(fruits);
    
    localStorage.setItem("fruits", str);
    
    var str2 = localStorage.getItem("fruits");
    var fruits2 = JSON.parse(str2);
    
    fruits2.push("Grapes");
    fruits2.push("Kiwi");
    
    for (i = 0; i < fruits2.length; i++) {
        localStorage.setItem(fruits2[i], (i + 1) * 10);
        console.log("FRUIT " + i + ": " + fruits2[i]);
    }
    
    var pos = fruits2.indexOf("Apple");
    console.log("Position of Apple: " + pos);
    
    fruits2.splice(pos, 1);
    
    pos = fruits2.indexOf("Pear");
    console.log("Position of Pear: " + pos);
    
    str = JSON.stringify(fruits2);
    console.log("Updated Fruits: " + fruits2);
    
    localStorage.setItem("fruits", str);
}

function opStore() {
    showPage("pgStore");
}

function opGet() {
    showPage("pgGet");
}

function opShowAll() {
    showPage("pgShowAll");
    
    var str = "";
    var keys = JSON.parse(localStorage.getItem("keys"));
    
    for(i = 0; i < keys.length; i++) {
        str += "key: " + keys[i] + " Value: " + localStorage.getItem(keys[i]) + " <br />";
    }
    
    document.getElementById("result").innerHTML = str;
}

function showOptions() {
    showPage("pgOptions");
}

function showPage(pgShow) {
    var pages = document.getElementsByClassName("page");
    for(i = 0; i < pages.length; i++) {
        pg = pages[i];
        pg.classList.remove("show");
        pg.classList.add("hide");
    }
    document.getElementById(pgShow).classList.add("show");
    document.getElementById(pgShow).classList.remove("hide");
    
    document.getElementById("result").innerHTML = "";
    clearForm();
}

function item(upc, product, quantity) {
    this.upc = upc;
    this.product = product;
    this.quantity = quantity;
}

function btnStoreIt() {
    var upc = document.getElementById("upc");
    var myItem = document.getElementById("product");
    var quantity = document.getElementById("quantity");
    
    var key = upc.value;
    var myItem = new item(upc.value, product.value, quantity.value);
    var str = JSON.stringify(myItem);
    
    localStorage.setItem(key, str);
    addKey(key);
}

function btnGetIt() {
    var key = document.getElementById("upcGet");
    var str = localStorage.getItem(key.value);
    
    document.getElementById('result').innerHTML = str;
    
    var myItem = JSON.parse(str);
    console.log("Product: " + myItem.product);
    console.log("Quantity: " + myItem.quantity);
}

function btnRemoveIt() {
    var key = document.getElementById("upcGet");
    localStorage.removeItem(key.value);
    removeKey(key.value);
}

function addKey(keystr) {
    var keys = JSON.parse(localStorage.getItem("keys"));
    
    if(keys.indexOf(keystr) == -1) {
        keys.push(keystr);
        localStorage.setItem("keys", JSON.stringify(keys));
    }
}

function clearForm() {
    var upc = document.getElementById("upc");
    var product = document.getElementById("product");
    var quantity = document.getElementById("quantity");
    var key = document.querySelector("#upcGet");
    
    upc.value = "";
    product.value = "";
    quantity.value = "";
    key.value = "";
}

function scanIt() {
    var key = document.getElementById("upcGet");
    var upc = document.getElementById("upc");
    
    cordova.plugins.barcodeScanner.scan(
        function(result) {
            alert("Success: result " + result.text + " format: " + result.format + " cancelled: " + result.text);
            
            key.value = result.text;
            upc.value = result.text;
        },
        function(error) {
            alert("Scan failed: " + error);
        },
        {
            "showFlipCameraButton": true,
            "prompt": "Place barcode in scan area"
        }
    );
}