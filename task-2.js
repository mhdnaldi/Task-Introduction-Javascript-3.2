let arkFood = (harga, voucher, jarak, pajak) => {
  console.log(`Harga: ${harga}`);
  // ------------------ FUNCTION PROMO -------------------------------------
  function promo(voucher) {
    let diskonArkfood = 50;
    let diskonDitraktir = 60;
    let diskonMax50 = 50000
    let diskonMax30 = 30000
    let potonganHarga = "";
    // voucher ARKFOOD5
    if (voucher === "ARKFOOD5") {
      if (harga >= diskonMax50) {
        // diskon 50% 
        let potongan = (diskonArkfood / 100) * harga;
        // potongan > 50rb maksimal potongan 50rb
        if (potongan >= diskonMax50) {
          potonganHarga = diskonMax50;
        } else {
          // potongan < 50rb diskon 50%
          potonganHarga = (diskonArkfood / 100) * harga;
        }
      } else {
        // pemesanan dibawah 50rb tidak ada diskon
        potonganHarga = 0;
      }
      // voucher DITRAKTIRDEMY
    } else if (voucher === "DITRAKTIRDEMY") {
      if (harga >= 25000) {
        // diskon 60%
        let potongan = (diskonDitraktir / 100) * harga;
        // diskon > 30rb diskon max 30
        if (potongan >= diskonMax30) {
          potonganHarga = diskonMax30;
        } else {
          // diskon < 30rb diskon 60%
          potonganHarga = (diskonDitraktir / 100) * harga;
        }
      } else {
        // pemesanan dibawah 25rb tidak ada diskon
        potonganHarga = 0;
      }
      // jika voucher salah
    } else {
      potonganHarga = 0;
    }
    return potonganHarga;
  }
  console.log(`Potongan: ${promo(voucher)}`);
  // ------------------------------ END PROMO ------------------------------

  // ----------------------------- FUNCTION ONGKIR ------------------------
  function ongkir(jarak) {
    let biayaNya = 0;
    let biayaAntar = 5000;
    let kmNormal = 2;
    let km = jarak - kmNormal;
    // jarak tempuh 2km
    if (jarak <= kmNormal) {
      biayaNya = biayaAntar;
    } else {
      // jarak tempuh lebih dari 2km maka biaya tambahan 3rb tiap km
      biayaNya = biayaAntar + km * 3000;
    }
    return biayaNya;
  }
  console.log(`Biaya Antar: ${ongkir(jarak)}`);
  // ----------------------------- END ONGKIR --------------------------------

  // ------------------------------ FUNCTION PAJAK ------------------------
  function biayaPajak(pajak) {
    let bayarPajak = "";
    // pajak 5%
    let pajakWoy = (5 / 100) * harga;
    if (pajak) {
      bayarPajak = pajakWoy;
      // tidak ada pajak
    } else {
      bayarPajak = pajakWoy * 0;
    }
    return bayarPajak;
  }
  console.log(`Pajak: ${biayaPajak(pajak)}`);
  // ------------------------ EMD PAJAK --------------------------

  // ----------------------- FUNCTION TOTAL ------------------
  let subtotal = () => {
    let a = harga;
    let b = promo(voucher);
    let c = ongkir(jarak);
    let d = biayaPajak(pajak);
    // harga - promo + jarak + pajak
    let total = a - b + c + d;
    return total;
  };
  console.log(`SubTotal: ${subtotal()}`);
};

arkFood(75000, "ARKFOOD5", 5, true);
