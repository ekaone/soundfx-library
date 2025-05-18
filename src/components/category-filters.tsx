import { Button } from "@/components/ui/button";
import { ALL_CATEGORIES, SoundCategory } from "@/models/sound-effects";

interface CategoryFiltersProps {
  selectedCategory: SoundCategory | "all";
  onSelectCategory: (category: SoundCategory | "all") => void;
}

const CategoryFilters = ({
  selectedCategory,
  onSelectCategory,
}: CategoryFiltersProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant={selectedCategory === "all" ? "default" : "outline"}
        size="sm"
        onClick={() => onSelectCategory("all")}
        className={
          selectedCategory === "all"
            ? "bg-purple-500 hover:bg-purple-500/90"
            : "hover:bg-purple-500/10 hover:text-purple-500"
        }
      >
        All
      </Button>

      {ALL_CATEGORIES.map((category) => (
        <Button
          key={category}
          variant={selectedCategory === category ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectCategory(category)}
          className={
            selectedCategory === category
              ? "bg-purple-500 hover:bg-purple-500/90"
              : "hover:bg-purple-500/10 hover:text-purple-500"
          }
        >
          {category}
        </Button>
      ))}
    </div>
  );
};

export default CategoryFilters;
