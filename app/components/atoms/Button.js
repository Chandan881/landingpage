export default function Button({
  as = "a",
  href = "#",
  children,
  variant = "primary",
  className = "",
  ...rest
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-5 py-3 font-medium transition-colors";
  const variants = {
    primary: "bg-black text-white dark:bg-white dark:text-black",
    secondary: "border border-black/10 dark:border-white/15",
    ghost: "bg-transparent hover:bg-black/5 dark:hover:bg-white/10",
  };
  const Comp = as;
  return (
    <Comp
      href={href}
      className={`${base} ${variants[variant]} ${className}`}
      {...rest}
    >
      {children}
    </Comp>
  );
}
