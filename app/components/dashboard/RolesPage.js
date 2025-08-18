"use client"

import { useState } from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { MoreVertical, Search, Plus, Edit, Trash2, X } from "lucide-react"

export default function RolesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [roles, setRoles] = useState([
    {
      id: 1,
      title: "Super Admin",
      remark:
        "The Super Admin oversees all system operations and has full control over user management, system configurations, data access, and reporting.",
      privileges:
        "Full access, user management, system configuration, data access, reporting",
      addedOn: "June 12, 2025",
    },
    {
      id: 2,
      title: "Admin",
      remark:
        "The Admin manages user accounts and has control over content moderation, basic system settings, and merchant-specific data.",
      privileges:
        "User management, content moderation, basic system settings, merchant data",
      addedOn: "July 19, 2025",
    },
    {
      id: 3,
      title: "Merchant Support",
      remark:
        "Merchant Support provides assistance to merchants, manages their menu items, and handles customer inquiries.",
      privileges:
        "Merchant support, account management, food listing, customer inquiries",
      addedOn: "June 28, 2025",
    },
  ])

  const [showAddEditRoleModal, setShowAddEditRoleModal] = useState(false)
  const [editingRole, setEditingRole] = useState(null)
  const [showDeleteRoleConfirmModal, setShowDeleteRoleConfirmModal] =
    useState(false)
  const [roleToDelete, setRoleToDelete] = useState(null)
  const [roleTitle, setRoleTitle] = useState("")
  const [roleRemark, setRoleRemark] = useState("")
  const [selectedPrivileges, setSelectedPrivileges] = useState([])

  const allPrivileges = {
    view: ["View Users", "View Merchants", "View Menu", "View Categories"],
    add: ["Add User", "Add Merchant", "Add Menu Item", "Add Category"],
    update: [
      "Update User",
      "Update Merchant",
      "Update Menu Item",
      "Update Category",
    ],
    delete: [
      "Delete User",
      "Delete Merchant",
      "Delete Menu Item",
      "Delete Category",
    ],
  }

  const filteredRoles = roles.filter(
    (role) =>
      role.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.remark.toLowerCase().includes(searchTerm.toLowerCase()) ||
      role.privileges.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const handleEditRole = (role) => {
    setEditingRole(role)
    setRoleTitle(role.title)
    setRoleRemark(role.remark)
    setSelectedPrivileges(role.privileges.split(", ").map((p) => p.trim()))
    setShowAddEditRoleModal(true)
  }

  const handleDeleteRole = (roleId) => {
    setRoleToDelete(roleId)
    setShowDeleteRoleConfirmModal(true)
  }

  const confirmDeleteRole = () => {
    if (roleToDelete) {
      setRoles((prevRoles) =>
        prevRoles.filter((role) => role.id !== roleToDelete),
      )
      setRoleToDelete(null)
      setShowDeleteRoleConfirmModal(false)
    }
  }

  const handleOpenAddRoleModal = () => {
    setEditingRole(null)
    setRoleTitle("")
    setRoleRemark("")
    setSelectedPrivileges([])
    setShowAddEditRoleModal(true)
  }

  const handleSaveRole = () => {
    const newRoleData = {
      title: roleTitle,
      remark: roleRemark,
      privileges: selectedPrivileges.join(", "),
    }

    if (editingRole) {
      setRoles((prevRoles) =>
        prevRoles.map((role) =>
          role.id === editingRole.id ? { ...role, ...newRoleData } : role,
        ),
      )
    } else {
      setRoles((prevRoles) => [
        ...prevRoles,
        {
          id:
            prevRoles.length > 0
              ? Math.max(...prevRoles.map((r) => r.id)) + 1
              : 1,
          ...newRoleData,
          addedOn: new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric",
          }),
        },
      ])
    }
    setShowAddEditRoleModal(false)
    setEditingRole(null)
    setRoleTitle("")
    setRoleRemark("")
    setSelectedPrivileges([])
  }

  const handleTogglePrivilege = (privilege) => {
    setSelectedPrivileges((prev) =>
      prev.includes(privilege)
        ? prev.filter((p) => p !== privilege)
        : [...prev, privilege],
    )
  }

  return (
    <div className="p-8 bg-[#f6f7f8] rounded-2xl min-h-screen">
      <div className="flex items-center justify-between mb-6">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search Role"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent outline-none"
          />
        </div>
        <button
          onClick={handleOpenAddRoleModal}
          className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center hover:bg-green-700 transition-colors"
        >
          <Plus className="w-5 h-5 mr-2" />
          Add New Role
        </button>
      </div>

      {/* Roles Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-100">
            <thead className="bg-[#eff0f6]">
              <tr>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  #
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Role Title
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Remark
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Privileges
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Added on
                </th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredRoles.map((role, index) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">
                    {index + 1}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">
                    {role.title}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {role.remark}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {role.privileges}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {role.addedOn}
                  </td>
                  <td className="px-6 py-4">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <button className="p-2 rounded-md hover:bg-gray-100 text-gray-500">
                          <MoreVertical className="w-5 h-5" />
                        </button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end" className="w-40">
                        <DropdownMenuItem
                          className="flex items-center cursor-pointer"
                          onClick={() => handleEditRole(role)}
                        >
                          <Edit className="mr-2 h-4 w-4" />
                          <span>Edit Role</span>
                        </DropdownMenuItem>
                        <DropdownMenuItem
                          className="flex items-center text-red-600 cursor-pointer"
                          onClick={() => handleDeleteRole(role.id)}
                        >
                          <Trash2 className="mr-2 h-4 w-4" />
                          <span>Delete Role</span>
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

      {/* Add/Edit Role Modal */}
      {showAddEditRoleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4 overflow-auto">
          <div className="bg-white rounded-2xl max-w-5xl w-full p-0 shadow-lg">
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b">
              <h2 className="text-lg font-semibold text-gray-900">
                {editingRole ? "Edit Role" : "Add New Role"}
              </h2>
              <button
                onClick={() => setShowAddEditRoleModal(false)}
                className="p-1.5 rounded-full hover:bg-red-100 text-red-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Form */}
            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSaveRole()
              }}
            >
              <div className="px-6 py-6 space-y-6">
                {/* Section Title */}
                <h3 className="text-sm font-medium text-gray-700 border-b pb-2">
                  Business location address and contact
                </h3>

                {/* Inputs */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role Title <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={roleTitle}
                      onChange={(e) => setRoleTitle(e.target.value)}
                      placeholder="Enter role title"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Role Remarks <span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      value={roleRemark}
                      onChange={(e) => setRoleRemark(e.target.value)}
                      placeholder="Write role remark"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:ring-2 focus:ring-green-500 outline-none"
                      required
                    />
                  </div>
                </div>

                {/* Privilege Sections */}
                <div className="grid grid-cols-2 gap-6">
                  {/* Added Privileges */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      Added Privilege
                    </h3>
                    <div className="space-y-2">
                      {selectedPrivileges.length === 0 && (
                        <p className="text-sm text-gray-500">
                          No privileges added.
                        </p>
                      )}
                      {selectedPrivileges.map((privilege) => (
                        <div
                          key={privilege}
                          className="flex items-center justify-between bg-gray-100 text-gray-600 px-3 py-2 rounded-md text-sm"
                        >
                          {privilege}
                          <button
                            type="button"
                            onClick={() => handleTogglePrivilege(privilege)}
                            className="text-red-500 hover:text-red-700"
                          >
                            <X className="w-4 h-4" />
                          </button>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Privileges */}
                  <div>
                    <h3 className="text-sm font-medium text-gray-700 mb-3">
                      Privileges
                    </h3>
                    <div className="space-y-4">
                      {Object.entries(allPrivileges).map(
                        ([type, privileges]) => (
                          <div key={type}>
                            <p className="text-xs font-medium text-gray-600 mb-2 capitalize">
                              {type} Privileges
                            </p>
                            <div className="flex flex-wrap gap-2">
                              {privileges.map((privilege) => (
                                <button
                                  key={privilege}
                                  type="button"
                                  onClick={() =>
                                    handleTogglePrivilege(privilege)
                                  }
                                  className="px-3 py-1.5 border border-gray-300 rounded-md bg-gray-50 text-gray-700 text-xs hover:bg-gray-100"
                                >
                                  {privilege} +
                                </button>
                              ))}
                            </div>
                          </div>
                        ),
                      )}
                    </div>
                  </div>
                </div>
              </div>

              {/* Footer Buttons */}
              <div className="flex justify-end gap-3 pt-4 border-t px-6 py-4">
                <button
                  type="button"
                  onClick={() => setShowAddEditRoleModal(false)}
                  className="px-5 py-2 border border-gray-300 rounded-md text-gray-700 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 bg-[#3CA32B] text-white rounded-md hover:bg-green-700"
                >
                  {editingRole ? "Save Changes" : "Add Role"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Role Modal */}
      {showDeleteRoleConfirmModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-md w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">Delete Role</h2>
              <button
                onClick={() => {
                  setShowDeleteRoleConfirmModal(false)
                  setRoleToDelete(null)
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
                  Are you sure you want to delete this role?
                </p>
                <p className="text-sm">
                  This action will permanently delete the selected role. This
                  cannot be undone.
                </p>
              </div>
            </div>
            <div className="flex justify-end space-x-3">
              <button
                type="button"
                onClick={() => {
                  setShowDeleteRoleConfirmModal(false)
                  setRoleToDelete(null)
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={confirmDeleteRole}
                className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
              >
                Delete Role
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
