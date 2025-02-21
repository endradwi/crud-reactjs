import React, { useEffect, useState } from "react";
import ModalAdd from "../components/ModalAdd";
import ModalView from "../components/ModalView";
import ModalEdit from "../components/ModalEdit";
import Button from "../components/Button";

function App() {
  const [getdata, setData] = useState([])
  const [getShow, setShow] = useState(false)
  const [getView, setView] = useState(false)
  const [getEdit, setEdit] = useState(false)
  const [loading, setLoading] = useState(true)
  const [selectedUser, setSelectedUser] = useState(null)
  const [loadingDelete, setLoadingDelete] = useState(null)


  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
    fetch("https://67b6f7232bddacfb270d092e.mockapi.io/users")
    .then((res) => res.json())
    .then((response) => {
      setData(response)
      setLoading(false)
    })
    .catch((err) => console.error("Error fetching data:", err))
    setLoading(false)
    }, 5000)
  }, [])

  const handleView = (user, index) => {
    setSelectedUser({ ...user, tableIndex: index + 1 }) 
    setView(true)
  }
  

  const handleEdit = (user) => {
    setSelectedUser(user)
    setEdit(true)
  }

  const handleDelete = (id) => {
    if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
      setLoadingDelete(id)
  
      fetch(`https://67b6f7232bddacfb270d092e.mockapi.io/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setData((prevData) => prevData.filter((user) => user.id !== id))
        })
        .catch((err) => console.error("Error deleting user:", err))
        .finally(() => {
          setLoadingDelete(null)
        })
    }
  }

  return (
    <>
      {getShow && <ModalAdd setShow={setShow} />}
      {getView && <ModalView setView={setView} selectedUser={selectedUser} />}
      {getEdit && <ModalEdit setEdit={setEdit} selectedUser={selectedUser} setData={setData} />}

      <main className="w-full h-screen flex flex-col gap-3 justify-center items-center">
        <button
          className="border bg-slate-400 hover:bg-slate-900 hover:text-white cursor-pointer py-1 px-3 rounded-lg"
          onClick={() => setShow(!getShow)}
        >
          Tambah User
        </button>
        {loading ? (<p>Loading data...</p>):
        <table className="table-auto border space-y-52">
          <thead className="border-2">
            <tr>
              <td className="border p-2">No</td>
              <td className="border p-2">Nama</td>
              <td className="border p-2">Alamat</td>
              <td className="border p-2">P/W</td>
              <td className="border p-2">Tanggal Lahir</td>
              <td className="border p-2">Tanggal Input</td>
              <td className="border p-2">Aksi</td>
            </tr>
          </thead>
          <tbody>
            {getdata.map((val, index) => (
              <tr key={val.id} className="border">
                <td className="border p-2 text-center">{index + 1}</td>
                <td className="border p-2">{val.name}</td>
                <td className="border p-2">{val.address}</td>
                <td className="border p-2">{val.gender === "female" ? "Wanita" : "Pria"}</td>
                <td className="border p-2">{new Date(val.date_of_birth).toLocaleDateString("id-ID")}</td>
                <td className="border p-2">{new Date(val.input_date).toLocaleString("id-ID")}</td>
                <td className="gap-2 p-2 flex text-center">
                <Button btn="view" onClick={() => handleView(val, index)} />
                  <Button btn="edit" onClick={() => handleEdit(val)} />
                  <Button btn="delete" onClick={() => handleDelete(val.id)} 
                    isLoading={loadingDelete === val.id}
                    />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
    }
      </main>
    </>
  )
}

export default App;
