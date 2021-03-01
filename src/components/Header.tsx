import DateBlock from './DateBlock';
import CountDownBlock from './CountdownBlock';

const Header:React.FC = () => {
  return (
    <header>
      <h1>World Covid-19 Monitor</h1>
      <DateBlock />
      <CountDownBlock />
    </header>
  );
}

export default Header;