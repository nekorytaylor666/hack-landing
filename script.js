document
  .querySelector(".generate-button")
  .addEventListener("click", function () {
    const inputValue = document.querySelector(".prompt-box").value;
    generateImage(inputValue);
  });

function generateImage(input) {
  const OPENAI_API_KEY = "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";

  fetch("https://api.openai.com/v1/images/generations", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "dall-e-3",
      prompt: input,
      n: 1,
      size: "1024x1024",
    }),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const imageUrl = data.data[0].url;
      updateImage(imageUrl);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}

function updateImage(imageUrl) {
  document.querySelector(".output-content img").src = imageUrl;
}
