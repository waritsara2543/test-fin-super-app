import * as React from "react";
import AdminTable from "../(components)/adminTable";
import AddBtn from "../(components)/addBtn";

const AdminsPage = () => {
  return (
    <main className="flex min-h-screen flex-col p-10 bg-white gap-10">
      <div className="flex justify-between">
        <div className="text-black text-4xl font-bold text-start">Admins</div>
        {/* <AddBtn /> */}
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Add
        </button>
      </div>
      <AdminTable />
    </main>
  );
};

export default AdminsPage;
