import axios from 'axios';
import { useNavigate } from 'react-router-dom';

import Register from '../components/RegisterForm.jsx';

export default function RegisterPage() {
  const navigate = useNavigate();

  const handleCreate = async (event, formData) => {
    event.preventDefault();

    const res = await axios.post('/api/auth', formData);

    if (res.data.success) {
      navigate('/me');
    }
  };

  return (
    <> 
     <Register onLogin={handleCreate} />
    </>
  );
}
