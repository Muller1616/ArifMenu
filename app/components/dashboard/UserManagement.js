"use client";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  MoreVertical,
  Search,
  Plus,
  Edit,
  UserX,
  Trash2,
  X,
} from "lucide-react";

export default function UserManagement() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showAddUserModal, setShowAddUserModal] = useState(false);
  const [showEditUserModal, setShowEditUserModal] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [showDeleteUserConfirmModal, setShowDeleteUserConfirmModal] =
    useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const [users, setUsers] = useState([
    {
      id: 1,
      fullName: "Girma Lemma",
      role: "Super Admin",
      phone: "+251 912345680",
      addedOn: "June 12, 2025",
      status: "Inactive",
      email: "girma@example.com",
      remark: "Initial user",
    },
    {
      id: 2,
      fullName: "Daniel Ambachew",
      role: "Admin",
      phone: "+251 932345681",
      addedOn: "July 19, 2025",
      status: "Active",
      email: "daniel@example.com",
      remark: "Regular admin",
    },
    {
      id: 3,
      fullName: "Lemlem Girmachew",
      role: "Merchant Support",
      phone: "+251 952345682",
      addedOn: "June 28, 2025",
      status: "Active",
      email: "lemlem@example.com",
      remark: "Support staff",
    },
    {
      id: 4,
      fullName: "Abel Gebrehiwot",
      role: "Super Admin",
      phone: "+251 972345683",
      addedOn: "July 5, 2025",
      status: "Active",
      email: "abel@example.com",
      remark: "Senior admin",
    },
    {
      id: 5,
      fullName: "Hannah Tesfaye",
      role: "Super Admin",
      phone: "+251 992345684",
      addedOn: "Jun 10, 2025",
      status: "Active",
      email: "hannah@example.com",
      remark: "Admin user",
    },
    {
      id: 6,
      fullName: "Kofi Adomah",
      role: "Merchant Support",
      phone: "+251 912345685",
      addedOn: "July 15, 2025",
      status: "Active",
      email: "kofi@example.com",
      remark: "Support user",
    },
    {
      id: 7,
      fullName: "Sara Mehari",
      role: "Admin",
      phone: "+251 922345686",
      addedOn: "July 22, 2025",
      status: "Active",
      email: "sara@example.com",
      remark: "Admin staff",
    },
    {
      id: 8,
      fullName: "Michael Tesfamariam",
      role: "Merchant Support",
      phone: "+251 932345687",
      addedOn: "Nov 30, 2025",
      status: "Inactive",
      email: "michael@example.com",
      remark: "Support staff",
    },
    {
      id: 9,
      fullName: "Elsa Kebede",
      role: "Merchant Support",
      phone: "+251 942345688",
      addedOn: "July 14, 2025",
      status: "Active",
      email: "elsa@example.com",
      remark: "Support user",
    },
    {
      id: 10,
      fullName: "Biniam Asmerom",
      role: "Admin",
      phone: "+251 92345689",
      addedOn: "July 20, 2026",
      status: "Active",
      email: "biniam@example.com",
      remark: "Admin staff",
    },
  ]);
  const filteredUsers = users.filter(
    (user) =>
      user.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.phone.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenAddUserModal = () => {
    setEditingUser(null);
    setShowAddUserModal(true);
  };

  const handleOpenEditUserModal = (user) => {
    setEditingUser(user);
    setShowEditUserModal(true);
  };

  const handleSaveUser = (userData) => {
    if (editingUser) {
      setUsers((prevUsers) =>
        prevUsers.map((user) =>
          user.id === editingUser.id ? { ...user, ...userData } : user
        )
      );
    } else {
      setUsers((prevUsers) => [
        ...prevUsers,
        {
          id:
            prevUsers.length > 0
              ? Math.max(...prevUsers.map((u) => u.id)) + 1
              : 1,
          ...userData,
          addedOn: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      ]);
    }
    setShowAddUserModal(false);
    setShowEditUserModal(false);
    setEditingUser(null);
  };

  const handleToggleUserStatus = (userId) => {
    setUsers((prevUsers) =>
      prevUsers.map((user) =>
        user.id === userId
          ? {
              ...user,
              status: user.status === "Active" ? "Inactive" : "Active",
            }
          : user
      )
    );
  };

  const handleDeleteUser = (userId) => {
    setUserToDelete(userId);
    setShowDeleteUserConfirmModal(true);
  };

  const confirmDeleteUser = () => {
    if (userToDelete) {
      setUsers((prevUsers) =>
        prevUsers.filter((user) => user.id !== userToDelete)
      );
      setUserToDelete(null);
      setShowDeleteUserConfirmModal(false);
    }
  };

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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  User Full Name
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Role
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Phone Number
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Added on
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Status
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredUsers.map(
                (
                  user,
                  index // Use index here
                ) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="px-6 py-4 text-sm text-gray-900">
                      {index + 1}
                    </td>{" "}
                    {/* Display index + 1 */}
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {user.fullName}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.role}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-600">
                      {user.addedOn}
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex px-3 py-1 text-xs font-medium rounded-full ${
                          user.status === "Active"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
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
                            <span>
                              {user.status === "Active"
                                ? "Mark as Inactive"
                                : "Mark as Active"}
                            </span>
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
                )
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
            « Previous
          </button>
          <div className="flex items-center space-x-1">
            <button className="px-3 py-1 text-sm font-medium bg-green-600 text-white rounded-md">
              1
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
              2
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
              3
            </button>
            <span className="text-sm text-gray-500">...</span>
            <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
              10
            </button>
          </div>
          <button className="px-3 py-1 text-sm text-gray-600 rounded-md hover:bg-gray-100">
            Next »
          </button>
        </div>
      </div>

      {/* Add/Edit User Modal */}
      {(showAddUserModal || showEditUserModal) && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-6">
          <div className="bg-white rounded-2xl max-w-3xl w-full p-10 shadow-xl relative">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-green-600 font-semibold text-lg select-none">
                {editingUser ? "Edit User" : "Add New User"}
              </h2>
              <button
                onClick={() => {
                  setShowAddUserModal(false);
                  setShowEditUserModal(false);
                  setEditingUser(null);
                }}
                className="w-8 h-8 flex items-center justify-center rounded-full border border-red-400 text-red-600 hover:bg-red-50 transition-colors"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                const formData = new FormData(e.target);
                const firstName = formData.get("firstName");
                const lastName = formData.get("lastName");
                const countryCode = formData.get("countryCode");
                const mobilePhone = formData.get("mobilePhone");
                const emailAddress = formData.get("emailAddress");
                const role = formData.get("role");
                const remark = formData.get("remark");

                handleSaveUser({
                  fullName: `${firstName} ${lastName}`,
                  role: role,
                  phone: `${countryCode} ${mobilePhone}`,
                  status: formData.get("status") || "Active",
                  email: emailAddress,
                  remark: remark,
                });
              }}
              className="space-y-8"
            >
              <h3 className="text-gray-600 font-semibold text-sm mb-4">
                Business location address and contact
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="firstName"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    First Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    defaultValue={editingUser?.fullName.split(" ")[0] || ""}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter firstname"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastName"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    Last Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    defaultValue={editingUser?.fullName.split(" ")[1] || ""}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter lastname"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="mobilePhone"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    Mobile Phone <span className="text-red-500">*</span>
                  </label>

                  <div className="flex gap-0">
                    {/* Country Code Select */}
                    <Select
                      name="countryCode"
                      defaultValue={editingUser?.phone?.split(" ")[0] || "+251"}
                    >
                      <SelectTrigger className="w-28 rounded-l-xl border border-gray-200 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none">
                        <SelectValue placeholder="+251" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="+251">+251</SelectItem>
                        <SelectItem value="+1">+1</SelectItem>
                        <SelectItem value="+44">+44</SelectItem>
                      </SelectContent>
                    </Select>

                    {/* Mobile Number Input */}
                    <input
                      type="tel"
                      id="mobilePhone"
                      name="mobilePhone"
                      defaultValue={editingUser?.phone?.split(" ")[1] || ""}
                      className="flex-1 border border-gray-200 rounded-r-xl px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none"
                      placeholder="Enter phone number"
                      required
                    />
                  </div>
                </div>

                {/* email area */}
                <div>
                  <label
                    htmlFor="emailAddress"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    defaultValue={editingUser?.email || ""}
                    className="w-full border border-gray-200 rounded-md px-3 py-2 text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter email address"
                    required
                  />
                </div>
              </div>

              <h3 className="text-gray-600 font-semibold text-sm mb-4">Role</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="role"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    Role <span className="text-red-500">*</span>
                  </label>
                  <Select name="role" defaultValue={editingUser?.role || ""}>
                    <SelectTrigger className="w-full border border-gray-200 rounded-md focus:ring-1 focus:ring-green-500 focus:border-green-500">
                      <SelectValue placeholder="Select role" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Super Admin">Super Admin</SelectItem>
                      <SelectItem value="Admin">Admin</SelectItem>
                      <SelectItem value="Merchant Support">
                        Merchant Support
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <label
                    htmlFor="remark"
                    className="block text-gray-500 font-medium mb-2 text-sm"
                  >
                    Remark
                  </label>
                  <textarea
                    id="remark"
                    name="remark"
                    defaultValue={editingUser?.remark || ""}
                    className="w-full border border-gray-200 rounded-md px-3  text-gray-700 placeholder-gray-400 focus:ring-1 focus:ring-green-500 focus:border-green-500 outline-none resize-none"
                    rows="2"
                    placeholder="Type your remark..."
                  ></textarea>
                </div>
              </div>

              <div className="flex justify-end space-x-4 pt-6">
                <button
                  type="button"
                  onClick={() => {
                    setShowAddUserModal(false);
                    setShowEditUserModal(false);
                    setEditingUser(null);
                  }}
                  className="px-5 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
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
                  setShowDeleteUserConfirmModal(false);
                  setUserToDelete(null);
                }}
                className="text-gray-500 hover:text-gray-700"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="bg-yellow-50 border border-yellow-200 text-yellow-800 p-4 rounded-lg flex items-start space-x-3 mb-6">
              <svg
                className="w-6 h-6 flex-shrink-0 mt-0.5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>
                <p className="font-bold mb-1">
                  Are you sure you want to delete this user?
                </p>
                <p className="text-sm">
                  This action will permanently delete the selected user. This
                  cannot be undone.
                </p>
              </div>
            </div>

            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteUserConfirmModal(false);
                  setUserToDelete(null);
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
  );
}
