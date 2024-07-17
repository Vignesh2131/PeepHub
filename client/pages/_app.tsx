import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { GoogleOAuthProvider } from "@react-oauth/google";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <GoogleOAuthProvider clientId="997784747402-9gebikmapjgtt9eent1b5s97um3gegvv.apps.googleusercontent.com">
      <Component {...pageProps} />
    </GoogleOAuthProvider>
  );
}
