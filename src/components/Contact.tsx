import Title from "./Title";
function Contact() {
  return (
    <>
      <div className="flex flex-col mt-6 mb-10 mx-auto">
        <Title id="contact" className="mx-auto pt-4">
          Contact Me
        </Title>
        <div className="flex pt-4 justify-center items-center">
          <form
            action="https://getform.io/f/54a14d83-f30f-4dc0-abfa-cfed019ffa79"
            method="POST"
            className="flex flex-col w-full md:w-7/12"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>
            <input
              type="text"
              name="email"
              placeholder="Email"
              className="my-2 p-2 bg-transparent border-2 rounded-md focus:outline-none"
            ></input>
            <textarea
              name="message"
              placeholder="Message"
              rows={10}
              className="p-2 mb-4 bg-transparent border-2 rounded-md focus:outline-none "
            />
            <button
              type="button"
              className="text-center inline-block px-8 py-3 w-max text-base fond-medium rounded-md text-white bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% hover:stroke-white"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Contact;
