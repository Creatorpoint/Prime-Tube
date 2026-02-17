const API_KEY = "AIzaSyCiCksAxzEehRvZWVGjOpJu9Ncznw8mUXU";

async function searchVideos() {

  try {

    let query = document.getElementById("searchInput").value;
    if(query === "") query = "trending";

    const res = await fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&maxResults=12&q=${query}&key=${API_KEY}`
    );

    const data = await res.json();

    if(data.error){
      alert("API Error: " + data.error.message);
      return;
    }

    const container = document.getElementById("videos");
    container.innerHTML = "";

    data.items.forEach(video => {
      container.innerHTML += `
        <div class="card" onclick="openVideo('${video.id.videoId}')">
          <img src="${video.snippet.thumbnails.high.url}">
          <p>${video.snippet.title}</p>
        </div>
      `;
    });

  } catch(err){
    alert("Something went wrong");
  }
}

function openVideo(id) {
  window.location.href = "watch.html?id=" + id;
}

searchVideos();
