import React, { useState } from 'react';

const App = () => {
  const [is3D, setIs3D] = useState(false);
  const [isPaymentFormVisible, setPaymentFormVisible] = useState(false);

  const handleMouseOver = () => setIs3D(true);
  const handleMouseOut = () => setIs3D(false);

  const togglePaymentForm = () => setPaymentFormVisible(!isPaymentFormVisible);

  const handlePay = (e) => {
    e.preventDefault();
    alert("Payment processing...");
    // Submit payment logic here
    togglePaymentForm();
  };

  const handlePostStranicnost = (value) => {
    alert(`Выбрана пост-странность: ${value}`);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen p-4">
      <div
        className={`transition duration-500 ${is3D ? 'transform rotate-x-45 rotate-y-45' : ''} w-16 h-16 bg-blue-500 rounded-lg shadow-md`}
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
      >
        {is3D && (
          <div className="absolute top-0 left-0 w-full h-full bg-blue-500 opacity-50 transform -rotate-x-45 -rotate-y-45" />
        )}
      </div>

      {isPaymentFormVisible && (
        <form id="payment-form" className="bg-white p-6 rounded-lg shadow-lg mt-4" onSubmit={handlePay}>
          <h2 className="text-lg font-bold mb-4">Оплата картой Мир</h2>
          <input required type="text" placeholder="Номер карты" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input required type="text" placeholder="Срок действия" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <input required type="text" placeholder="Код безопасности" className="w-full p-2 mb-4 border border-gray-300 rounded" />
          <button type="submit" className="bg-blue-500 text-white p-2 rounded-lg">Оплатить</button>
        </form>
      )}

      <button onClick={togglePaymentForm} className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        {isPaymentFormVisible ? "Скрыть форму оплаты" : "Оплатить картой Мир"}
      </button>

      <div className="mt-4">
        <h2 className="text-lg font-bold mb-4">Выберите пост-странность:</h2>
        <select onChange={(e) => handlePostStranicnost(e.target.value)} className="w-full p-2 border border-gray-400 rounded">
          {Array.from({ length: 10 }, (_, i) => (
            <option key={i} value={i + 1}>Пост-странность {i + 1}</option>
          ))}
        </select>
      </div>

      <div className="mt-4 flex space-x-4">
        <button className="bg-blue-500 text-white p-2 rounded-lg">Перейти на страницу 1</button>
        <button className="bg-blue-500 text-white p-2 rounded-lg">Перейти на страницу 2</button>
        <button className="bg-blue-500 text-white p-2 rounded-lg">Перейти на страницу 3</button>
      </div>

      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Перейти на страницу с пост-странностью
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Перейти на страницу с оплатой
      </button>
      <button className="bg-blue-500 text-white p-2 rounded-lg mt-4">
        Перейти на страницу с информацией
      </button>
    </div>
  );
};

export default App;