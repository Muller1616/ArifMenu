"use client"

import { SelectItem } from "@/components/ui/select"

import { SelectContent } from "@/components/ui/select"

import { SelectValue } from "@/components/ui/select"

import { SelectTrigger } from "@/components/ui/select"

import { Select } from "@/components/ui/select"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Search, Plus, Edit, UserX, Trash2 } from "lucide-react"

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("")
  const [showAddUserModal, setShowAddUserModal] = useState(false)
  const [showEditUserModal, setShowEditUserModal] = useState(false)
  const [editingUser, setEditingUser] = useState(null)
  const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] = useState(false)
  const [userToDelete, setUserToDelete] = useState(null)

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "Girma Lemma",
      role: "Super Admin",
      phone: "+251 912345680",
      addedOn: "June 12, 2025",
      status: "Inactive",
    },
    {
      id: 2,
      fullName: "Daniel Ambachew",
      role: "Admin",
      phone: "+251 932345681",
      addedOn: "July 19, 2025",
      status: "Active",
    },
    {
      id: 3,
      fullName: "Lemlem Girmachew",
      role: "Merchant Support",
      phone: "+251 952345682",
      addedOn: "June 28, 2025",
      status: "Active",
    },
    {
      id: 4,
      fullName: "Abel Gebrehiwot",
      role: "Super Admin",
      phone: "+251 972345683",
      addedOn: "July 5, 2025",
      status: "Active",
    },
    {
      id: 5,
      fullName: "Hannah Tesfaye",
      role: "Super Admin",
      phone: "+251 992345684",
      addedOn: "Jun 10, 2025",
      status: "Active",
    },
    {
      id: 6,
      fullName: "Kofi Adomah",
      role: "Merchant Support",
      phone: "+251 912345685",
      addedOn: "July 15, 2025",
      status: "Active",
    },
    {
      id: 7,
      fullName: "Sara Mehari",
      role: "Admin",
      phone: "+251 922345686",
      addedOn: "July 22, 2025",
      status: "Active",
    },
    {
      id: 8,
      fullName: "Michael Tesfamariam",
      role: "Merchant Support",
      phone: "+251 932345687",
      addedOn: "Nov 30, 2025",
      status: "Inactive",
    },
    {
      id: 9,
      fullName: "Elsa Kebede",
      role: "Merchant Support",
      phone: "+251 942345688",
      addedOn: "July 14, 2025",
      status: "Active",
    },
    {
      id: 10,
      fullName: "Biniam Asmerom",
      role: "Admin",
      phone: "+251 92345689",
      addedOn: "July 20, 2026",
      status: "Active",
    },
  ])

  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleOpenAddUserModal = () => {
    setEditingUser(null)
    setShowAddUserModal(true)
  }

  const handleOpenEditUserModal = (user) => {
    setEditingUser(user)
    setShowEditUserModal(true)
  }

  const handleSaveUser = (userData) => {
    if (editingUser) {
      setUsers((prevUsers) => prevUsers.map((user) => (user.id === editingUser.id ? { ...user, ...userData } : user)))
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id: prevUsers.length > 0 ? Math.max(...prevUsers.map((u) => u.id)) + 1 : 1,
          ...userData,
          addedOn: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
        },
      ])
    }
    setShowAddUserModal(false)
    setShowEditUserModal(false)
    setEditingUser(null)
  }

  const handleToggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId ? { ...user, status: user.status === "Active" ? "Inactive" : "Active" } : user,
      ),
    )
  }

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId)
    setShowDeleteUserConfirmModal(true)
  }

  const confirmDeleteUser = () => {
    if (userToDelete) {
      setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userToDelete))
      setUserToDelete(null)
      setShowDeleteUserConfirmModal(false)
    }
  }

  return (
    <div className="p-8 bg-[#f6f7f8] rounded-2xl min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
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
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New User
        </button>
      </div>

      {/* Users Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#eff0f6]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">#</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">User Full Name</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Role</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Phone Number</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Added on</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Status</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredUsers.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{user.id}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{user.fullName}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.role}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.phone}</td>
                  <td className="px-6 py-4 text-sm text-gray-600">{user.addedOn}</td>
                  <td className="px-6 py-4">
                    <span
                      className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                        user.status === "Active" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-48">
                        <DropdownMenuItem
                          className="flex items-center cursor-pointer"
                          onClick={() => handleOpenEditUserModal(user)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit User</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center cursor-pointer"
                          onClick={() => handleToggleUserStatus(user.id)}
                        >
                          <UserX className="mr-2 h-4 w-4" />
                          <span>{user.status === "Active" ? "Mark as Inactive" : "Mark as Active"}</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center text-red-600 cursor-pointer"
                          onClick={() => handleDeleteUser(user.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete user</span>
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">« Previous</button>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-md">1</button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">2</button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">3</button>
            <span className="text-sm text-gray-500">...</span>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">10</button>
          </div>
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">Next »</button>
        </div>
      </div>

      {/* Add/Edit User Modal */}
      {(showAddUserModal || showEditUserModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{editingUser ? "Edit User" : "Add New User"}</h2>
              <button
                onClick={() => {
                  setShowAddUserModal(false)
                  setShowEditUserModal(false)
                  setEditingUser(null)
                }}
                className="bg-red-100 text-red-600 rounded-full p-1.5 hover:bg-red-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                const formData = new FormData(e.target)
                handleSaveUser({
                  fullName: formData.get("fullName"),
                  role: formData.get("role"),
                  phone: formData.get("phone"),
                  status: formData.get("status") || "Active", // Default to Active if not set
                })
              }}
              className="space-y-4"
            >
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  User Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  defaultValue={editingUser?.fullName || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Enter full name"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Role <span className="text-red-500">*</span>
                </label>
                <Select name="role" defaultValue={editingUser?.role || ""}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select user role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Super Admin">Super Admin</SelectItem>
                    <SelectItem value="Admin">Admin</SelectItem>
                    <SelectItem value="Merchant Support">Merchant Support</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="phone"
                  defaultValue={editingUser?.phone || ""}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                  placeholder="Enter phone number"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Status</label>
                <Select name="status" defaultValue={editingUser?.status || "Active"}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Active</SelectItem>
                    <SelectItem value="Inactive">Inactive</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddUserModal(false)
                    setShowEditUserModal(false)
                    setEditingUser(null)
                  }}
                  className="flex-1 bg-gray-100 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-400 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="flex-1 bg-[#3CA32B] text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors"
                >
                  {editingUser ? "Save Changes" : "Add User"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete User Confirmation Modal */}
      {showDeleteUserConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Delete User</h2>
              <button
                onClick={() => {
                  setShowDeleteUserConfirmModal(false)
                  setUserToDelete(null)
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start space-x-3 mb-6">
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>
                <p className="font-bold mb-1">Are you sure you want to delete this user?</p>
                <p className="text-sm">This action will permanently delete the selected user. This cannot be undone.</p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteUserConfirmModal(false)
                  setUserToDelete(null)
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteUser}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete User
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
