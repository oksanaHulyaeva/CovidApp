import { DateBlock } from './DateBlock';
import { CountDownBlock } from './CountdownBlock';
import '../sass/header.scss';

export const Header:React.FC = () => {
  return (
    <header className={"header"}>
      <h1>World Covid-19 Monitor</h1>
      <div className={"date-block"}>
        <div>
          <p>Current date:</p>
          <DateBlock />
        </div>
        <div>
          <p>Last update:</p>
          <CountDownBlock />
        </div>
      </div>
    </header>
  );
}