export default function formatFromCamelCase(s) {
  s = s.charAt(0).toUpperCase() + s.slice(1);
  return s.replace(/([A-Z]+)/g, " $1").replace(/([A-Z][a-z])/g, " $1");
}