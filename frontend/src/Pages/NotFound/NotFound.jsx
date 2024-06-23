import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const NotFound = () => {
  return (
    <>
      <section className="notFound">
        <div className="container">
          <img src="/notFound.svg" alt="notFound" />
          <h1>PARECE QUE VOCÊ ESTÁ PERDIDO</h1>
          <p>ESPERO TE ENCONTRAR ONDE VOCE DESEJA</p>
          <Link to={"/"}>
            Volte para Home{" "}
            <span>
              <HiOutlineArrowNarrowRight />
            </span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default NotFound;
