const divForImg = document.getElementById("img-box");
const count = 6;

if (divForImg) {

  const requestOne = "https://api.unsplash.com/search/photos?page=4&query=food&client_id=GsaFwP_gqXjYdAzBuhSwfCsMTSYCPYe6N_74pbzHIDA&orientation=landscape&w=400&h=350";

  function makeRequestToUnsplash(requestUrl) {
    fetch(requestUrl)
      .then((res) => res.json())
      .then((data) => {
        const slicedResults = data.results.slice(0, count);
        slicedResults.forEach((imageObj) => {
          createImage(imageObj);
        });
      });
  }

  function createImage(imageObj) {
    const imageDiv = document.createElement("div");
    const image = document.createElement("img");
    image.src = imageObj.urls.regular;
    image.alt = imageObj.alt_description;
  
    // استایل‌های CSS برای عکس
    image.style.display = "flex";
    image.style.maxWidth = "100%";
    image.style.height = "auto";
    image.style.borderRadius = "8px";
    image.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
  
    imageDiv.style.margin = "10px";
    imageDiv.style.width = "400px";  
    imageDiv.style.float = "left"; 
    imageDiv.appendChild(image);
    divForImg.appendChild(imageDiv);
  }
  makeRequestToUnsplash(requestOne);
} else {
  console.log("Element with ID 'img-box' not found");
}