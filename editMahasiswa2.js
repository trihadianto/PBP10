const { response } = require("express");

const mahasiswaNIM = "1102020";
const updateData = {
  nim: mahasiswaNIM,
  nama: "Messi",
  gender: "L",
  prodi: "TE",
  alamat: "Depok",
};

fetch(`http://localhost:3000/mahasiswa2/${mahasiswaNIM}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updateData),
})
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((err) => console.error("error : ", err));
