import Header from "./components/Header";
function App() {
  return (
    <div className="App container">
      <Header title="Task Helper" />
      {/* Since the propTypes in Header component is defined as string
      It can not take another type of props. It will throw an warning */}
      {/* <Header title={1} /> */}
    </div>
  );
}

export default App;
