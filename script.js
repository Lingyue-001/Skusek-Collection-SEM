const API_URL = "https://api.sheetbest.com/sheets/10431625-e609-49c0-ad74-190591d967d7";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.forEach(item => {
      const card = document.createElement("div");
      card.innerHTML = `
        <h2>${item.name}</h2>
        <img src="${item.image_url}" alt="${item.name}" width="200">
        <p><strong>Culture:</strong> ${item.culture}</p>
        <p><strong>Date:</strong> ${item.date}</p>
        <p><strong>Material:</strong> ${item.material}</p>
        <p><strong>Type:</strong> ${item.type}</p>
        <p><strong>Findspot:</strong> ${item.findspot}</p>
        <p>${item.description}</p>
        <p><small>${item.collection} — ${item.license}</small></p>
        <hr>
      `;
      gallery.appendChild(card);
    });
  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });
