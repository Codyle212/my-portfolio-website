type certification = {
  title: string;
  imgUrl: string;
  timeAquired: string;
  validity: string;
  link: string;
};

function CertificationItem({
  title,
  imgUrl,
  timeAquired,
  validity,
  link,
}: certification) {
  return (
    <>
      <div>
        <a href={link}>
          <img
            src={imgUrl}
            alt={title}
            className="h-80 w-80 object-contain cursor-pointer"
          />
        </a>

        <div className="w-full p-4">
          <h3 className="text-lg md:text-xl mb-2 md:mb-3 font-semibold">
            {title}
          </h3>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-md md:text-lg">
            {`Aquired on: ${timeAquired}`}
          </p>
          <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-md md:text-lg">
            {`Valid for: ${validity}`}
          </p>
        </div>
      </div>
    </>
  );
}

export default CertificationItem;
