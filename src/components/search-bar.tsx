import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
}

const SearchBar = ({ value, onChange }: SearchBarProps) => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
      <Input
        type="text"
        placeholder="Search sounds..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="pl-10 bg-sound-bg-light border-sound-bg-light focus-visible:ring-purple-500"
      />
    </div>
  );
};

export default SearchBar;
