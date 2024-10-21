document.addEventListener("DOMContentLoaded", function () {
  let kidsData = []; 

  function fetchKids() {
      fetch("https://project-backend-eta.vercel.app/kids")
          .then(function(response) {
              return response.json(); 
          })
          .then(function(data) {
              kidsData = data; 
              displayKids(kidsData); 
          })
          .catch(function(error) {
              console.error("Error fetching kids:", error); 
          });
  }

  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
                "name": "Aisha Mohamed",
                "age": 4,
                "height": "3'7\"",
                "county": "Mombasa",
                "hobbies": ["Drawing", "Dancing"],
                "image": "https://images.unsplash.com/photo-1553179909-4dbbe843479e?q=80&w=811&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
                "likes": 0
    }),
  };
  
  fetch("http://localhost:3000/kids", configurationObject);

  function displayKids(kidsData) {
      const kidsContainer = document.getElementById("kidsContainer");
      kidsContainer.innerHTML = "";

      kidsData.forEach((kid) => {
          const kidElement = document.createElement("div");
          kidElement.classList.add("kid");

          kidElement.innerHTML = `
              <img src="${kid.image}" alt="${kid.name}" style="width: 300px; height: 200px;">
              <p>Name: ${kid.name}</p>
              <p>Age: ${kid.age}</p>
              <p>County: ${kid.county}</p>
              <p>Hobbies: ${kid.hobbies.join(", ")}</p>
              <button class="like-button" data-id="${kid.id}">Like (${kid.likes})</button>
              <button class="begin-button">BEGIN PROCESS</button>
          `;
          kidsContainer.appendChild(kidElement);

          const beginButton = kidElement.querySelector(".begin-button");
          beginButton.addEventListener("click", function () {
              alert(`Thank you for choosing ${kid.name}. You can now begin your process.`);
      });

      fetch()
  });

      
      const likeButtons = document.querySelectorAll(".like-button");
      likeButtons.forEach((button) => {
          button.addEventListener("click", () => {
              const kidId = button.getAttribute("data-id");
              const kid = kidsData.find((kid) => kid.id === kidId);
              kid.likes++;
              button.textContent = `Like (${kid.likes})`;
          });
      });
    }

  const submitButton = document.querySelector(".form-submit");
  submitButton.addEventListener("click", function () {
      alert("Thank you for contacting us. We will get back to you as soon as possible.");
  });

  fetchKids(); 

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
      const searchString = searchInput.value.trim().toLowerCase();
      const filteredKids = kidsData.filter((kid) =>
          kid.county.toLowerCase().includes(searchString)
      );
      displayKids(filteredKids);
  });

  
  function splitScreen() {
      const leftSection = document.querySelector(".split-landing-left");
      const rightSection = document.querySelector(".split-landing-right");
      const container = document.querySelector(".split-landing-container");

      leftSection.addEventListener("click", () => {
          container.classList.add("split-landing-hover-left");
      });
      leftSection.addEventListener("mouseleave", () => {
          container.classList.remove("split-landing-hover-left");
      });

      rightSection.addEventListener("click", () => {
          container.classList.add("split-landing-hover-right");
      });
      rightSection.addEventListener("mouseleave", () => {
          container.classList.remove("split-landing-hover-right");
      });
  }

  splitScreen(); 
});

