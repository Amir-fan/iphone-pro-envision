
import React from 'react';
import { Separator } from '@/components/ui/separator';

interface SpecItem {
  name: string;
  value: string;
}

interface SpecGroup {
  title: string;
  items: SpecItem[];
}

interface SpecsTableProps {
  specs: SpecGroup[];
}

const SpecsTable: React.FC<SpecsTableProps> = ({ specs }) => {
  return (
    <div className="w-full max-w-3xl mx-auto">
      {specs.map((group, groupIndex) => (
        <div key={groupIndex} className="mb-10">
          <h3 className="text-2xl font-semibold mb-4">{group.title}</h3>
          <div className="space-y-4">
            {group.items.map((item, itemIndex) => (
              <div key={itemIndex}>
                <div className="flex flex-col sm:flex-row justify-between py-2">
                  <span className="text-apple-gray font-medium mb-1 sm:mb-0">{item.name}</span>
                  <span className="text-apple-white">{item.value}</span>
                </div>
                {itemIndex < group.items.length - 1 && (
                  <Separator className="bg-apple-darkgray" />
                )}
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SpecsTable;
