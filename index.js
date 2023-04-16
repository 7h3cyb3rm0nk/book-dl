

function generate() {
    let inp = document.getElementById("hash").value;
    let result = document.getElementById("result");
    if (inp === null || inp === ""){
        message.textContent = "enter a valid hash value";

        
    }
    else {
    result.textContent = `https://cdn1.booksdl.org/get.php?md5=${inp}&mirr=1`;
    }
}