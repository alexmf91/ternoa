import { Routes, Route, BrowserRouter } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';

import { Header } from '@/components';
import { Dashboard, Marketplace } from '@/views';

import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={false}
      />
      <Routes>
        <Route index element={<Dashboard />} />
        <Route path="marketplace/*" element={<Marketplace />} />
        <Route path="*" element={<p>Not Found</p>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
