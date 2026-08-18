import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Product, CategoryType } from '../types';
import { PRODUCTS } from '../data/mockData';

interface CollectionsSectionProps {
  onSelectProduct: (product: Product) => void;
  onQuickReserve: (product: Product) => void;
}

export const CollectionsSection: React.FC<CollectionsSectionProps> = ({
  onSelectProduct,
  onQuickReserve
}) => {
  const [activeFilter, setActiveFilter] = useState<CategoryType>('all');

  const filteredProducts = activeFilter === 'all'
    ? PRODUCTS
    : PRODUCTS.filter((p) => p.category === activeFilter);

  const filters: { label: string; value: CategoryType }[] = [
    { label: 'All', value: 'all' },
    { label: 'Seasonal', value: 'seasonal' },
    { label: 'Anniversary', value: 'anniversary' },
    { label: 'Propose', value: 'propose' }
  ];

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-16 py-16" id="curation">
      {/* Header & Filter Tabs */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 border-b border-[#747872]/15 pb-8 gap-6">
        <div>
          <h2 className="font-display-lg text-3xl sm:text-4xl md:text-[40px] text-[#506050] mb-3 font-light tracking-wide">
            Signature Collections
          </h2>
          <p className="font-body-md text-sm text-[#434842] tracking-wide">
            계절의 아름다움을 담은 온화만의 시그니처 라인업
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {filters.map((filter) => {
            const isActive = activeFilter === filter.value;
            return (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`pb-1 font-label-sm text-xs uppercase tracking-widest transition-all cursor-pointer relative ${
                  isActive
                    ? 'text-[#506050] font-semibold'
                    : 'text-[#434842]/70 hover:text-[#506050]'
                }`}
              >
                {filter.label}
                {isActive && (
                  <motion.div
                    layoutId="activeFilterUnderline"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-[#506050]"
                  />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Products Editorial Grid */}
      <motion.div
        layout
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 md:gap-12"
      >
        <AnimatePresence>
          {filteredProducts.map((product) => (
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.4 }}
              key={product.id}
              className="group cursor-pointer flex flex-col justify-between"
              onClick={() => onSelectProduct(product)}
            >
              {/* Product Image Frame */}
              <div className="relative overflow-hidden mb-6 aspect-[4/5] bg-[#efeeeb] shadow-sm">
                <img
                  src={product.imageUrl}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                <div className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-[#fbf9f6]/90 backdrop-blur-sm px-3 py-1.5 rounded-xs">
                  <span className="font-label-sm text-[11px] text-[#506050] tracking-wider uppercase">상세보기</span>
                </div>
              </div>

              {/* Product Meta */}
              <div className="text-center md:text-left">
                <p className="font-label-sm text-[10px] text-[#434842]/80 uppercase tracking-widest mb-2 font-medium">
                  {product.badge}
                </p>
                <h3 className="font-display-lg text-2xl text-[#506050] mb-2 font-light group-hover:text-[#2a2b2a] transition-colors">
                  {product.name}
                </h3>
                <p className="font-body-md text-sm text-[#434842] mb-4">
                  {product.subtitle}
                </p>

                <div className="flex items-center justify-center md:justify-start gap-4">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onSelectProduct(product);
                    }}
                    className="font-label-sm text-xs text-[#506050] uppercase tracking-widest border-b border-[#506050]/30 pb-1 group-hover:border-[#506050] transition-colors"
                  >
                    View Details
                  </button>
                  <span className="text-[#c4c8c0] text-xs">•</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      onQuickReserve(product);
                    }}
                    className="font-label-sm text-xs text-[#954925] uppercase tracking-widest hover:underline"
                  >
                    Reserve Now
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
};
