import certifications from "../data/certifications";
import CertificationItem from "./CertificationItem";
import Title from "./Title";

function Certifications() {
  return (
    <>
      <Title id="certifications" className="pl-20 pt-6 ">
        Certifications
      </Title>
      <div className="flex flex-col md:flex-row items-center justify-start px-20 pt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-8">
          {certifications.map((certification) => (
            <CertificationItem
              title={certification.title}
              imgUrl={certification.imgUrl}
              timeAquired={certification.timeAquired}
              validity={certification.validity}
              link={certification.link}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Certifications;
