// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";

// export default function ContactForm() {
//   // Dropdown state
//   const [isOpen, setIsOpen] = useState(false);
//   const [selectedSubject, setSelectedSubject] = useState("");

//   // URL params
//   const [searchParams] = useSearchParams();

//   const subjects = [
//     { label: "Buy property", value: "buy" },
//     { label: "Sell property", value: "sell" },
//     { label: "Construction materials", value: "materials" },
//     { label: "Consultation", value: "consultation" },
//     { label: "Others", value: "others" },
//   ];

//   // Auto-select subject from URL
// useEffect(() => {
//   const subjectFromUrl = searchParams.get("subject");

//   if (subjectFromUrl) {
//     const matchedSubject = subjects.find(
//       (item) => item.value === subjectFromUrl
//     );

//     if (matchedSubject) {
//       setSelectedSubject(matchedSubject.label);

//       // 🔥 Scroll to contact form
//       const formElement = document.getElementById("contact-form");

//       if (formElement) {
//         formElement.scrollIntoView({
//           behavior: "smooth",
//           block: "start",
//         });
//       }
//     }
//   }
// }, [searchParams]);

//   return (
//     <div id="contact-form" className="flex flex-col items-center w-full px-4">
//       <h2 className="font-medium text-[20px] lg:text-[40px] leading-[100%] text-black mb-6 text-center">
//         Send Us a Message
//       </h2>

//       <div className="w-full max-w-[380px] lg:max-w-[628px] bg-[#E6F0FA] lg:bg-[#EAF4FF] rounded-[16px] lg:rounded-[20px] p-6 lg:p-8 shadow-[0px_10px_30px_rgba(38,91,166,0.15)]">
//         <div className="flex flex-col gap-4 lg:gap-6">

//           {/* INPUT FIELDS */}
//           {[
//             { label: "Full Name", type: "text", placeholder: "Riya Sharma" },
//             { label: "Email Address", type: "email", placeholder: "Riya@example.com" },
//             { label: "Phone Number", type: "tel", placeholder: "+91 9999999999" },
//           ].map((field) => (
//             <div key={field.label}>
//               <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
//                 {field.label}
//               </label>
//               <input
//                 type={field.type}
//                 placeholder={field.placeholder}
//                 className="w-full h-[40px] lg:h-[65px] rounded-full px-6 bg-white outline-none text-[16px] lg:text-[18px] placeholder:text-[#C6C6C6] shadow-[0px_4px_20px_rgba(96,165,250,0.10)] focus:shadow-[0px_4px_25px_rgba(38,91,166,0.20)] transition-all duration-300"
//               />
//             </div>
//           ))}

//           {/* CUSTOM SUBJECT DROPDOWN */}
//           <div className="relative">
//             <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
//               Subject
//             </label>

//             {/* Dropdown Trigger */}
//             <div
//               onClick={() => setIsOpen(!isOpen)}
//               className={`
//                 flex items-center justify-between
//                 w-full h-[40px] lg:h-[65px]
//                 rounded-full px-6
//                 bg-white
//                 cursor-pointer
//                 shadow-[0px_4px_20px_rgba(96,165,250,0.10)]
//                 ${isOpen ? "ring-2 ring-[#265BA6]/20" : ""}
//                 transition-all duration-300
//               `}
//             >
//               <span className={selectedSubject ? "text-black" : "text-[#C6C6C6]"}>
//                 {selectedSubject || "Select Subject"}
//               </span>

//               <svg
//                 className={`w-4 h-4 lg:w-5 lg:h-5 text-[#C6C6C6] transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2.5"
//                   d="M19 9l-7 7-7-7"
//                 />
//               </svg>
//             </div>

//             {/* Dropdown Menu */}
//             {isOpen && (
//               <div className="absolute z-50 w-full mt-2 bg-white rounded-[20px] shadow-xl border border-blue-50 overflow-hidden">
//                 {subjects.map((item) => (
//                   <div
//                     key={item.value}
//                     className="px-6 py-3 lg:py-4 hover:bg-[#F0F7FF] cursor-pointer text-[16px] lg:text-[18px] text-gray-700 transition-colors"
//                     onClick={() => {
//                       setSelectedSubject(item.label);
//                       setIsOpen(false);
//                     }}
//                   >
//                     {item.label}
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* MESSAGE */}
//           <div>
//             <label className="font-medium text-[18px] lg:text-[24px] leading-[100%] text-black mb-2 lg:mb-3 block">
//               Message
//             </label>
//             <textarea
//               placeholder="Tell us how we can help you"
//               className="w-full h-[80px] lg:h-[120px] rounded-[20px] lg:rounded-[30px] px-6 py-4 bg-white outline-none resize-none text-[16px] lg:text-[18px] placeholder:text-[#C6C6C6] shadow-[0px_4px_20px_rgba(96,165,250,0.10)] focus:shadow-[0px_4px_25px_rgba(38,91,166,0.20)] transition-all duration-300"
//             />
//           </div>

//           {/* SEND MESSAGE BUTTON */}
//           <button className="group relative w-full h-[50px] lg:h-[79px] mt-2 rounded-full font-medium text-[18px] lg:text-[20px] overflow-hidden bg-[#265BA6] text-white shadow-[0px_4px_30px_rgba(0,0,0,0.25)] transition-all duration-300 hover:bg-white hover:text-[#265BA6] hover:border-[#265BA6] border border-transparent hover:scale-105 active:bg-[#ffffff] active:text-[#265BA6] active:scale-95">
//             <span className="relative z-10">Send Message</span>
//           </button>

//         </div>
//       </div>
//     </div>
//   );
// }

// API Integration :-

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  // Dropdown state
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  // 🔥 NEW: form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  // URL params
  const [searchParams] = useSearchParams();

  const subjects = [
    { label: "Buy property", value: "buy" },
    { label: "Sell property", value: "sell" },
    { label: "Construction materials", value: "materials" },
    { label: "Consultation", value: "consultation" },
    { label: "Others", value: "others" },
  ];

  // Auto-select subject from URL
  useEffect(() => {
    const subjectFromUrl = searchParams.get("subject");

    if (subjectFromUrl) {
      const matchedSubject = subjects.find(
        (item) => item.value === subjectFromUrl,
      );

      if (matchedSubject) {
        setSelectedSubject(matchedSubject.label);
        setFormData((prev) => ({
          ...prev,
          subject: matchedSubject.value,
        }));

        const formElement = document.getElementById("contact-form");

        if (formElement) {
          formElement.scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
        }
      }
    }
  }, [searchParams]);

  // 🔥 NEW: submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      await fetch("https://backendrealestate-nine.vercel.app/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      // reset after success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSelectedSubject("");

      alert("Message sent successfully!");
    } catch (error) {
      console.log(error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="flex flex-col items-center w-full px-4">
      <h2 className="font-medium text-[20px] lg:text-[40px] leading-[100%] text-black mb-6 text-center">
        Send Us a Message
      </h2>

      <div className="w-full max-w-[380px] lg:max-w-[628px] bg-[#E6F0FA] lg:bg-[#EAF4FF] rounded-[16px] lg:rounded-[20px] p-6 lg:p-8 shadow-[0px_10px_30px_rgba(38,91,166,0.15)]">
        {/* 🔥 Wrapped in form */}
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-6">
          {/* INPUT FIELDS */}
          <div>
            <label className="font-medium text-[18px] lg:text-[24px] mb-2 lg:mb-3 block">
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              placeholder="Riya Sharma"
              className="w-full h-[40px] lg:h-[65px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-[18px] lg:text-[24px] mb-2 lg:mb-3 block">
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="Riya@example.com"
              className="w-full h-[40px] lg:h-[65px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          <div>
            <label className="font-medium text-[18px] lg:text-[24px] mb-2 lg:mb-3 block">
              Phone Number
            </label>
            <input
              type="tel"
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              placeholder="+91 9999999999"
              className="w-full h-[40px] lg:h-[65px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          {/* SUBJECT DROPDOWN */}
          <div className="relative">
            <label className="font-medium text-[18px] lg:text-[24px] mb-2 lg:mb-3 block">
              Subject
            </label>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full h-[40px] lg:h-[65px] rounded-full px-6 bg-white cursor-pointer"
            >
              <span
                className={selectedSubject ? "text-black" : "text-[#C6C6C6]"}
              >
                {selectedSubject || "Select Subject"}
              </span>

              {/* Arrow Icon */}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </div>

            {isOpen && (
              <div className="absolute z-50 w-full mt-2 bg-white rounded-[20px] shadow-xl">
                {subjects.map((item) => (
                  <div
                    key={item.value}
                    className="px-6 py-3 cursor-pointer"
                    onClick={() => {
                      setSelectedSubject(item.label);
                      setFormData({
                        ...formData,
                        subject: item.value,
                      });
                      setIsOpen(false);
                    }}
                  >
                    {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* MESSAGE */}
          <div>
            <label className="font-medium text-[18px] lg:text-[24px] mb-2 lg:mb-3 block">
              Message
            </label>
            <textarea
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us how we can help you"
              className="w-full h-[80px] lg:h-[120px] rounded-[20px] px-6 py-4 bg-white outline-none resize-none"
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            disabled={loading}
            className="group relative w-full h-[50px] lg:h-[79px] mt-2 rounded-full font-medium text-[18px] lg:text-[20px] bg-[#265BA6] text-white"
          >
            <span className="relative z-10">
              {loading ? "Sending..." : "Send Message"}
            </span>
          </button>
        </form>
      </div>
    </div>
  );
}
