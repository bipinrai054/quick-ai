import './App.css';

// components
import Layout from './components/Layout';
import Login from './components/Login';

function App() {
  return (
    <div className='App'>
      <Layout>
        <div className='main'>
          <Login />
        </div>
      </Layout>
    </div>
  );
}

export default App;
