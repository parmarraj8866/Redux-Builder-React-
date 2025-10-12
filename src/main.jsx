import {  store } from "./Components/store.js";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { Suspense } from "react";
import { PersistGate } from "redux-persist/integration/react";

createRoot(document.getElementById("root")).render(
  <Suspense fallback={<h1>Loding.............</h1>
  }>
    <Provider store={store}>
      <App />
    </Provider>
  </Suspense>
);
