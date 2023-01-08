import Page from '../components/Page';
import Home from './Home';
import Service from '../components/service/Service';
import Contact from './Contact';
import BlogPage from '../bloglayout/Blogs/BlogPage';
import Slider from './Slider';
import TopCommentBox from '../components/comentbox/TopCommentBox';
import MessageScroll from '../MessageScroll';

export default function DashboardApp() {
  return (
    <Page title="Home">
      <Home />
      <Service />
      <Slider />
      <BlogPage />
      <Contact />
      <TopCommentBox />
      <MessageScroll />
    </Page>
  );
}
