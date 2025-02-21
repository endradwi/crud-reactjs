import React, { useState } from "react";
import { useForm } from "react-hook-form";

function ModalAdd({ setShow }) {
  const { register, handleSubmit } = useForm()
  const [loading, setLoading] = useState(false)

  function submitUser(value) {
    setLoading(true)
    const today = new Date().toISOString()

    const finalData = {
      ...value,
      input_date: today,
    }

    const newData = new URLSearchParams(finalData)
    const update = newData.toString()

    fetch("https://67b6f7232bddacfb270d092e.mockapi.io/users", {
      method: "POST",
      body: update,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        console.log("Data berhasil dikirim:", response)
        setLoading(false)
        setShow(false)
      })
      .catch((err) => {
        console.error("Error:", err)
        setLoading(false)
      })
  }

  return (
    <>
      <div
        className="w-screen h-screen bg-black opacity-30 fixed top-0 left-0"
        onClick={() => setShow(false)}
      />
      <div className="w-96 h-auto bg-white fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 py-5 px-10 rounded-3xl">
        <h1 className="text-black">Tambah User</h1>
        <hr />
        <form
          className="flex flex-col gap-3"
          onSubmit={handleSubmit(submitUser)}
        >
          <label htmlFor="nama">Nama</label>
          <input
            className="border w-full py-3 pl-2"
            type="text"
            {...register("name", { required: true })}
          />
          <label htmlFor="alamat">Alamat</label>
          <input
            className="border w-full py-3 pl-2"
            type="text"
            {...register("address")}
          />
          <span>Jenis Kelamin</span>
          <div className="flex items-center gap-3">
            <input
              className="border w-5 h-5"
              type="radio"
              id="male"
              {...register("gender")}
              value="male"
            />
            <label htmlFor="male">Pria</label>
            <input
              className="border w-5 h-5"
              type="radio"
              id="female"
              {...register("gender")}
              value="female"
            />
            <label htmlFor="female">Wanita</label>
          </div>
          <label htmlFor="tanggal_lahir">Tanggal Lahir</label>
          <input
            className="border w-full py-3 pl-2"
            type="date"
            {...register("date_of_birth")}
          />
          <div className="flex gap-3 mt-3">
            <button 
            className="w-full bg-amber-200 rounded-lg h-12 cursor-pointer hover:bg-amber-500 hover:font-bold hover:underline"
            disabled={loading}
            >
              {loading ? "Menyimpan Data..." : "Submit"}
            </button>
            <button
              type="button"
              className="w-full bg-red-400 rounded-lg h-12 cursor-pointer hover:bg-red-600 text-white font-bold"
              onClick={() => setShow(false)}
            >
              Tutup
            </button>
          </div>
        </form>
      </div>
    </>
  )
}

export default ModalAdd;
