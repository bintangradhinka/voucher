fetch("https://pediain.com/api/testLayanan")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        const produkList = document.getElementById("produk-list");

      
        if (Array.isArray(data)) {
            data.forEach(item => {
               
                const produkItem = document.createElement("div");
                produkItem.classList.add("product-card");
                
            
                produkItem.innerHTML = `
                    <h3>${item.produk_name}</h3>
                    <p>Harga: Rp${item.data.produk_rp}</p>
                    <p>Minimal Order: ${item.data.produk_min}</p>
                    <p>Maksimal Order: ${item.data.produk_max}</p>
                    <p>Estimasi: ${item.data.produk_est}</p>
                `;

             
                produkList.appendChild(produkItem);
            });
        } else {
            produkList.innerHTML = "<p>Data produk tidak ditemukan.</p>";
        }
    })
    .catch(error => console.error("Error fetching data:", error));
