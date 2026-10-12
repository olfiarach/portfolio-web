// [NEED] markers: visible in dev only.
export default function Need({ children }) {
  if (process.env.NODE_ENV === "production") return null;
  return <mark className="mono ml-2 bg-yellow-200 text-black">{children}</mark>;
}
