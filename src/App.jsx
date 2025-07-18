import { useEffect } from 'react';
import { supabase } from './config/supabaseClient';
import AppRouter from './routes/Approuter.jsx';

function App() {
  useEffect(() => {
    supabase.auth.getSession().then(({ data, error }) => {
      console.log("Supabase Session:", data);
      if (error) console.error("Supabase Error:", error);
    });
  }, []);

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-green-600">Hello WhisperCom 👋</h1>
    </div>
  );
}

function App() {
  return <AppRouter />;
}

export default App;
