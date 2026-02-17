fetch("AIzaSyCiCksAxzEehRvZWVGjOpJu9Ncznw8mUXU")
.then(res => res.json())
.then(data => {
  const container = document.getElementById("videoContainer");

  data.videos.forEach(video => {
    container.innerHTML += `
      <div class="video-card" onclick="location.href='watch.html?id=${video.id}'">
        <img src="${video.thumbnail}">
        <div class="video-info">
          <h4>${video.title}</h4>
          <p>${video.channel}</p>
        </div>
      </div>
    `;
  });
});
