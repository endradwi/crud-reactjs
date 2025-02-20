import React, { useEffect, useState } from "react";
import ModalAdd from "../components/ModalAdd";
import ModalView from "../components/ModalView";
import ModalEdit from "../components/ModalEdit";

function App() {
  const [getdata, setData] = useState([]);
  const [getShow, setShow] = useState(false);
  const [getView, setView] = useState(false);
  const [getEdit, setEdit] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetch("https://67b6f7232bddacfb270d092e.mockapi.io/users")
      .then((res) => res.json())
      .then((response) => {
        setData(response);
      })
      .catch((err) => console.error("Error fetching data:", err));
  }, []);

  function handleDelete(id) {
    if (window.confirm("Apakah Anda yakin ingin menghapus user ini?")) {
      fetch(`https://67b6f7232bddacfb270d092e.mockapi.io/users/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then(() => {
          setData((prevData) => prevData.filter((user) => user.id !== id));
        })
        .catch((err) => console.error("Error deleting user:", err));
    }
  }

  return (
    <>
      {getShow && <ModalAdd setShow={setShow} />}
      {getView && <ModalView setView={setView} selectedUser={selectedUser} />}
      {getEdit && <ModalEdit setEdit={setEdit} selectedUser={selectedUser} setData={setData} />}

      <main className="w-full h-screen flex flex-col gap-3 justify-center items-center">
        <span
          className="border bg-slate-400 hover:bg-slate-900 hover:text-white cursor-pointer py-1 px-3 rounded-lg"
          onClick={() => setShow(!getShow)} 
        >
          Tambah User
        </span>

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
                <td className="border p-2 space-x-1 text-center">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => {
                      setSelectedUser(val);
                      setView(true);
                    }}
                  >
                    [View]
                  </button>
                  <button
                    className="text-yellow-600 hover:underline"
                    onClick={() => {
                      setSelectedUser(val);
                      setEdit(true);
                    }}
                  >
                    [Edit]
                  </button>
                  <button
                    className="text-red-600 hover:underline"
                    onClick={() => handleDelete(val.id)}
                  >
                    [Delete]
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </>
  );
}

export default App;
