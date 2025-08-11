"use client"

import { useState } from "react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { MoreVertical, Search, Plus, Edit, Trash2, X } from "lucide-react"

export default function RolesPage() {
  const [searchTerm, setSearchTerm] = useState("")

  const [roles, setRoles] = useState([
    {
      id: 1,
      title: "Super Admin",
      remark:
        "The Super Admin oversees all system operations and has full control over user management, system configurations, data access, and reporting.",
      privileges: "Full access, user management, system configuration, data access, reporting",
      addedOn: "June 12, 2025",
    },
    {
      id: 2,
      title: "Admin",
      remark:
        "The Admin manages user accounts and has control over content moderation, basic system settings, and merchant-specific data.",
      privileges: "User management, content moderation, basic system settings, merchant data",
      addedOn: "July 19, 2025",
    },
    {
      id: 3,
      title: "Merchant Support",
      remark:
        "Merchant Support provides assistance to merchants, manages their menu items, and handles customer inquiries.",
      privileges: "Merchant support, account management, food listing, customer inquiries",
      addedOn: "June 28, 2025",
    },
  ])

  const [showAddEditRoleModal, setShowAddEditRoleModal] = useState(false)
  const [editingRole, setEditingRole] = useState(null)
  const [showDeleteRoleConfirmModal, setShowDeleteRoleConfirmModal] = useState(false)
  const [roleToDelete, setRoleToDelete] = useState(null)
  const [roleTitle, setRoleTitle] = useState("")
  const [roleRemark, setRoleRemark] = useState("")
  const [selectedPrivileges, setSelectedPrivileges] = useState([])

  const allPrivileges = {
    view: ["View Users", "View Merchants", "View Menu", "View Categories"],
    add: ["Add User", "Add Merchant", "Add Menu Item", "Add Category"],
    update: ["Update User", "Update Merchant", "Update Menu Item", "Update Category"],
    delete: ["Delete User", "Delete Merchant", "Delete Menu Item", "Delete Category"],
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
    setSelectedPrivileges(role.privileges.split(", ").map((p) => p.trim())) // Convert string to array
    setShowAddEditRoleModal(true)
  }

  const handleDeleteRole = (roleId) => {
    setRoleToDelete(roleId)
    setShowDeleteRoleConfirmModal(true)
  }

  const confirmDeleteRole = () => {
    if (roleToDelete) {
      setRoles((prevRoles) => prevRoles.filter((role) => role.id !== roleToDelete))
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
        prevRoles.map((role) => (role.id === editingRole.id ? { ...role, ...newRoleData } : role)),
      )
    } else {
      setRoles((prevRoles) => [
        ...prevRoles,
        {
          id: prevRoles.length > 0 ? Math.max(...prevRoles.map((r) => r.id)) + 1 : 1,
          ...newRoleData,
          addedOn: new Date().toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" }),
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
      prev.includes(privilege) ? prev.filter((p) => p !== privilege) : [...prev, privilege],
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
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">#</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Role Title</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Remark</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Privileges</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Added on</th>
                <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Actions</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-100">
              {filteredRoles.map((role, index) => (
                <tr key={role.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 text-sm text-gray-900">{index + 1}</td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-900">{role.title}</td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {role.remark}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600 max-w-xs overflow-hidden text-ellipsis whitespace-nowrap">
                    {role.privileges}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">{role.addedOn}</td>
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
      {showAddEditRoleModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-lg max-w-3xl w-full p-6">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-xl font-bold text-gray-900">{editingRole ? "Edit Role" : "Add New Role"}</h2>
              <button
                onClick={() => setShowAddEditRoleModal(false)}
                className="bg-red-100 text-red-600 rounded-full p-1.5 hover:bg-red-200"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form
              onSubmit={(e) => {
                e.preventDefault()
                handleSaveRole()
              }}
              className="space-y-6"
            >
              <h3 className="text-lg font-semibold text-gray-800">Business location address and contact</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="roleTitle" className="block text-sm font-medium text-gray-700 mb-2">
                    Role Title <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="roleTitle"
                    value={roleTitle}
                    onChange={(e) => setRoleTitle(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    placeholder="Enter role title"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="roleRemark" className="block text-sm font-medium text-gray-700 mb-2">
                    Role Remarks <span className="text-red-500">*</span>
                  </label>
                  <textarea
                    id="roleRemark"
                    value={roleRemark}
                    onChange={(e) => setRoleRemark(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 outline-none"
                    rows="3"
                    placeholder="Write role remark"
                    required
                  ></textarea>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Added Privilege</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedPrivileges.length === 0 && (
                      <p className="text-sm text-gray-500">No privileges added yet.</p>
                    )}
                    {selectedPrivileges.map((privilege) => (
                      <span
                        key={privilege}
                        className="inline-flex items-center px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-sm font-medium"
                      >
                        {privilege}
                        <button
                          type="button"
                          onClick={() => handleTogglePrivilege(privilege)}
                          className="ml-2 text-gray-500 hover:text-gray-700"
                        >
                          <X className="w-3 h-3" />
                        </button>
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-4">Privileges</h3>
                  <div className="space-y-4">
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">View Privileges</p>
                      <div className="flex flex-wrap gap-2">
                        {allPrivileges.view.map((privilege) => (
                          <button
                            key={privilege}
                            type="button"
                            onClick={() => handleTogglePrivilege(privilege)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedPrivileges.includes(privilege)
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {privilege}
                            {!selectedPrivileges.includes(privilege) && <span className="ml-1">+</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Add Privileges</p>
                      <div className="flex flex-wrap gap-2">
                        {allPrivileges.add.map((privilege) => (
                          <button
                            key={privilege}
                            type="button"
                            onClick={() => handleTogglePrivilege(privilege)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedPrivileges.includes(privilege)
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {privilege}
                            {!selectedPrivileges.includes(privilege) && <span className="ml-1">+</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Update Privileges</p>
                      <div className="flex flex-wrap gap-2">
                        {allPrivileges.update.map((privilege) => (
                          <button
                            key={privilege}
                            type="button"
                            onClick={() => handleTogglePrivilege(privilege)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedPrivileges.includes(privilege)
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {privilege}
                            {!selectedPrivileges.includes(privilege) && <span className="ml-1">+</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-700 mb-2">Delete Privileges</p>
                      <div className="flex flex-wrap gap-2">
                        {allPrivileges.delete.map((privilege) => (
                          <button
                            key={privilege}
                            type="button"
                            onClick={() => handleTogglePrivilege(privilege)}
                            className={`px-3 py-1 rounded-full text-sm font-medium ${
                              selectedPrivileges.includes(privilege)
                                ? "bg-green-600 text-white"
                                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                            }`}
                          >
                            {privilege}
                            {!selectedPrivileges.includes(privilege) && <span className="ml-1">+</span>}
                          </button>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex justify-end space-x-3 pt-4">
                <button
                  type="button"
                  onClick={() => setShowAddEditRoleModal(false)}
                  className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#3CA32B] text-white rounded-lg hover:bg-green-700 transition-colors"
                >
                  {editingRole ? "Save Changes" : "Add Role"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
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
              <svg className="w-6 h-6 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <div>
                <p className="font-bold mb-1">Are you sure you want to delete this role?</p>
                <p className="text-sm">This action will permanently delete the selected role. This cannot be undone.</p>
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
