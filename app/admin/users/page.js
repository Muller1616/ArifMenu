"use client";

import { useState } from "react";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { MoreVertical, Search, Plus, Edit, UserX, Trash2, X } from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [users, setUsers] = useState([
    { id: 1, fullName: "Girma Lemma", role: "Super Admin", phone: "+251 912345680", addedOn: "June 12, 2025", status: "Inactive", email: "girma@example.com", remark: "Initial user" },
    { id: 2, fullName: "Daniel Ambachew", role: "Admin", phone: "+251 932345681", addedOn: "July 19, 2025", status: "Active", email: "daniel@example.com", remark: "Regular admin" },
    { id: 3, fullName: "Lemlem Girmachew", role: "Merchant Support", phone: "+251 952345682", addedOn: "June 28, 2025", status: "Active", email: "lemlem@example.com", remark: "Support staff" },
    { id: 4, fullName: "Abel Gebrehiwot", role: "Super Admin", phone: "+251 972345683", addedOn: "July 5, 2025", status: "Active", email: "abel@example.com", remark: "Senior admin" },
    { id: 5, fullName: "Hannah Tesfaye", role: "Super Admin", phone: "+251 992345684", addedOn: "Jun 10, 2025", status: "Active", email: "hannah@example.com", remark: "Admin user" },
    { id: 6, fullName: "Kofi Adomah", role: "Merchant Support", phone: "+251 912345685", addedOn: "July 15, 2025", status: "Active", email: "kofi@example.com", remark: "Support user" },
    { id: 7, fullName: "Sara Mehari", role: "Admin", phone: "+251 922345686", addedOn: "July 22, 2025", status: "Active", email: "sara@example.com", remark: "Admin staff" },
    { id: 8, fullName: "Michael Tesfamariam", role: "Merchant Support", phone: "+251 932345687", addedOn: "Nov 30, 2025", status: "Inactive", email: "michael@example.com", remark: "Support staff" },
    { id: 9, fullName: "Elsa Kebede", role: "Merchant Support", phone: "+251 942345688", addedOn: "July 14, 2025", status: "Active", email: "elsa@example.com", remark: "Support user" },
    { id: 10, fullName: "Biniam Asmerom", role: "Admin", phone: "+251 92345689", addedOn: "July 20, 2026", status: "Active", email: "biniam@example.com", remark: "Admin staff" },
  ]);

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAddUserModal = () => { setEditingUser(null); setShowAddUserModal(true); };
  const handleOpenEditUserModal = (user) => { setEditingUser(user); setShowEditUserModal(true); };
  const handleSaveUser = (userData) => {
    if (editingUser) {
      setUsers(users.map(u => u.id === editingUser.id ? { ...u, ...userData } : u));
    } else {
      setUsers([
        ...users,
        { id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1, ...userData, addedOn: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }) }
      ]);
    }
    setShowAddUserModal(false); setShowEditUserModal(false); setEditingUser(null);
  };

  const handleToggleUserStatus = (userId) => {
    setUsers(users.map(u => u.id === userId ? { ...u, status: u.status === "Active" ? "Inactive" : "Active" } : u));
  };

  const handleDeleteUser = (userId) => { setUserToDelete(userId); setShowDeleteUserConfirmModal(true); };
  const confirmDeleteUser = () => { if(userToDelete){ setUsers(users.filter(u => u.id !== userToDelete)); setUserToDelete(null); setShowDeleteUserConfirmModal(false); } };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-2xl min-h-screen">
      {/* Search + Add */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-6 gap-4">
        <div className="relative flex-1 max-w-md w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search users"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          onClick={handleOpenAddUserModal}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center justify-center hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" /> Add New User
        </button>
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 table-auto">
          <thead className="bg-[#eff0f6]">
            <tr>
              {["#", "User Full Name", "Role", "Phone Number", "Added on", "Status", "Actions"].map((title, i) => (
                <th key={i} className="px-4 py-3 text-left text-sm font-medium text-gray-500">{title}</th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-100">
            {filteredUsers.map((user, idx) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="px-4 py-2 text-sm text-gray-900">{idx + 1}</td>
                <td className="px-4 py-2 text-sm font-medium text-gray-900">{user.fullName}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{user.role}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{user.phone}</td>
                <td className="px-4 py-2 text-sm text-gray-600">{user.addedOn}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}>{user.status}</span>
                </td>
                <td className="px-4 py-2">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500"><MoreVertical className="w-5 h-5" /></button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end" className="w-48">
                      <DropdownMenuItem className="flex items-center cursor-pointer" onClick={() => handleOpenEditUserModal(user)}>
                        <Edit className="mr-2 w-4 h-4" /> Edit User
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center cursor-pointer" onClick={() => handleToggleUserStatus(user.id)}>
                        <UserX className="mr-2 w-4 h-4" /> {user.status === "Active" ? "Mark as Inactive" : "Mark as Active"}
                      </DropdownMenuItem>
                      <DropdownMenuItem className="flex items-center text-red-600 cursor-pointer" onClick={() => handleDeleteUser(user.id)}>
                        <Trash2 className="mr-2 w-4 h-4" /> Delete user
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
