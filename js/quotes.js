const quotes = [
    {
        quote:"Better late than never.",
        author: "A",
    }, 
    {
        quote:"We can give advice, but we cannot give conduct.",
        author: "B",
    }, 
    {
        quote:"love what you have.",
        author: "C",
    }, 
    {
        quote:"Patterning your life around other's opinions is nothing more than slavery.",
        author: "D",
    }, 
    {
        quote:"HAHAHAHA.",
        author: "E",
    }, 
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child"); 

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote; 
author.innerText = todaysQuote.author; 