export const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];
function Aboutus() {
  return (
    <h3>
      {details.map((dev) => (
        <p key={dev.id}>
          {dev.name} - {dev.role}
        </p>
      ))}
    </h3>
  );
}
export default Aboutus;
