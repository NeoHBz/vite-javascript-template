import { Button } from "./components/ui/Button";

const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold text-gray-800">Vite + Tailwind v3</h1>
        <p className="mb-6 text-gray-600">Your setup is working correctly.</p>
        <Button>Get Started</Button>
      </div>
    </div>
  );
};

export default App;
