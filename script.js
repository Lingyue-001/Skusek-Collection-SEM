const API_URL = "https://api.sheetbest.com/sheets/10431625-e609-49c0-ad74-190591d967d7";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {
    const gallery = document.getElementById("gallery");

    data.forEach(item => {
      console.log("🔍 Item:", item);
      console.log("📸 Image URL:", item.image_url);
      console.log(Object.keys(item));

      // ✅ 如果有 3D 模型链接则生成 iframe，否则为空
const modelEmbed = item.model_url
  ? `<div class="sketchfab-embed-wrapper" style="margin-top: 1rem;">
       <p><strong>3D Model Preview:</strong></p>
       <iframe
         title="${item.name || '3D Model'}"
         frameborder="0"
         allowfullscreen
         mozallowfullscreen="true"
         webkitallowfullscreen="true"
         allow="autoplay; fullscreen; xr-spatial-tracking"
         width="100%" height="360"
         src="${item.model_url}">
       </iframe>
     </div>`
  : '';


      // ✅ 将模型 iframe 插入卡片中
const card = document.createElement("div");

// ✅ 正确：写在字符串外面
const imageHTML = item.image_url
  ? `<img src="${item.image_url}" alt="${item.name}" width="200">`
  : '';

// ✅ 然后在模板里使用插值
card.innerHTML = `
  <h2>${item.name || "Untitled Artifact"}</h2>
  ${imageHTML}
  <p><strong>Culture:</strong> ${item.culture}</p>
  <p><strong>Date:</strong> ${item.date}</p>
  <p><strong>Material:</strong> ${item.material}</p>
  <p><strong>Type:</strong> ${item.type}</p>
  <p><strong>Findspot:</strong> ${item.findspot}</p>
  <p>${item.description}</p>
  ${modelEmbed}
  <p><small>${item.collection} — ${item.license}</small></p>
  <hr>
`;

      gallery.appendChild(card);  // ✅ 必须有这行
    });
  })
  .catch(error => {
    console.error("❌ Error fetching data:", error);
  });

  })
  .catch(error => {
    console.error("Error fetching data:", error);
  });

