import Content from './components/Content';
import Header from './components/Header';
import PageTitle from './components/PageTitle';
import styles from './styles/modules/app.module.scss';

const App = () => (
  <div className="App">
    <PageTitle>Test</PageTitle>
    <div className={styles.app__wrapper}>
      <Header />
      <Content />
    </div>
  </div>
);

export default App;
