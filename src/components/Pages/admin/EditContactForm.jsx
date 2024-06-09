import React, { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { HiPencil } from "react-icons/hi";
import { FaCheck } from "react-icons/fa";

const EditContactForm = ({ initialData }) => {
  if (!initialData) {
    return <div>Дані відсутні</div>;
  }

  const [editableFields, setEditableFields] = useState({
    city: initialData.address ? initialData.address[0] : "",
    street: initialData.address ? initialData.address[1] : "",
    email: initialData.email ? initialData.email[0] : "",
    phoneNumber: initialData.phoneNumber ? initialData.phoneNumber[0] : "",
    socials: initialData.socials
      ? { ...initialData.socials[0] }
      : { instagram: "", facebook: "" },
  });

  const [editingFields, setEditingFields] = useState({
    city: false,
    street: false,
    email: false,
    phoneNumber: false,
    socials: { instagram: false, facebook: false,  },
  });

  const handleEditClick = (fieldName, socialName = null) => {
    if (socialName !== null) {
      setEditingFields((prevState) => ({
        ...prevState,
        socials: { ...prevState.socials, [socialName]: true },
      }));
    } else {
      setEditingFields((prevState) => ({
        ...prevState,
        [fieldName]: true,
      }));
    }
  };

  const handleSaveClick = (fieldName, socialName = null) => {
    if (socialName !== null) {
      setEditingFields((prevState) => ({
        ...prevState,
        socials: { ...prevState.socials, [socialName]: false },
      }));
      setEditableFields((prevState) => ({
        ...prevState,
        socials: {
          ...prevState.socials,
          [socialName]: editableFields.socials[socialName],
        },
      }));
    } else {
      setEditingFields((prevState) => ({
        ...prevState,
        [fieldName]: false,
      }));
    }
  };

  const handleFieldChange = (fieldName, value) => {
    setEditableFields((prevState) => ({
      ...prevState,
      [fieldName]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Оновлюємо дані тут
    console.log("Updated Contact Data:", editableFields);
  };

  const inputRefs = useRef({});

  useEffect(() => {
    for (const field in inputRefs.current) {
      if (inputRefs.current[field].current && editingFields[field]) {
        inputRefs.current[field].current.focus();
      }
    }
  }, [editingFields]);

  return (
    <div className="container mx-auto p-4 mt-10">
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto text-center">
        {Object.entries(editableFields).map(([fieldName, value]) => (
          <div key={fieldName} className="mb-4">
            <label
              htmlFor={fieldName}
              className="block text-sm font-semibold text-gray-300 mb-1"
            >
              {fieldName.charAt(0).toUpperCase() + fieldName.slice(1)}:
            </label>
            {fieldName === "socials" ? (
              <div>
                {Object.entries(value).map(([socialName, socialLink]) => (
                  <div key={socialName} className="mb-2 flex items-center">
                    {editingFields[fieldName][socialName] ? (
                      <>
                        <input
                          type="text"
								  autoFocus
                          ref={inputRefs.current[socialName]}
                          id={socialName}
                          value={editableFields.socials[socialName]}
                          onChange={(e) =>
                            handleFieldChange("socials", {
                              ...editableFields.socials,
                              [socialName]: e.target.value,
                            })
                          }
                          className="border bg-white bg-opacity-10 border-gray-300 rounded p-2 w-full focus:outline-none focus:none  text-gray-300"
                        />
                        <button
                          type="button"
                          onClick={() =>
                            handleSaveClick(fieldName, socialName)
                          }
                          className="ml-2 text-green-500 hover:text-green-600 focus:outline-none"
                        >
                          <FaCheck />
                        </button>
                      </>
                    ) : (
                      <>
                        <span className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-300">
                          {socialLink}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            handleEditClick(fieldName, socialName)
                          }
                          className="ml-2 hover:text-red-600 text-gray-300 focus:outline-none"
                        >
                          <HiPencil />
                        </button>
                      </>
                    )}
                  </div>
                ))}
              </div>
            ) : (
              <div className="mb-2 flex items-center">
                {editingFields[fieldName] ? (
                  <>
                    <input
                      autoFocus
                      type="text"
                      ref={inputRefs.current[fieldName]}
                      id={fieldName}
                      value={value}
                      onChange={(e) =>
                        handleFieldChange(fieldName, e.target.value)
                      }
                      className="border bg-white bg-opacity-10 border-gray-300 rounded p-2 w-full focus:outline-none focus:none  text-gray-300"
                    />
                    <button
                      type="button"
                      onClick={() => handleSaveClick(fieldName)}
                      className="ml-2 text-green-500 hover:text-green-600 focus:outline-none"
                    >
                      <FaCheck />
                    </button>
                  </>
                ) : (
                  <>
                    <span className="border border-gray-300 rounded p-2 w-full focus:outline-none focus:ring focus:border-blue-500 text-gray-300">
                      {value}
                    </span>
                    <button
                      type="button"
                      onClick={() => handleEditClick(fieldName)}
                      className="ml-2 hover:text-red-600 text-gray-300 focus:outline-none"
                    >
                      <HiPencil />
                    </button>
                  </>
                )}
              </div>
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

EditContactForm.propTypes = {
  initialData: PropTypes.shape({
    address: PropTypes.arrayOf(PropTypes.string),
    email: PropTypes.arrayOf(PropTypes.string),
    phoneNumber: PropTypes.arrayOf(PropTypes.string),
    socials: PropTypes.arrayOf(PropTypes.object),
  }),
};

export default EditContactForm;
