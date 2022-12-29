import Page from '../components/Page';
import Home from './Home';
import Service from '../components/service/Service';
import Contact from './Contact';
import BlogPage from '../bloglayout/popularpost/BlogPage';
import Slider from './Slider';

export default function DashboardApp() {
  return (
    <Page title="Home">
      <Home />
      <Service />
      <Slider />
      <BlogPage />
      <Contact />
    </Page>
  );
}
