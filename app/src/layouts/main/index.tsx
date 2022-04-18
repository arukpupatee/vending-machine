import { styled } from '@mui/material/styles';
import { Outlet } from 'react-router';

const RootStyle = styled('div')({
  display: 'flex',
  minHeight: '100vh',
  overflow: 'auto',
  background: '#282c34',
  color: '#FFFFFF',
  padding: '5vh'
});

export default function MainLayout() {
  return (
    <RootStyle>
      <Outlet />
    </RootStyle>
  );
}
