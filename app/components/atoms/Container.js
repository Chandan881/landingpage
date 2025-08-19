export default function Container({ className = "", children }) {
  return (
    <div
      className={`max-w-6xl lg:max-w-none mx-auto lg:mx-[160px] px-6 sm:px-10 md:px-16 lg:px-0 ${className}`}
    >
      {children}
    </div>
  );
}
