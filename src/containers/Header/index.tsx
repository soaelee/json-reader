import { DateFormat } from 'components';

const Header = () => {
  return (
    <header>
      <p className="title">Json Reader</p>
      <div className="today">
        <DateFormat format="dd m-contraction" />
      </div>
    </header>
  );
};

export default Header;
