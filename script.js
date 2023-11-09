
const btnEl = document.getElementById("btn");
const quoteEl = document.getElementById("quote");
const authorEl = document.getElementById("author");

const apiURL = "https://api.quotable.io/random";

async function getQuote() {
    try{
        quoteEl.innerHTML="Loading......";
        authorEl.innerHTML="......";
        btnEl.disabled=true;
        btnEl.innerHTML="Wait...";
        const response=await fetch(apiURL);
        const data = await response.json(); 
        //debugger;
        //console.log(data);
        quoteEl.innerHTML=data.content;
        authorEl.innerHTML=data.author;
        btnEl.innerHTML="Get A Quote";
        btnEl.disabled=false;
    }
    catch{
        quoteEl.innerHTML="An Error Occured which fetcing the data";
        authorEl.innerHTML="An Error Occured";
        btnEl.disabled=false;
        btnEl.innerHTML="Get A Quote";
    }
}

getQuote();
