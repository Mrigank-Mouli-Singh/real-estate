import React from 'react';
import { 
  Check, 
  
} from 'lucide-react';

const ChecklistItem = ({ text }) => (
  <div className="flex items-center gap-3 mb-4">
    <div className="flex-shrink-0 w-6 h-6 rounded-full border-2 border-blue-500 flex items-center justify-center">
      <Check className="w-4 h-4 text-blue-500 stroke-[3px]" />
    </div>
    <span className="text-slate-700 font-medium text-lg">{text}</span>
  </div>
);

export default ChecklistItem;
