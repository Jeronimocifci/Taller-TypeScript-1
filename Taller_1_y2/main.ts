import { series } from "./data.js";

document.addEventListener("DOMContentLoaded", () => {
  const seriesList = series;
  const tableBody = document.getElementById("seriesT");
  const averageSeasons = calculateAverageSeasons(series);

  if (tableBody) {
    tableBody.innerHTML += `
      <tr>
          <td colspan="4">Average Seasons: ${Math.round(averageSeasons)}</td>
      </tr>`;
  }

  seriesList.forEach((serie) => {
    const row = createTableRow(serie);
    addRowClickListener(row, serie);
    if (tableBody) {
      tableBody.appendChild(row);
    }
  });
});

function calculateAverageSeasons(seriesList: any[]) {
  const totalSeasons = seriesList.reduce((total, serie) => total + serie.seasons, 0);
  return totalSeasons / seriesList.length;
}

function createTableRow(serie: any) {
  const row = document.createElement("tr");
  row.innerHTML = `
      <td>${serie.id}</td>
      <td class="nombre-serie">${serie.name}</td>
      <td>${serie.channel}</td>
      <td>${serie.seasons}</td>
  `;
  return row;
}

function addRowClickListener(row: HTMLTableRowElement, serie: any) {
  row.addEventListener("click", () => {
    displaySerieDetail(serie);
  });
}

function displaySerieDetail(serie: any) {
  const detailDiv = document.getElementById("serie-detail");

  if (detailDiv) {
    detailDiv.style.display = "block";
    detailDiv.innerHTML = `
      <div class="card">
          <img src="${serie.imageUrl}" class="card-img-top" alt="Image of ${serie.name}">
          <div class="card-body">
              <h5 class="card-title">${serie.name}</h5>
              <p class="card-text">${serie.description}</p>
              <a href="${serie.link}" class="btn btn-primary">More Info</a>
          </div>
      </div>
    `;
  }
}
