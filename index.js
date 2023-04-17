

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

function search() {
    let query = document.getElementById("book").value.replaceAll(" " , "+");
    let searchQuery = `https://libgen.is/search.php?req=${query}&lg_topic=libgen&open=0&view=simple&res=25&phrase=1&column=def`;
    window.open(searchQuery, '_blank');
    
}