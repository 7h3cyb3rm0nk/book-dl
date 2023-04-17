

function generate() {
    let inp = document.getElementById("hash").value.trim().toUpperCase();
    let result = document.getElementById("result");
    if  (inp === null || inp === "" || inp.length != 32 ){
        message.textContent = "enter a valid hash value";
        result.textContent = "";

        
    }
    else {
    result.textContent = `https://cdn1.booksdl.org/get.php?md5=${inp}&mirr=1`;
    message.textContent = "";
    }
}