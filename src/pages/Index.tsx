
import { useState, useMemo } from 'react';
import { mockSoundEffects, SoundCategory } from '@/models/sound-effects';
import Header from '@/components/header';
import FeaturedSound from '@/components/featured-sound';
import SearchBar from '@/components/search-bar';
import CategoryFilters from '@/components/category-filters';
import SoundCard from '@/components/sound-card';

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<SoundCategory | 'all'>('all');
  
  const featuredSounds = useMemo(() => {
    return mockSoundEffects.filter(sound => sound.featured);
  }, []);

  const filteredSounds = useMemo(() => {
    let results = mockSoundEffects;
    
    if (selectedCategory !== 'all') {
      results = results.filter(sound => sound.category === selectedCategory);
    }
    
    if (searchTerm) {
      const lowercaseSearch = searchTerm.toLowerCase();
      results = results.filter(
        sound => 
          sound.name.toLowerCase().includes(lowercaseSearch) ||
          sound.description.toLowerCase().includes(lowercaseSearch) ||
          sound.tags.some(tag => tag.toLowerCase().includes(lowercaseSearch))
      );
    }
    
    return results;
  }, [searchTerm, selectedCategory]);

  return (
    <div className="min-h-screen bg-sound-bg-dark text-white">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        {/* Hero section with featured sound */}
        <section className="mb-10">
          {featuredSounds.length > 0 && (
            <FeaturedSound sound={featuredSounds[0]} />
          )}
        </section>
        
        {/* Controls section */}
        <section className="mb-8">
          <div className="flex flex-col md:flex-row justify-between gap-4">
            <div className="md:w-1/3">
              <SearchBar 
                value={searchTerm}
                onChange={setSearchTerm}
              />
            </div>
            <div className="md:w-2/3">
              <CategoryFilters
                selectedCategory={selectedCategory}
                onSelectCategory={setSelectedCategory}
              />
            </div>
          </div>
        </section>
        
        {/* Sound grid section */}
        <section>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSounds.map(sound => (
              <SoundCard key={sound.id} sound={sound} />
            ))}
          </div>
          
          {filteredSounds.length === 0 && (
            <div className="text-center py-16">
              <h3 className="text-xl font-medium text-gray-400">No sounds found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your filters or search term</p>
            </div>
          )}
        </section>
      </main>
      
      <footer className="container mx-auto px-4 py-8 mt-12 border-t border-gray-800">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© 2025 SoundFX Library. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-sound-purple transition-colors">Terms</a>
            <a href="#" className="text-gray-400 hover:text-sound-purple transition-colors">Privacy</a>
            <a href="#" className="text-gray-400 hover:text-sound-purple transition-colors">Contact</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
