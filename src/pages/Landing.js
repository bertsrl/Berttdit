import Feed from '../components/Feed';
import SearchBar from '../components/SearchBar';
import Navigation from '../components/Navigation';

const Landing = () => {
  return (
    <div className="relative bg-orange-200 w-full h-wrap overflow-hidden text-center text-2xl text-black font-inter">

      <SearchBar />

      <Navigation />

      <Feed />

    </div>
  );
};

export default Landing;
