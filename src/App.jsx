import styled from '@emotion/styled';
import  Login  from './components/login';
import { GoogleOAuthProvider } from '@react-oauth/google';
import { Card, CardMedia, Backdrop } from '@mui/material';



const App = () => {

  const clientid = '266676099421-gl1mi84dk1re9q6ilhk58tur48lb9h6q.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientid}>
      <Card>
        <Login />
      </Card>
    </GoogleOAuthProvider>
  )
}

export default App;
