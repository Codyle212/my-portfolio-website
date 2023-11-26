function Intro() {
  return (
    <>
      <div className="flex items-center justify-center flex-col text-center pt-20 pb-6">
        <h1
          id="about"
          className="dark:text-white text-4xl md:text-7xl mb-1 md:mb-3 font-bold"
        >
          Cody Le
        </h1>
        <p className="text-base md:text-xl mb-3 font-medium">
          Software Engineer & Fullstack Developer
        </p>
        <p className="text-sm max-w-xl font-bold">
          I am a full-Stack Developer with a solid foundation in both frontend
          and backend technologies. I have experience for frontend technologies
          like React and related library alongside backend expertise with
          Node.js,Python,Postgresl, MongoDB, and Golang. I also have experience
          with CICD and Cloud Infrastucture with tools like Git, AWS, Ansible,
          Jenkins, Docker, and Kubernetes
        </p>
      </div>
    </>
  );
}

export default Intro;
