import "./App.css";
import CardProfile from "./Components/CardProfile/CardProfile";
import useFetch from "./Hooks/useFetch";

function App() {
  const { result, loading, error } = useFetch(
    `https://jsonplaceholder.typicode.com/users`
  );

  
  return (
    <>
      <div className="container mb-5">
      <div className="row">
      <h1>Equipo de Profesionales</h1>
      </div>

      </div>

      <div className="container">
        <div className="row">

          {!result ? (
            <>
              <div className="text-center">
                <div className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            </>
          ) : (
            <>
            {result.map((item, index)=>(

            <CardProfile item={item} key={index} imgRandom={'https://source.unsplash.com/random/?people'}/>
            ))}
            </>
          )}

        </div>
      </div>
    </>
  );
}

export default App;
