import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ModalEdit({ setEdit, selectedUser, setData }) {
  const { register, handleSubmit } = useForm({
    defaultValues: selectedUser, 
  });

  const [loading, setLoading] = useState(false);

  function submitUser(updatedUser) {
    setLoading(true);

    fetch(`https://67b6f7232bddacfb270d092e.mockapi.io/users/${selectedUser.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedUser),
    })
      .then((res) => res.json())
      .then((response) => {
        setData((prevData) =>
          prevData.map((user) => (user.id === selectedUser.id ? response : user))
        );
        setLoading(false);
        setEdit(false)
      })
      .catch((err) => {
        console.error("Error updating user:", err);
        setLoading(false);
      });
  }

  return (
    <>

      <div className="w-screen h-screen bg-black opacity-30 fixed top-0 left-0" onClick={() => setEdit(false)} />
      <div className="w-96 h-auto bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-3xl">
        <h1 className="text-black text-center text-xl font-bold mb-4">Edit User</h1>
        <hr />

        <form className="flex flex-col gap-3" onSubmit={handleSubmit(submitUser)}>
          <label>Nama</label>
          <input className="border w-full py-3 pl-2" type="text" {...register("name", { required: true })} />

          <label>Alamat</label>
          <input className="border w-full py-3 pl-2" type="text" {...register("address")} />

          <span>Jenis Kelamin</span>
          <div className="flex items-center gap-3">
            <input className="border w-5 h-5" type="radio" {...register("gender")} value="male" />
            <label>Pria</label>

            <input className="border w-5 h-5" type="radio" {...register("gender")} value="female" />
            <label>Wanita</label>
          </div>

          <label>Tanggal Lahir</label>
          <input className="border w-full py-3 pl-2" type="date" {...register("date_of_birth")} />

          <div className="flex gap-3 mt-3">
            <button
              className="w-full bg-green-500 rounded-lg h-12 cursor-pointer hover:bg-green-700 text-white font-bold"
              type="submit"
              disabled={loading}
            >
              {loading ? "Menyimpan..." : "Simpan"}
            </button>

            <button
              type="button"
              className="w-full bg-red-400 rounded-lg h-12 cursor-pointer hover:bg-red-600 text-white font-bold"
              onClick={() => setEdit(false)}
            >
              Batal
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default ModalEdit;
