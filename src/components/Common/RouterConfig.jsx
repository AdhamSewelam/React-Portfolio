import React, { Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

import { ROOT, ABOUT, EXPERIENCE, WORK, SKILLS } from "./Constants";
import Home from "../Home/Home";
import About from "../About/About";
import Work from "../Work/Work";
import Experience from "../Experience/Experience";
import Skills from "../Skills/Skills";
import NotFound from "./NotFound";

function RouterConfig() {
  const location = useLocation();

  const routeAnimation = {
    initial: { opacity: 0 },
    animate: { opacity: 5 },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <Suspense>
        <Routes location={location} key={location.pathname}>
          <Route exact path={ROOT}>
            <Route
              exact
              path={ROOT}
              element={
                <motion.div {...routeAnimation}>
                  <Home />
                </motion.div>
              }
            />
          </Route>

          <Route exact path={ABOUT}>
            <Route
              exact
              path={ABOUT}
              element={
                <motion.div {...routeAnimation}>
                  <About />
                </motion.div>
              }
            />
          </Route>

          <Route exact path={SKILLS}>
            <Route
              exact
              path={SKILLS}
              element={
                <motion.div {...routeAnimation}>
                  <Skills />
                </motion.div>
              }
            />
          </Route>

          <Route exact path={WORK}>
            <Route
              exact
              path={WORK}
              element={
                <motion.div {...routeAnimation}>
                  <Work />
                </motion.div>
              }
            />
          </Route>

          <Route exact path={EXPERIENCE}>
            <Route
              exact
              path={EXPERIENCE}
              element={
                <motion.div {...routeAnimation}>
                  <Experience />
                </motion.div>
              }
            />
          </Route>

          <Route
            path="*"
            element={
              <motion.div {...routeAnimation}>
                <NotFound />
              </motion.div>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default RouterConfig;
