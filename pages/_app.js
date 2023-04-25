import { useEffect } from "react";

import "../styles/plugins/fontawesome-free/css/all.min.css";
import "../styles/adminlte/dist/css/adminlte.min.css";
import "../styles/globals.css";

export default function App({ Component, pageProps }) {
  useEffect(() => {
    import("../styles/plugins/jquery/jquery.min.js");
    import("../styles/plugins/bootstrap/js/bootstrap.bundle.min.js");
    import("../styles/adminlte/dist/js/adminlte.min.js");
  }, []);

  return <Component {...pageProps} />;
}
