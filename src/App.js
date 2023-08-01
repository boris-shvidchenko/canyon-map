// Components
import MainMap from './components/MainMap';
import BasemapContainer from './components/BasemapContainer';
import MapTypeContainer from './components/MapTypeContainer';
import Menu from './components/Menu';
import ContactForm from './components/ContactForm';
// Provider
import AppProvider from './state/appProvider';
// Vercel Analytics (Audience)
import { inject } from '@vercel/analytics';
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
