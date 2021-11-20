import Page from '../../components/Page';
import Router from '../../router';
import './app.scss';


const App = () => (
  <Router>{(content, routeProps) => <Page {...routeProps}>{content}</Page>}</Router>
);

export default App;