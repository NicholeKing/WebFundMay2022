async function getFacts(){
    var response = await fetch("https://cat-fact.herokuapp.com/facts");
    var facts = await response.json();
    var rand = Math.floor(Math.random() * facts.length);
    console.log(facts);
    document.querySelector("#fact").innerText = facts[rand].text;
}

getFacts();

async function dogFacts() {
    var res = await fetch("http://dog-api.kinduff.com/api/facts");
    var dfact = await res.json();
    console.log(dfact.facts[0]);
    document.querySelector("#dog").innerText = dfact.facts[0];
}

dogFacts();