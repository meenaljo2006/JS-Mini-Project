
let input = document.querySelector("input");
let info = document.querySelector(".info");
let result = document.querySelector(".define"); 
let heading = document.querySelector(".word");


async function getDef() {

    let word = input.value;
    if(!word){
        info.textContent="Please Enter a word ! ";
    }

    else{

        let url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;

        try{
            const response = await fetch(url);
                if (!response.ok) {
                    throw new Error("Word not found");
                }
                const data = await response.json();              
                info.textContent="";
    
                const meaning = data[0].meanings[0].definitions[0].definition;
                const word_head = data[0].word;
                heading.textContent=word_head;
                result.textContent = meaning ;
    
        }
        catch{
            heading.textContent="";
            info.textContent="Word not Found !";
            result.textContent = "";
        }
    } 
}


input.addEventListener("keydown",function(event){
    if (event.key === "Enter") {
        getDef();
    }
})


let span = document.querySelector("span");
span.addEventListener("click",function(event){
    input.value = "";
    heading.textContent="";
    result.textContent="";
    info.textContent = "Type a word and press enter to get the meaning.";
})