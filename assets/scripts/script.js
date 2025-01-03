const photos = [
  {
    id: 1,
    title: "Praia",
    url: "https://cdn.pixabay.com/photo/2021/05/29/03/00/beach-6292382_1280.jpg",
  },
  {
    id: 2,
    title: "Montanha",
    url: "https://cdn.pixabay.com/photo/2021/09/03/15/37/mountain-6596074_1280.jpg",
  },
  {
    id: 3,
    title: "Cidade",
    url: "https://cdn.pixabay.com/photo/2021/12/19/12/27/road-6881040_1280.jpg",
  },
  {
    id: 4,
    title: "Campo",
    url: "https://cdn.pixabay.com/photo/2018/05/06/19/09/field-3379250_1280.jpg",
  },
  {
    id: 5,
    title: "Lago",
    url: "https://cdn.pixabay.com/photo/2021/05/24/11/56/lake-6278825_1280.jpg",
  },
  {
    id: 6,
    title: "Deserto",
    url: "https://cdn.pixabay.com/photo/2016/03/21/10/44/desert-1270345_1280.jpg",
  },
  {
    id: 7,
    title: "Floresta",
    url: "https://cdn.pixabay.com/photo/2014/09/07/22/17/forest-438432_1280.jpg",
  },
  {
    id: 8,
    title: "Cachoeira",
    url: "https://cdn.pixabay.com/photo/2022/07/25/18/47/waterfall-7344396_1280.jpg",
  },
  {
    id: 9,
    title: "Neve",
    url: "https://cdn.pixabay.com/photo/2022/12/10/11/05/snow-7646952_1280.jpg",
  },
  {
    id: 10,
    title: "Vulcão",
    url: "https://cdn.pixabay.com/photo/2017/12/14/09/41/new-zealand-3018634_1280.jpg",
  },
];

function loadPhotos() {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  photos.forEach((photo) => {
    const photoDiv = document.createElement("div");
    photoDiv.className = "photo";
    photoDiv.innerHTML = `
                <img src="${photo.url}" alt="${photo.title}">
                <p>${photo.title}</p>
            `;
    gallery.appendChild(photoDiv);
  });
}

function filterPhotos() {
  const searchTerm = document.getElementById("search").value.toLowerCase();
  const filteredPhotos = photos.filter((photo) =>
    photo.title.toLowerCase().includes(searchTerm)
  );

  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  if (filteredPhotos.length > 0) {
    filteredPhotos.forEach((photo) => {
      const photoDiv = document.createElement("div");
      photoDiv.className = "photo";
      photoDiv.innerHTML = `
                    <img src="${photo.url}" alt="${photo.title}">
                    <p>${photo.title}</p>
                `;
      gallery.appendChild(photoDiv);
    });
  } else {
    gallery.innerHTML = "<p>Nenhuma foto encontrada</p>";
  }
}

document.getElementById("search").addEventListener("input", filterPhotos);

loadPhotos();
