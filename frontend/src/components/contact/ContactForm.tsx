"use client";
import photoc from "@/src/assets/images/photoC.png";
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

          <div className="flex p-8 lg:pl-0 lg:py-8 lg:pr-8 ">
            <img
              src={photoc.src}
              alt="Customer Support"
              className="w-full h-full "
            />

            {/* <h3 className="mt-2 text-xl font-bold text-slate-900">
              We’re Here to Help
            </h3>

            <p className="mt-3 max-w-sm text-sm leading-6 text-slate-500">
              Have a question or need assistance? Our support team is ready to
              connect with you through Telegram, email, phone, or chat.
            </p> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
