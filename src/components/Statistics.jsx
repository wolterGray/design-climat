import React from "react";
import Title from "./Title";
import CircleProgress from "./CirclePercent";
import Rating from "react-rating-stars-component";

function Statistics() {
  const statistic = [
    {
      title: "Продано",
      count: 225,
    },
    {
      title: "Клієнтів",
      count: 1570,
    },
    {
      title: "Відгуків",
      count: 850,
    },
    {
      title: "Товарів",
      count: 130,
    },
  ];
  const reviews = [
    {
      name: "Anna",
      comment:
        "Я дуже вражений якістю обслуговування у цьому магазині! Персонал дуже привітний і професійний, завжди готовий допомогти з будь-якими питаннями. Вони надають відмінні консультації і забезпечують високий рівень сервісу. Дякую за чудове обслуговування!",
      mark: 5,
    },
    {
      name: "Stanislav",
      comment:
        "Цей кондиціонер - просто диво! Він працює надзвичайно ефективно, швидко охолоджує приміщення і має тиху роботу. Тепер я можу насолоджуватися прохолодою у будь-яку гарячу погоду. Рекомендую всім!",
      mark: 4,
    },
    {
      name: "Margo",
      comment: " Рекомендую цей магазин усім, хто цінує якість обслуговування!",
      mark: 4,
    },
  ];
  return (
    <div className="h-full rounded-xl mb-20 max-w-7xl p-10 mx-auto bg-white py-10">
      <div className="mb-20">
        <Title>
          Статистика <span className="text-red-500">2024</span>
        </Title>
      </div>
      <div className="statWrapper mb-20 flex">
        {statistic.map((item, index) => (
          <div key={index}>
            <h4 className="text-2xl uppercase mb-5 ">{item.title}</h4>
            <CircleProgress number={item.count} />
          </div>
        ))}
      </div>
      <div className="">
        <h3 className="text-2xl font-semibold mb-6">Відгуки клієнтів</h3>
        <div className="grid grid-cols-3 gap-x-5 ">
          {reviews.map((user, index) => (
            <div
              key={index}
              className="relative flex flex-col p-5 shadow-[0px_0px_5px_1px] shadow-gray-200 rounded-3xl">
              <div className="flex flex-col items-center mb-3">
                <p className="font-bold">{user.name}</p>
                <Rating count={5} value={user.mark} edit={false} />
              </div>
              <p key={index} className="italic max-h-[100px] overflow-scroll">
                {user.comment}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
