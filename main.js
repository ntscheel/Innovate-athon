


    $.get("https://www.barcodelookup.com/restapi?barcode=9780140157376&formatted=y&key=xl7mgwb7icvriqtl9qhiipdzaxsjld", function (data, status) {
        console.log("Data: " + data + "\nStatus: " + status);
    });

document.addEventListener("keypress", function(e){
    if (e.keyCode == 13) {
        var code = document.getElementById('input').value;
        var url = "https://www.barcodelookup.com/restapi?barcode=" + code + "key=xl7mgwb7icvriqtl9qhiipdzaxsjld";
        $.get(url, function (data, status) {
            console.log("Data: " + data + "\nStatus: " + status);
        });
    }
});