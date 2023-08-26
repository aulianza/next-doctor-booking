import SearchInput from "./SearchInput";

type HeroProps = {
  onSearch: (value: string) => void;
};

const Hero = ({ onSearch }: HeroProps) => {
  const handleSearchChange = (value: string) => {
    onSearch(value);
  };

  return (
    <div className="px-8 pt-8 pb-16 space-y-6 bg-gradient-to-br from-pink-200 via-purple-100 to-indigo-100">
      <div className="space-y-3">
        <div className="text-neutral-800">Hi, Ryan</div>
        <h1 className="text-purple-950 text-4xl leading-snug font-semibold">
          Let's find your <br />
          doctor!
        </h1>
      </div>
      <SearchInput
        placeholder="Search doctor..."
        onChange={handleSearchChange}
      />
    </div>
  );
};

export default Hero;
