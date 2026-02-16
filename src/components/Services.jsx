import React from 'react';
import ChecklistItem from './ChecklistItem';
import {  
  ShoppingCart, 
  Home, 
  Key, 
  
} from 'lucide-react';


const Services = () => {
  return (

     <section className="py-20 px-6 bg-white">
       <div className="max-w-6xl mx-auto space-y-32">
        
         <div className="flex flex-col md:flex-row items-center gap-30">
           <div className="flex-1">
             <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
               <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <ShoppingCart className="w-8 h-8 text-[#2b67cc]" />
               </div>
             
       <h3 className="font-manrope font-semibold text-3xl leading-none text-[#265BA6] mb-6">
       Buy Properties
       </h3>
               <p className="text-slate-500 leading-relaxed text-lg">
                 Discover homes and commercial spaces carefully selected to match your goals, lifestyle, and long-term plans.
               </p>
             </div>
           </div>
           <div className="flex-1">
             <ChecklistItem text="Personalized property recommendations" />
             <ChecklistItem text="Virtual and in person tour" />
             <ChecklistItem text="Negotiation support" />
             <ChecklistItem text="Legal documentation assistance" />
           </div>
         </div> 



 
         <div className="flex flex-col md:flex-row-reverse items-center gap-20">
           <div className="flex-1">
             <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
               <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <Home className="w-8 h-8 text-[#2b67cc]" />
               </div>
         <h3 className="font-manrope font-semibold text-3xl leading-none text-[#265BA6] mb-6">
           Sell Properties
          </h3>              
          <p className="text-slate-500 leading-relaxed text-lg">
                 Sell your property with the right pricing, visibility, and guidance to achieve its true market value. Our strategy ensures quick turnover.
               </p>
             </div>
           </div>
           <div className="flex-1">
             <ChecklistItem text="Free property valuation" />
             <ChecklistItem text="Professional photography of properties" />           <ChecklistItem text="Multi-channel marketing support" />
            <ChecklistItem text="Quick and efficient closing" />
           </div>
         </div>

        

         <div className="flex flex-col md:flex-row items-center gap-20">
           <div className="flex-1">
             <div className="bg-white rounded-[40px] p-10 shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-50">
               <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8">
                 <Key className="w-8 h-8 text-[#2b67cc]" />
               </div>
               <h3 className="font-manrope font-semibold text-3xl leading-none text-[#265BA6] mb-6">
           Construction Services
          </h3> 
               <p className="text-slate-500 leading-relaxed text-lg">
                 End-to-end construction solutions designed to deliver strong, reliable, and well-executed projects. We build legacies.
               </p>
             </div>
           </div>
           <div className="flex-1">
             <ChecklistItem text="Residential and commercial construction" />
             <ChecklistItem text="Quality-controlled materials" />
             <ChecklistItem text="Experienced on-site project supervision" />
             <ChecklistItem text="Timely execution with transparent process" />
           </div>
         </div>

       </div>
     </section>

  );
};


export default Services;

       