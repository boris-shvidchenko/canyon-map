// Components
import MainMap from './components/MainMap';
import BasemapContainer from './components/BasemapContainer';
import MapTypeContainer from './components/MapTypeContainer';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
// Vercel Analytics (Audience)
import { inject } from '@vercel/analytics';
import AppProvider from './state/appProvider';
inject();

export default function App() {
  return (
    <AppProvider>
      <MainMap />
      <Menu />
      <ContactForm />
      <BasemapContainer />
      <MapTypeContainer />
    </AppProvider>
  );
}


