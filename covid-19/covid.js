const api_url = "http://corona-api.com/countries/US";
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();

    let deaths = data.latestData.deaths;
    let confirmed = latestData.confirmed;
    let casesPerMillion = latestData.calculated.cases_per_million_population;
    //const bruh = "Greetings";

    document.getElementById("deathsDiv").innerHTML = "Hi";
    document.getElementById("confirmedDiv").innerHTML = confirmed;
    document.getElementById("casesPerMillionDiv").innerHTML = casesPerMillion;
}

getData();