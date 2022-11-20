import { Routes, Route } from "react-router-dom";

import TripReview from "./pages/TripReview";
import TripFilter from "./pages/TripFilter";

import { PATHS } from "./config/paths";

const Page = () => {
  return (
    <>
      <Routes>
        <Route element={<AnimationLayout />}>
          <Route path={PATHS.REVIEW} element={<TripReview />} />
          <Route path={PATHS.FILTER} element={<TripFilter />} />
        </Route>
      </Routes>
    </>
  );
};

const App = () => {
  return <Page theme={theme} setTheme={setTheme} />;
};

export default App;
