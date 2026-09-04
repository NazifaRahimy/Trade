"use client";

import {FormEvent, useState} from "react";
import {motion} from "framer-motion";
import {
  FiUser,
  FiMail,
  FiFileText,
  FiMessageSquare,
  FiSend,
  FiHeadphones,
  FiCheckCircle,
} from "react-icons/fi";

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const {name, value} = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // حذف خطای همان فیلد هنگام تایپ
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));

    setSuccess("");
  };

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Please enter a subject.";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Please enter your message.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setSuccess("");

    // جلوگیری از ارسال فرم خالی
    if (!validateForm()) {
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setSuccess("Your message has been sent successfully.");

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });
    } catch (error) {
      console.error(error);
      setSuccess("Something went wrong. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-10 md:py-14">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{opacity: 0, y: 30}}
          whileInView={{opacity: 1, y: 0}}
          transition={{duration: 0.6}}
          viewport={{once: true}}
          className="
            mx-auto grid max-w-6xl
            overflow-hidden rounded-2xl
            bg-slate-50
            md:grid-cols-[1.5fr_1fr]
          "
        >
          {/* ================= LEFT - FORM ================= */}

          <div className="p-6 sm:p-8 md:p-10">
            <h2 className="text-2xl font-bold text-slate-900 md:text-3xl">
              Send Us a Message
            </h2>

            <p className="mt-2 text-sm text-slate-500">
              Fill out the form below and we will get back to you shortly.
            </p>

            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              {/* Name + Email */}
              <div className="grid gap-4 md:grid-cols-2">
                {/* Name */}
                <div>
                  <div
                    className={`flex items-center rounded-lg border bg-white px-3 ${
                      errors.name ? "border-red-400" : "border-slate-200"
                    }`}
                  >
                    <FiUser className="mr-2 text-slate-400" />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Name"
                      className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {errors.name && (
                    <p className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <div
                    className={`flex items-center rounded-lg border bg-white px-3 ${
                      errors.email ? "border-red-400" : "border-slate-200"
                    }`}
                  >
                    <FiMail className="mr-2 text-slate-400" />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Your Email"
                      className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                    />
                  </div>

                  {errors.email && (
                    <p className="mt-1 text-xs text-red-500">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Subject */}
              <div>
                <div
                  className={`flex items-center rounded-lg border bg-white px-3 ${
                    errors.subject ? "border-red-400" : "border-slate-200"
                  }`}
                >
                  <FiFileText className="mr-2 text-slate-400" />

                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    className="h-11 w-full bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                {errors.subject && (
                  <p className="mt-1 text-xs text-red-500">{errors.subject}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <div
                  className={`flex rounded-lg border bg-white px-3 py-2 ${
                    errors.message ? "border-red-400" : "border-slate-200"
                  }`}
                >
                  <FiMessageSquare className="mr-2 mt-1 shrink-0 text-slate-400" />

                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    rows={4}
                    className="w-full resize-none bg-transparent text-sm outline-none placeholder:text-slate-400"
                  />
                </div>

                {errors.message && (
                  <p className="mt-1 text-xs text-red-500">{errors.message}</p>
                )}
              </div>

              {/* Success */}
              {success && (
                <div className="flex items-center gap-2 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-600">
                  <FiCheckCircle />
                  <span>{success}</span>
                </div>
              )}

              {/* Submit */}
              <motion.button
                type="submit"
                disabled={loading}
                whileHover={!loading ? {scale: 1.01} : {}}
                whileTap={!loading ? {scale: 0.98} : {}}
                className="
                  flex w-full items-center justify-center
                  gap-2 rounded-lg
                  bg-blue-600 py-3
                  text-sm font-semibold text-white
                  transition
                  hover:bg-blue-700
                  disabled:cursor-not-allowed
                  disabled:opacity-60
                "
              >
                {loading ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <FiSend size={16} />
                  </>
                )}
              </motion.button>
            </form>
          </div>

          {/* ================= RIGHT - SUPPORT ================= */}

          <div className="flex flex-col items-center justify-center p-8 text-center md:p-10">
            {/* Headphone icon */}
            <div className="relative mx-auto mb-6 h-52 w-52">
              <svg
                viewBox="0 0 240 240"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="h-full w-full"
              >
                {/* Decorative circle */}
                <circle
                  cx="120"
                  cy="120"
                  r="72"
                  stroke="#BFDBFE"
                  strokeWidth="2"
                  strokeDasharray="4 6"
                />

                {/* Top Email */}
                <rect
                  x="92"
                  y="22"
                  width="56"
                  height="38"
                  rx="5"
                  fill="#DBEAFE"
                />

                <path
                  d="M96 27L120 47L144 27"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Right Chat */}
                <path
                  d="M190 63C190 54.7 183.3 48 175 48H164C155.7 48 149 54.7 149 63V70C149 78.3 155.7 85 164 85H169L176 92V85H175C183.3 85 190 78.3 190 70V63Z"
                  fill="#BFDBFE"
                />

                <circle cx="161" cy="66" r="2.5" fill="#3B82F6" />
                <circle cx="169" cy="66" r="2.5" fill="#3B82F6" />
                <circle cx="177" cy="66" r="2.5" fill="#3B82F6" />

                {/* Headphones */}
                <path
                  d="M72 122C72 94 93 72 120 72C147 72 168 94 168 122"
                  stroke="#334E78"
                  strokeWidth="8"
                  strokeLinecap="round"
                />

                {/* Left headphone */}
                <rect
                  x="62"
                  y="117"
                  width="25"
                  height="55"
                  rx="12"
                  fill="#3B82F6"
                />

                <rect
                  x="68"
                  y="126"
                  width="13"
                  height="37"
                  rx="6"
                  fill="#DBEAFE"
                />

                {/* Right headphone */}
                <rect
                  x="153"
                  y="117"
                  width="25"
                  height="55"
                  rx="12"
                  fill="#3B82F6"
                />

                <rect
                  x="159"
                  y="126"
                  width="13"
                  height="37"
                  rx="6"
                  fill="#DBEAFE"
                />

                {/* Microphone */}
                <path
                  d="M120 104C111 104 104 111 104 120V143C104 152 111 159 120 159C129 159 136 152 136 143V120C136 111 129 104 120 104Z"
                  fill="#EEF5FF"
                  stroke="#334E78"
                  strokeWidth="5"
                />

                <path
                  d="M94 137C94 152 106 164 120 164C134 164 146 152 146 137"
                  stroke="#334E78"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M120 164V178"
                  stroke="#334E78"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                <path
                  d="M108 179H132"
                  stroke="#334E78"
                  strokeWidth="5"
                  strokeLinecap="round"
                />

                {/* Phone icon */}
                <path
                  d="M48 171L60 164L69 178L62 184C70 195 80 203 92 208L97 201L111 209L105 221C101 226 94 227 88 225C67 216 51 200 42 180C39 174 42 168 48 165Z"
                  fill="#BFDBFE"
                />

                <path
                  d="M52 171L61 168L68 178L62 183"
                  stroke="#3B82F6"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />

                {/* Telegram */}
                <path
                  d="M181 174L211 160L199 198L188 187L181 199V174Z"
                  fill="#3B82F6"
                />

                <path
                  d="M181 174L211 160L188 187"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            <h3 className="text-xl font-bold text-slate-900">
              We Value Your Time
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Our team is dedicated to providing you with the best support
              experience. Whether you have a question or need guidance, we are
              just a message away.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
