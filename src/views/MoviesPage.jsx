import React from "react";
import { Outlet } from "react-router-dom";
function MoviePage() {
  return (
    <section>
      <Outlet />
    </section>
  );
}

export default MoviePage;
