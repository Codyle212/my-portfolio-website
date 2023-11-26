function Title({
  children,
  id,
  className,
}: {
  children: string;
  id: string;
  className: string;
}) {
  return (
    <>
      <h1
        id={id && id}
        className={`dark:text-gray-200 text-2xl font-bold underline-offset-8 decoration-4 mt-5 text-gray-700 ${className}`}
      >
        {children}
      </h1>
    </>
  );
}
export default Title;
