import SectionHeader from "../SectionHeader"
import InputField from "./InputField"
import TextareaField from "./TextareaField"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"

export default function Contact() {
  /* initialize an empty reference object for the form ({current: null}). We use useRef to follow
  the declarative approch for React of accessing any DOM element directly, because as a matter of fact, (formRef.current) is the same as (document.querySelector()). This gives us direct DOM access inside a React component, which is super useful when we need to integrate with third-party libraries or perform imperative actions (like reset or focus).*/
  const formRef = useRef();
  const [statusMessage, setStatusMessage] = useState("");
  const [error, setError] = useState(false);

  function getFormattedDate() {
    const currentDate = new Date();
    const options = { month: 'short' };
    const month = new Intl.DateTimeFormat('en-US', options).format(currentDate);
    const day = currentDate.getDate();
    const formattedDate = `${month}, ${day}`;
    return formattedDate;
  }

  function getFormattedTime() {
    const currentDate = new Date();
    let hours = currentDate.getHours();
    const minutes = currentDate.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';  // Determine AM or PM
    hours = hours % 12;  // Convert 24-hour format to 12-hour format
    hours = hours ? hours : 12;  // Handle 0 as 12 (midnight)
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;  // Ensure two-digit minutes
    return `${hours}:${formattedMinutes} ${ampm}`;
  };

  function removeStatusMessage() {
    setTimeout(() => {
      setStatusMessage("")
    }, 5000)
  }

  async function submitFormHandler(event) {
    event.preventDefault();

    const formattedDate = getFormattedDate();
    const formattedTime = getFormattedTime();

    /* extract the data out from each field of the form at the time where the form element is the
    current reference of the reference object (formRef.current = <form>...</form>). FormData is not a plain object. It's a specialized built-in browser object designed for submitting forms, not for easy inspection or manipulation like normal JavaScript objects.*/
    const formData = new FormData(formRef.current);
    
    // add some data programmatically to the form data that will be sent to the backend
    formData.append("date", formattedDate);
    formData.append("time", formattedTime);
    
    /* converting the formData iterable object into a plain object to be able to use emailjs.send, because that send method only works with plain objects */
    const formObject = Object.fromEntries(formData.entries());
    
    try {
      setError(false);
      formRef.current.reset();
      setStatusMessage("Sending Message")
      await emailjs.send("contact_service", "template_w8j2kxu", formObject, { publicKey: "1U8hraWHYpKBNuDFX" });
      setStatusMessage('Message sent successfully! Please Check your inbox.');
      removeStatusMessage()
    } catch (error) {
      setError(error);
      setStatusMessage(`Something went wrong. Please try again later.`)
      removeStatusMessage()
    }
  }

  return (
    <section className="mb-14">
      <SectionHeader sectionName="Get In Touch" />
      {/* assign the form to the reference object ({current: <form>...</form>}) */}
      <form ref={formRef} onSubmit={submitFormHandler} acceptCharset="UTF-8" method="post" className="space-y-7">
        <InputField labelFor="name" labelText="Full name" inputType="text" isRequired/>
        <InputField labelFor="email" labelText="Your email" inputType="email" isRequired/>
        <InputField labelFor="title" labelText="Subject" inputType="text" isRequired/>
        <TextareaField labelFor="message" labelText="Your message" isRequired rowsNum={4}/>
        <button type="submit" className="text-[1.7rem] bg-black text-white px-6 py-3 rounded-lg cursor-pointer hover:bg-gray-800 transition-colors">{statusMessage === "Sending Message" ? "Sending..." : "Send Message"}</button>
      </form>
      {statusMessage && statusMessage !== "Sending Message" && <p className={`text-[1.5rem] ${!error ? "text-green-700" : "text-red-700"} mt-4`}>{statusMessage}</p>}
    </section>
  )
}
