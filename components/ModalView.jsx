import React from "react";

function ModalView({ setView, selectedUser }) {
  return (
    <>
      <div
        className="w-screen h-screen bg-black opacity-30 fixed top-0 left-0"
        onClick={() => setView(false)}
      />
      <div className="w-96 h-auto bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-3xl">
        <h1 className="text-black text-center text-xl font-bold mb-4">Detail User</h1>
        <hr />

        {selectedUser ? (
          <div className="flex flex-col gap-2 mt-3">
            <div><strong>No:</strong> {selectedUser.tableIndex}</div>
            <div><strong>Nama:</strong> {selectedUser.name}</div>
            <div><strong>Alamat:</strong> {selectedUser.address}</div>
            <div><strong>Jenis Kelamin:</strong> {selectedUser.gender === "female" ? "Wanita" : "Pria"}</div>
            <div><strong>Tanggal Lahir:</strong> {new Date(selectedUser.date_of_birth).toLocaleDateString("id-ID")}</div>
            <div><strong>Tanggal Input:</strong> {new Date(selectedUser.input_date).toLocaleString("id-ID")}</div>
          </div>
        ) : (
          <p className="text-center mt-5">Loading...</p>
        )}
        <button
          type="button"
          className="w-full bg-red-400 rounded-lg h-12 mt-5 cursor-pointer hover:bg-red-600 text-white font-bold"
          onClick={() => setView(false)}
        >
          Tutup
        </button>
      </div>
    </>
  );
}

export default ModalView;
