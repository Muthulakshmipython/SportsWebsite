document.getElementById("writeReviewBtn").addEventListener("click", function () {
    document.getElementById("reviewForm").style.display = "block";
  });

  document.getElementById("submitReview").addEventListener("click", function () {
    const name = document.getElementById("userName").value || "Anonymous";
    const review = document.getElementById("userReview").value;
    const rating = document.getElementById("userRating").value;

    if (!review) {
      alert("Please enter your review.");
      return;
    }

    const starHTML = "★ ".repeat(rating) + "☆ ".repeat(5 - rating);

    const newReviewHTML = `
      <div class="review-card d-flex flex-column flex-md-row justify-content-between">
        <div class="d-flex gap-3">
          <img src="https://randomuser.me/api/portraits/lego/${Math.floor(Math.random()*10)}.jpg" alt="${name}" class="avatar" />
          <div>
            <h6 class="mb-0">${name}</h6>
            <small class="text-muted">Just now</small>
            <p class="mt-2">${review}</p>
          </div>
        </div>
        <div class="text-end mt-2 mt-md-0">
          <span class="star">${starHTML}</span>
        </div>
      </div>
    `;

    document.getElementById("reviewsList").insertAdjacentHTML("afterbegin", newReviewHTML);

    
    document.getElementById("userName").value = "";
    document.getElementById("userReview").value = "";
    document.getElementById("userRating").value = "5";
    document.getElementById("reviewForm").style.display = "none";
  });

//    add to cart//

function changeQty(amount) {
  const qtyInput = document.getElementById("qty");
  let currentValue = parseInt(qtyInput.value);

  if (isNaN(currentValue)) {
    currentValue = 1;
  }

  const newValue = currentValue + amount;

  if (newValue >= 1) {
    qtyInput.value = newValue;
  }
}


document.querySelectorAll(".add-to-cart-btn").forEach(button => {
  button.addEventListener("click", function () {
    const productDiv = this.closest(".product");

    const product = {
      id: productDiv.dataset.id,
      name: productDiv.dataset.name,
      price: parseFloat(productDiv.dataset.price),
      image: productDiv.dataset.image,
      qty: parseInt(productDiv.querySelector(".qty").value)
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const index = cart.findIndex(item => item.id === product.id);

    if (index > -1) {
      cart[index].qty += product.qty;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.name} added to cart!`);
  });
});

// HOME PAGE LOGIN//
function goToHome() {
  window.location.href = 'home.html'; 
  return false; 
}


const currentPage = location.pathname.split("/").pop();

  document.querySelectorAll(".nav-link").forEach(link => {
    const linkPage = link.getAttribute("href").split("/").pop();
    if (linkPage === currentPage) {
      link.classList.add("active");
    }
  });


  function increment() {
    const qty = document.getElementById('qty');
    qty.value = parseInt(qty.value) + 1;
  }
  function decrement() {
    const qty = document.getElementById('qty');
    if (parseInt(qty.value) > 1) {
      qty.value = parseInt(qty.value) - 1;
    }
  }


