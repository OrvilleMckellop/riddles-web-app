import React, { useState, useEffect } from "react";
import axios from "axios";
import { IoReloadCircle } from "react-icons/io5";

const Card = () => {
  const [riddles, setRiddles] = useState([]);
  const [buttonClicked, setButtonClicked] = useState(false);
  const Url = import.meta.env.VITE_URL;
  const key = import.meta.env.VITE_KEY;
  // console.log(process.env.APPLE)

    useEffect(() => {
        axios.get(Url, {
          headers: { 'X-Api-key': key }
        })
          .then(response => {
            setRiddles(response.data);
            setButtonClicked(false);
            console.log(response.data);
          })
          .catch(e => {
            console.error('Error fetching data: ', e);
          });
      }, [buttonClicked]);
      const handleClick = () => {
        setButtonClicked(true);
      };

  return (
    <>
      <div className="flex justify-center h-svh mt-4">
        <div>
          {riddles.length > 0 ? (
            <label className="swap swap-flip">
              <input type="checkbox" />
              <section className="swap-off">
                <div className="card card-normal w-80 h-fit bg-base-100 shadow-xl">
                  <div className="card-body">
                    <h2 className="card-title text-center">{riddles[0].title}</h2>
                    <p className=" text-wrap">{riddles[0].question}</p>
                  </div>
                </div>
              </section>
              <section className="swap-on">
                <div className="card card-normal w-80 h-fit bg-white shadow-xl text-black">
                  <div className="card-body">
                    <h2 className="card-title text-center">{riddles[0].title}</h2>
                    <p>{riddles[0].answer}</p>
                  </div>
                </div>
              </section>
            </label>
          ) : (
            <span className="loading loading-spinner loading-lg"></span>
          )}

          <div className="card-actions justify-center p-4">
            <button className="bg-transparent m-4" onClick={handleClick}>
                <IoReloadCircle size={50}/>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
