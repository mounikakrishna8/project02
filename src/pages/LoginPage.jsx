import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Login from '../components/LoginForm/LoginForm.jsx';

export default function LoginPage() {
  const navigate = useNavigate();

  const handleLogin = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/me');
    }
  };

  return (
    <> 
     <Login onLogin={handleLogin} />
    </>
  );
}

