import React, { useRef, useEffect } from "react";

// Cara pakai:
// Di halaman lain:
// const [showModal, setShowModal] = useState(false);
// <button onClick={() => setShowModal(true)}>Trigger</button>
// <PopupButton showModal={showModal} setShowModal={setShowModal} label="Daftar" items={[{nama: 'Lomba 1', link: '/form/daftar-lomba-1'}, ...]} />

const PopupButton = ({ showModal, setShowModal, label = "Pilih", items = [] }) => {
  const modalRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setShowModal(false);
      }
    }
    if (showModal) {
      document.body.style.overflow = "hidden";
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showModal, setShowModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity" />
      {/* Modal di tengah layar */}
      <div
        ref={modalRef}
        className="bg-white rounded-2xl shadow-2xl p-8 max-w-xs w-full relative animate-fade-in flex flex-col items-center"
        style={{ transform: 'translate(0, 0)' }}
      >
        <button
          className="absolute top-2 right-2 text-gray-400 hover:text-orange-500 text-xl font-bold focus:outline-none"
          onClick={() => setShowModal(false)}
          aria-label="Tutup"
        >
          &times;
        </button>
        <h3 className="text-lg font-bold mb-4 text-orange-600 text-center">Pilih {label}</h3>
        <ul className="w-full space-y-3">
          {items.map((item) => (
            <li key={item.nama}>
              <a
                href={item.link}
                className="w-full py-3 text-base daftar-btn font-semibold rounded-xl shadow-md flex items-center justify-center focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300"
                style={{textAlign: 'center'}}
              >
                {item.nama}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PopupButton;
