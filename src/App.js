import React, { lazy, Suspense } from "react"; // Move all imports to the top
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom"; // Import Navigate
import SpinnerComponent from "./app/components/common/Spinner";
import NotFound from "./app/components/common/NotFound";

const JobsMain = lazy(() => import("./app/containers/jobs"));

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/jobs" />} />
        <Route
          path="/jobs"
          element={
            <Suspense fallback={<SpinnerComponent />}>
              <JobsMain />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
