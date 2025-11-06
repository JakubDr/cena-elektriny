const spotrebice = [];

document.getElementById("elForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const nazev = document.getElementById("nazev").value || "Neznámý spotřebič";
  const spotreba = parseFloat(document.getElementById("spotreba").value);
  const cena = parseFloat(document.getElementById("cena").value);
  const dny = parseFloat(document.getElementById("dny").value);

  const celkem = spotreba * cena * dny;

  const objekt = { nazev, spotreba, cena, dny, celkem };
  spotrebice.push(objekt);

  zobrazVysledky();
  this.reset();
});

function zobrazVysledky() {
  const tbody = document.getElementById("vysledky");
  tbody.innerHTML = "";
  let total = 0;

  spotrebice.forEach(item => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${item.nazev}</td>
      <td>${item.spotreba}</td>
      <td>${item.cena}</td>
      <td>${item.dny}</td>
      <td>${item.celkem.toFixed(2)}</td>
    `;
    tbody.appendChild(tr);
    total += item.celkem;
  });

  document.getElementById("součet").innerText = "Celková cena: " + total.toFixed(2) + " Kč";
}
