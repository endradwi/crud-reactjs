import React from "react";

function ModalAdd() {
  return (
    <>
      <div className="w-screen h-screen bg-black opacity-30" />
      <div className="w-96 h-96 bg-white absolute top-96 left-[45rem] py-5 px-10">
        <h1 className="text-black">Tambah User</h1>
        <hr />
        <form>
          <label htmlFor="nama">Nama</label>
          <div>
            <input className="border" type="text" name="nama" />
          </div>
          <label htmlFor="alamat">Alamat</label>
          <div>
            <input className="border" type="text" name="alamat" />
          </div>
          <label htmlFor="jenis_kelamin">Jenis Kelamin</label>
          <div>
            <input className="border" type="radio" name="jenis_kelamin" />
          </div>
          <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
          <div>
            <input className="border" type="text" name="tanggal_lahir" />
          </div>
          <label htmlFor="">Tanggal Input</label>
          <div>
            <input className="border" type="text" name="" />
          </div>
        </form>
      </div>
    </>
  );
}

export default ModalAdd;
