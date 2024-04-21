import { series } from "./data";
import { Serie } from "./serie";

// Function to display series data
function displaySeries(seriesData: Serie[]) {
    seriesData.forEach((serie) => {
        console.log(`#${serie.id}: ${serie.name}`);
        console.log(`Channel: ${serie.channel}`);
        console.log(`Seasons: ${serie.seasons}`);
        console.log(`Description: ${serie.description}`);
        console.log(`Official Link: ${serie.webUrl}`);
        console.log(`Image URL: ${serie.image}`);
        console.log("----------------------------------");
    });
}

// Display series data
displaySeries(series);

