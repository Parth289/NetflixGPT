import React, { useState } from "react";
import Modal from "react-modal";

const MovieCard = ({ card }) => {
  const [modalIsOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <>
      {/* Movie Poster Card */}
      <div className="w-36 md:w-48 pr-4 cursor-pointer transition-transform hover:scale-110">
        <img
          onClick={openModal}
          src={`https://image.tmdb.org/t/p/w500/${card?.poster_path}`}
          alt="Movie Poster"
          className="rounded-lg shadow-lg"
        />
      </div>

      {/* Netflix-Themed Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        ariaHideApp={false}
        className="fixed inset-0 flex items-center justify-center z-50"
        overlayClassName="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-md"
      >
        <div className="relative bg-black text-white w-full max-w-2xl rounded-lg shadow-2xl border border-gray-900 animate-scale-in">
          {/* Close Button */}
          <button
            onClick={closeModal}
            className="absolute top-4 right-4 text-xl  transition z-50"
          >
            ✖
          </button>

          {/* Movie Banner */}
          <div className="relative">
            <img
              src={`https://image.tmdb.org/t/p/w500/${card?.backdrop_path}`}
              alt="Backdrop"
              className="w-full h-56 object-cover rounded-lg shadow-md"
            />
            <div className="absolute bottom-0 bg-gradient-to-t from-black w-full h-20 rounded-lg"></div>
          </div>

          {/* Movie Details */}
          <div className="mt-4 p-4">
            <h2 className="text-3xl font-bold text-red-700">{card?.title}</h2>
            <p className="text-gray-400 text-sm mt-2">{card?.release_date}</p>
            <p className="mt-2 text-gray-300">{card?.overview}</p>

            {/* Ratings and Actions */}
            <div className="mt-4 flex items-center space-x-4">
              <span className="text-yellow-400 text-lg font-semibold">
                ⭐ {card?.vote_average}
              </span>
              <span className="text-gray-400 text-sm">
                ({card?.vote_count} votes)
              </span>
            </div>

            {/* Buttons */}
            <div className="mt-6 flex space-x-4">
              <button className="bg-red-700 hover:bg-red-800 text-white px-6 py-2 rounded-lg font-semibold transition cursor-not-allowed">
                ▷ Watch Now
              </button>
              <button className="bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded-lg font-semibold transition cursor-not-allowed">
                + Add to List
              </button>
            </div>
          </div>
        </div>
      </Modal>

      {/* Tailwind Animation */}
      <style>
        {`
          @keyframes scale-in {
            from { transform: scale(0.8); opacity: 0; }
            to { transform: scale(1); opacity: 1; }
          }
          .animate-scale-in {
            animation: scale-in 0.3s ease-out;
          }
        `}
      </style>
    </>
  );
};

export default MovieCard;
