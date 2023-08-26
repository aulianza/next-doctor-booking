import React, { ChangeEvent } from "react";
import { BiSearchAlt as SearchIcon } from "react-icons/bi";

interface SearchInputProps {
  placeholder: string;
  onChange: (value: string) => void;
}

const SearchInput = ({ placeholder, onChange }: SearchInputProps) => {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    onChange(e.target.value);
  };

  return (
    <div className="flex items-center rounded-full bg-white">
      <span className="ml-3 text-purple-900 bg-purple-50 p-2 rounded-full">
        <SearchIcon size={24} />
      </span>
      <input
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        className="py-4 px-3 rounded-md bg-transparent focus:outline-none w-full"
      />
    </div>
  );
};

export default SearchInput;
