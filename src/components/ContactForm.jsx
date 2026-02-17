import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

export default function ContactForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSubject, setSelectedSubject] = useState("");

  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    emailAddress: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
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
        (item) => item.value === subjectFromUrl
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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://backendrealestate-nine.vercel.app/api/contact",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Submission failed");
      }

      alert("Message sent successfully!");

      // Reset form
      setFormData({
        fullName: "",
        phoneNumber: "",
        emailAddress: "",
        subject: "",
        message: "",
      });

      setSelectedSubject("");

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="contact-form" className="flex flex-col items-center w-full px-4">
      <h2 className="font-medium text-[20px] lg:text-[40px] text-black mb-6 text-center">
        Send Us a Message
      </h2>

      <div className="w-full max-w-[628px] bg-[#EAF4FF] rounded-[20px] p-8 shadow-[0px_10px_30px_rgba(38,91,166,0.15)]">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">

          {/* Full Name */}
          <div>
            <label className="font-medium text-[20px] mb-3 block">
              Full Name
            </label>
            <input
              type="text"
              required
              value={formData.fullName}
              onChange={(e) =>
                setFormData({ ...formData, fullName: e.target.value })
              }
              placeholder="Riya Sharma"
              className="w-full h-[60px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label className="font-medium text-[20px] mb-3 block">
              Email Address
            </label>
            <input
              type="email"
              required
              value={formData.emailAddress}
              onChange={(e) =>
                setFormData({ ...formData, emailAddress: e.target.value })
              }
              placeholder="riya@example.com"
              className="w-full h-[60px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="font-medium text-[20px] mb-3 block">
              Phone Number
            </label>
            <input
              type="tel"
              required
              value={formData.phoneNumber}
              onChange={(e) =>
                setFormData({ ...formData, phoneNumber: e.target.value })
              }
              placeholder="+91 9999999999"
              className="w-full h-[60px] rounded-full px-6 bg-white outline-none"
            />
          </div>

          {/* Subject Dropdown */}
          <div className="relative">
            <label className="font-medium text-[20px] mb-3 block">
              Subject
            </label>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center justify-between w-full h-[60px] rounded-full px-6 bg-white cursor-pointer"
            >
              <span className={selectedSubject ? "text-black" : "text-gray-400"}>
                {selectedSubject || "Select Subject"}
              </span>

              <svg
                className={`w-4 h-4 transition-transform ${
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
                    className="px-6 py-3 cursor-pointer hover:bg-gray-100"
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

          {/* Message */}
          <div>
            <label className="font-medium text-[20px] mb-3 block">
              Message
            </label>
            <textarea
              required
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              placeholder="Tell us how we can help you"
              className="w-full h-[120px] rounded-[20px] px-6 py-4 bg-white outline-none resize-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="w-full h-[70px] mt-2 rounded-full font-medium text-[20px] bg-[#265BA6] text-white"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>

        </form>
      </div>
    </div>
  );
}
