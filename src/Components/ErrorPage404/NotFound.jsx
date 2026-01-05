import React from "react";
import { Link } from "react-router";
import { FiHome } from "react-icons/fi";
import Container from "../Container";

const NotFound = () => {
  return (
      <Container>
    <section className="min-h-screen flex flex-col items-center justify-center text-primary bg-primary-for-bg">
        <div className="bg-secondary/40 rounded-xl p-8 max-w-md text-center shadow-lg">
          <h1 className="text-8xl font-extrabold mb-6 text-accent animate-glow">
            404
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-secondary">
            Oops! The page you’re looking for doesn’t exist.
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-accent text-primary font-semibold rounded-xl hover:text-accent hover:bg-secondary transition-colors duration-300 ease-linear"
          >
            <FiHome size={20} />
            Go Back Home
          </Link>
        </div>
    </section>
      </Container>
  );
};

export default NotFound;
