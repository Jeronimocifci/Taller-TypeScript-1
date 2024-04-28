import { series } from "./data.js";
document.addEventListener("DOMContentLoaded", function () {
    var seriesList = series;
    var tableBody = document.getElementById("seriesT");
    var averageSeasons = calculateAverageSeasons(series);
    if (tableBody) {
        tableBody.innerHTML += "\n      <tr>\n          <td colspan=\"4\">Average Seasons: ".concat(Math.round(averageSeasons), "</td>\n      </tr>");
    }
    seriesList.forEach(function (serie) {
        var row = createTableRow(serie);
        addRowClickListener(row, serie);
        if (tableBody) {
            tableBody.appendChild(row);
        }
    });
});
function calculateAverageSeasons(seriesList) {
    var totalSeasons = seriesList.reduce(function (total, serie) { return total + serie.seasons; }, 0);
    return totalSeasons / seriesList.length;
}
function createTableRow(serie) {
    var row = document.createElement("tr");
    row.innerHTML = "\n      <td>".concat(serie.id, "</td>\n      <td class=\"nombre-serie\">").concat(serie.name, "</td>\n      <td>").concat(serie.channel, "</td>\n      <td>").concat(serie.seasons, "</td>\n  ");
    return row;
}
function addRowClickListener(row, serie) {
    row.addEventListener("click", function () {
        displaySerieDetail(serie);
    });
}
function displaySerieDetail(serie) {
    var detailDiv = document.getElementById("serie-detail");
    if (detailDiv) {
        detailDiv.style.display = "block";
        detailDiv.innerHTML = "\n      <div class=\"card\">\n          <img src=\"".concat(serie.imageUrl, "\" class=\"card-img-top\" alt=\"Image of ").concat(serie.name, "\">\n          <div class=\"card-body\">\n              <h5 class=\"card-title\">").concat(serie.name, "</h5>\n              <p class=\"card-text\">").concat(serie.description, "</p>\n              <a href=\"").concat(serie.link, "\" class=\"btn btn-primary\">More Info</a>\n          </div>\n      </div>\n    ");
    }
}
