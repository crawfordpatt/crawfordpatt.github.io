//API in progress
/*
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

    document.getElementById("deathsDiv") = "Total Deaths (U.S): " + deaths;
    document.getElementById("confirmedDiv") = "Total US Confirmed Cases (U.S): " + confirmed;
    document.getElementById("casesPerMillionDiv") = "Cases per Million (U.S): " + casesPerMillion;
}

getData();
*/