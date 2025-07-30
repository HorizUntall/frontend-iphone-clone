const params = new URLSearchParams(window.location.search);
const pageId = params.get("id");

// Fetch JSON and update page
fetch("../data/cases.json")
    .then(response => response.json())
    .then(data => {
        if (data[pageId]) {

            const pageData = data[pageId];
            document.title = pageData.title;

            document.getElementById("product-title").innerText = pageData.title;
            document.getElementById("full-price").innerText = pageData.price;

            // UPDATE to actually get rid of items
            if (pageData.priceAlt) {
                document.getElementById("installment-price").innerText = pageData.priceAlt;
            } else {
                console.log("hello");
                document.getElementById("or").innerText = "";
                document.getElementById("installment-price").innerText = "";
            }

            document.getElementById("stock-status").innerText = pageData.stock;
            document.getElementById("shipping-status").innerText = pageData.shipping ? pageData.shipping : "";

        }
    })