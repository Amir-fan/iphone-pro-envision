
import React from 'react';
import { cn } from '@/lib/utils';

interface ColorOption {
  name: string;
  color: string;
  bgClass: string;
}

interface ColorPickerProps {
  options: ColorOption[];
  selected: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ options, selected, onChange }) => {
  return (
    <div className="flex flex-col items-center">
      <p className="text-apple-gray mb-3">Available Colors</p>
      <div className="flex space-x-4">
        {options.map((option) => (
          <button
            key={option.name}
            className={cn(
              'w-8 h-8 rounded-full transition-all duration-300 hover:scale-110',
              option.bgClass,
              selected === option.name ? 'ring-2 ring-apple-blue ring-offset-2 ring-offset-apple-black' : ''
            )}
            onClick={() => onChange(option.name)}
            aria-label={`Select ${option.name} color`}
          />
        ))}
      </div>
      <p className="mt-3 text-apple-white text-sm font-medium">
        {options.find(opt => opt.name === selected)?.color}
      </p>
    </div>
  );
};

export default ColorPicker;
