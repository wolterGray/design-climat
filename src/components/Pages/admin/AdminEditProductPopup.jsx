import React, {useState, useEffect} from "react";
import {BiCross} from "react-icons/bi";
import {RiCloseLine} from "react-icons/ri";

const filterList = [
  {
    id: 1,
    title: "Бренди",
    items: ["Cooper&Hunter", "Tosot", "Olmo"],
  },
  {
    id: 2,
    title: "Тип",
    items: ["Моноблок", "Спліт-система"],
  },
  {
    id: 3,
    title: "Тип компрессору",
    items: ["Інверторний", "Звичайний"],
  },
  {
    id: 4,
    title: "Тип встановлення внутрішнього блоку",
    items: ["Мобільний", "Підлого-стельовий", "Підлоговий", "Настінний"],
  },
  {
    id: 5,
    title: "Площа приміщення, кв.м",
    items: ["15", "25", "27", "34", "50", "до 100"],
  },
  {
    id: 6,
    title: "Фреон",
    items: ["R-32", "R-410A"],
  },
  {
    id: 7,
    title: "Wi-Fi",
    items: ["Так", "Ні"],
  },
  {
    id: 8,
    title: "Колір",
    items: ["Білий", "Чорний", "Золотий"],
  },
];

function AdminEditProductPopup({setShowEditModal, product}) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [images, setImages] = useState([]);
  const [selectedFilters, setSelectedFilters] = useState({});

  useEffect(() => {
    if (product) {
      setName(product.name);
      setPrice(product.price);
      setImages(product.imgPath);
      const initialFilters = {
        1: product.company, // Установка значения для бренда
      };
      product.characteristics.forEach((char) => {
        const filter = filterList.find((f) =>
          f.title.includes(char.name.replace(":", ""))
        );
        if (filter) {
          initialFilters[filter.id] = char.value;
        }
      });
      setSelectedFilters(initialFilters);
    }
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Отправка данных:", {name, price, images, selectedFilters});
  };

  const handleImageChange = (e) => {
    const fileList = e.target.files;
    const imagesArray = Array.from(fileList).map((image) =>
      URL.createObjectURL(image)
    );
    setImages(imagesArray);
  };

  const handleFilterChange = (id, value) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [id]: value,
    }));
  };

  const handleImageRemove = (index) => {
    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);
  };

  return (
    <div className="fixed backdrop-blur-sm inset-0 flex items-center justify-center bg-gray-900 bg-opacity-80 z-50">
      <div className="bg-white rounded-lg shadow-lg text-gray-800 w-full max-w-screen-lg">
        <div className="flex items-center justify-between bg-gray-700 text-white py-4 px-6 rounded-t-lg">
          <h3 className="text-xl font-semibold">Змінити продукт</h3>
          <button onClick={() => setShowEditModal(false)}>
            <RiCloseLine className="text-red-500 w-6 h-6" />
          </button>
        </div>
        <div className="p-6">
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium mb-1 text-gray-800">
                Назва кондиціонера:
              </label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Введіть назву"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="price"
                className="block text-sm font-medium mb-1 text-gray-800">
                Ціна:
              </label>
              <input
                type="text"
                id="price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="Введіть ціну"
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                required
              />
            </div>
            <div>
              <label
                htmlFor="images"
                className="block text-sm font-medium mb-1 text-gray-800">
                Зображення:
              </label>
              <div className="flex items-center">
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer bg-gray-200 hover:bg-gray-300 text-gray-800 font-semibold py-2 px-4 rounded-lg">
                  Обрати
                </label>
                <input
                  type="file"
                  id="image-upload"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="hidden"
                  multiple
                />
                {images.map((image, index) => (
                  <div key={index} className="relative">
                    <RiCloseLine
                      onClick={() => handleImageRemove(index)}
                      className="absolute -top-2 -right-2 m-1 bg-red-500 cursor-pointer text-white rounded-full p-1"
                    />

                    <img
                      src={image}
                      alt={`Preview ${index}`}
                      className="ml-4 h-12 w-12 object-cover rounded-full"
                    />
                  </div>
                ))}
              </div>
            </div>
            <div>
              <label
                htmlFor="color"
                className="block text-sm font-medium mb-1 text-gray-800">
                Колір:
              </label>
              <select
                id="color"
                onChange={(e) => handleFilterChange(8, e.target.value)}
                value={selectedFilters[8] || ""}
                className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                required>
                {filterList[7].items.map((c, index) => (
                  <option key={index} value={c}>
                    {c}
                  </option>
                ))}
              </select>
            </div>
            {filterList?.slice(0, 7).map((item) => (
              <div key={item.id}>
                <label className="block text-sm font-medium mb-1 text-gray-800">
                  {item.title}:
                </label>
                <select
                  id={item.id}
                  onChange={(e) => handleFilterChange(item.id, e.target.value)}
                  value={selectedFilters[item.id] || ""}
                  className="border border-gray-300 rounded p-3 w-full focus:outline-none focus:ring focus:border-blue-500 bg-gray-100"
                  required>
                  {item.items.map((c, index) => (
                    <option key={index} value={c}>
                      {c}
                    </option>
                  ))}
                </select>
              </div>
            ))}
            <div className="flex justify-between gap-3 w-full">
              <button
                onClick={() => setShowEditModal(false)}
                type="submit"
                className="mt-6 w-full bg-gray-600 hover:bg-gray-700 text-white font-semibold
              py-3 px-6 rounded-md focus
              focus
              focus
              transition duration-300">
                Скасувати
              </button>
              <button
                type="submit"
                className="mt-6 w-full bg-red-500 hover:bg-red-600 text-white font-semibold
              py-3 px-6 rounded-md focus
              focus
              focus
              transition duration-300">
                Зберегти
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AdminEditProductPopup;
