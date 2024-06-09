import React from "react";
import AdminNavBar from "./AdminNavBar";
import AdminProducts from "./AdminProducts";
import AdminCreateProductPopup from "./AdminCreateProductPopup";
import AdminEditProductPopup from "./AdminEditProductPopup";
import ConfirmationModal from "./ConfirmationModal";
import EditContactForm from "./EditContactForm";

function AdminPage({airConditioners, companyDetails}) {
  const [showCreateModal, setShowCreateModal] = React.useState(false);
  const [editProduct, setEditProduct] = React.useState(null);
  const [showEditModal, setShowEditModal] = React.useState(false);
  const [showConfirmModal, setShowConfirmModal] = React.useState(false);

  const handleEditProduct = (product) => {
    setEditProduct(product);
    setShowConfirmModal(true);
  };

  const confirmEditProduct = () => {
    setShowConfirmModal(false);
    setShowEditModal(true);
  };

  const cancelEditProduct = () => {
    setEditProduct(null);
    setShowConfirmModal(false);
  };

  return (
    <div className="bgHome relative h-screen grid grid-cols-[1fr,4fr] text-white">
      <AdminNavBar />
      <AdminProducts
        airConditioners={airConditioners}
        companyDetails={companyDetails}
        setShowCreateModal={setShowCreateModal}
        setEditProduct={handleEditProduct}
      />
      
      {showEditModal && (
        <AdminEditProductPopup
          setShowEditModal={setShowEditModal}
          product={editProduct}
        />
      )}
      {showCreateModal && (
        <AdminCreateProductPopup setShowCreateModal={setShowCreateModal} />
      )}
      {showConfirmModal && (
        <ConfirmationModal
          productName={editProduct.name}
          onConfirm={confirmEditProduct}
          onCancel={cancelEditProduct}
        />
      )}
    </div>
  );
}

export default AdminPage;
