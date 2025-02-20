import React from 'react'
import ModalAdd from '../components/ModalAdd'

const data = [  
  {
  No: 1,
  Name: "Abdul",
  Alamat: "Bekasi",
  Jenis_Kelamin: "P",
  Tanggal_Lahir: "02-02-1998",
  Tanggal_Input: "11-02-2024"
},
{
  No: 1,
  Name: "Abdul",
  Alamat: "Bekasi",
  Jenis_Kelamin: "P",
  Tanggal_Lahir: "02-02-1998",
  Tanggal_Input: "11-02-2024"
},
{
  No: 1,
  Name: "Abdul",
  Alamat: "Bekasi",
  Jenis_Kelamin: "P",
  Tanggal_Lahir: "02-02-1998",
  Tanggal_Input: "11-02-2024"
},
{
  No: 1,
  Name: "Abdul",
  Alamat: "Bekasi",
  Jenis_Kelamin: "P",
  Tanggal_Lahir: "02-02-1998",
  Tanggal_Input: "11-02-2024"
},
]

function modalAdd() {
  console.log("Hello")
}


function App() {
  return (
    <>
        <ModalAdd/>
      <main className='w-full h-screen hidden flex-col gap-3 justify-center items-center'>
        <span className='border bg-slate-400 hover:bg-slate-900 hover:text-white cursor-pointer py-1 px-3 rounded-lg' onClick={()=>modalAdd()}>Tambah User</span>
        <table className='table-auto border w-full max-w-2xl h-full max-h-20 border-separate border-spacing-y-2'>
          <thead className='border-2 '>
            <tr className=''>
              <td className='p-1'>No</td>
              <td className='p-1'>Nama</td>
              <td className='p-1'>Alamat</td>
              <td className='p-1'>P/W</td>
              <td className='p-1'>Tanggal Lahir</td>
              <td className='p-1'>Tanggal Input</td>
              <td className='p-1'>Aksi</td>
            </tr>
          </thead>
          <tbody className=''>
            {data.map((val)=>{
              return <>
              <tr className='my-5'>
              <td className='p-1'>{val.No}</td>
              <td className='p-1'>{val.Name}</td>
              <td className='p-1'>{val.Alamat}</td>
              <td className='p-1'>{val.Jenis_Kelamin}</td>
              <td className='p-1'>{val.Tanggal_Lahir}</td>
              <td className='p-1'>{val.Tanggal_Input}</td>
              <td className='space-x-2'>
                <button className='cursor-pointer w-20 hover:bg-green-300 hover:underline hover:font-bold rounded-lg py-1 px-2 bg-green-500'>View</button>
                <button className='cursor-pointer w-20 hover:bg-yellow-300 hover:underline hover:font-bold rounded-lg py-1 px-2 bg-yellow-500'>Edit</button>
                <button className='cursor-pointer w-20 hover:bg-red-300 hover:underline hover:font-bold rounded-lg py-1 px-2 bg-red-500'>Delete</button>
              </td>
            </tr>
              </>
            })}
            
          </tbody>
        </table>
      </main>
    </>
  )
}

export default App
