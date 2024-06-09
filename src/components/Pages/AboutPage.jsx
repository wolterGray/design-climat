import React from "react";
import Logo from "../Logo";
import {motion} from "framer-motion";
import {useInView} from "react-intersection-observer";

function AboutPage() {
  const [ref, inView] = useInView({threshold: 0.2});
  const [ref2, inView2] = useInView({threshold: 0.2});
  const [ref3, inView3] = useInView({threshold: 0.2});

  React.useEffect(()=>{
    window.scrollTo(0, 0);
  },[])

  return (
    <div className="min-h-screen pt-36 max-w-4xl mx-auto text-left">
      <h2 className="text-5xl font-bold mb-20 text-center">Про нас</h2>
      <div ref={ref} className="grid grid-cols-2 gap-10 mb-20 ">
        <motion.div
          initial={{translateX: -1000, opacity: 0}}
          animate={inView && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}
          className="bg-gray-500 h-[400px]  w-[400px] flex justify-center items-center"
          custom={1}>
          <Logo />
        </motion.div>
        <motion.div
          initial={{translateX: 1000, opacity: 0}}
          animate={inView && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}>
          <h3 className="text-3xl font-semibold mb-5">Хто ми?</h3>
          <p>
            "DesignClimat" - це компанія, що спеціалізується на реалізації та
            встановленні кліматичного обладнання для різних промислових,
            комерційних та житлових об'єктів. Наша місія - створювати комфортне
            та здорове середовище для наших клієнтів за допомогою передових
            технологій у сфері опалення, вентиляції та кондиціонування повітря.
            Ми віримо, що наші кліматичні товари не лише задовольнять ваші
            потреби, а й перевищать ваші очікування щодо якості, ефективності та
            зручності використання.
          </p>
        </motion.div>
      </div>
      <div ref={ref2} className="grid grid-cols-2 gap-10 mb-20">
        <motion.div
          initial={{translateX: -1000, opacity: 0}}
          animate={inView2 && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}>
          <h3 className="text-3xl font-semibold mb-5">Чому ми?</h3>
          <p>
            На ринку кліматичного обладнання наші кондиціонери стали справжнім
            символом надійності та переваг ефективності. Їх популярність не
            випадкова - вони вражають своїми передовими технологіями, надійною
            конструкцією та вражаючими характеристиками. Кожен наш кондиціонер -
            це результат досконалого поєднання стильного дизайну та високої
            продуктивності, що забезпечує комфортне кліматичне середовище в
            будь-якому приміщенні. Обирайте кондиціонери від "DesignClimat" -
            ваш надійний партнер у створенні ідеального клімату у вашому домі чи
            офісі.
          </p>
        </motion.div>
        <motion.img
          initial={{translateX: 1000, opacity: 0}}
          animate={inView2 && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}
          className="rounded-xl object-cover overflow-hidden h-[400px] w-[400px]"
          src="img/about/conditioners.webp
		  "
          alt="conditioners"
        />
      </div>
      <div ref={ref3} className="grid grid-cols-2 gap-10 mb-20">
        <motion.img
          initial={{translateX: -1000, opacity: 0}}
          animate={inView3 && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}
          className="rounded-xl object-cover overflow-hidden h-[400px] w-[400px]"
          src="img/about/service.jpeg
		  "
          alt="conditioners"
        />
        <motion.div
          initial={{translateX: 1000, opacity: 0}}
          animate={inView3 && {translateX: 0, opacity: 1}}
          transition={{duration: 1}}>
          <h3 className="text-3xl font-semibold mb-5">Тільки кондиціонери?</h3>
          <p>
            Ні, також наша компанія пропонує повний сервіс з монтажу
            кондиціонерів, що включає в себе всі етапи - від розвідувальних
            робіт до закінчення процесу. Наші досвідчені монтажники візьмуть на
            себе всю відповідальність за правильне встановлення вашого
            обладнання. Вони приїдуть до вас, проведуть докладну оцінку,
            підберуть оптимальну конфігурацію кондиціонера та якісно виконають
            усі монтажні роботи. Наш головний пріоритет - ваш комфорт та
            задоволення від роботи нашого обладнання, тому ви можете бути
            впевнені, що кожна деталь буде уважно врахована нашими
            професіоналами.
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default AboutPage;
