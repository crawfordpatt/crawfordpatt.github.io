const api_url = "http://corona-api.com/countries/US";
async function getData() {
    const response = await fetch(api_url);
    const data = await response.json();
    console.log(data);
    const latestData = data.data.latest_data;
    console.log(latestData);
    const deaths = latestData.deaths;
    const confirmed = latestData.confirmed;
    const casesPerMillion = latestData.calculated.cases_per_million_population;

    document.getElementById("deathsDiv").innerHTML = "Total Deaths (U.S): " + deaths;
    document.getElementById("confirmedDiv").innerHTML = "Total US Confirmed Cases (U.S): " + confirmed;
    document.getElementById("casesPerMillionDiv").innerHTML = "Cases per Million (U.S): " + casesPerMillion;
}

getData();