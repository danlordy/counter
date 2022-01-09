// import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
      <style jsx global>{``}</style>
    </>
  );
}

export default App;
