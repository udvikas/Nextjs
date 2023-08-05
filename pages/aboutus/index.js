//our-domain.com/aboutus
import Link from "next/link";

export const details = [
  { id: 1, name: "Yash", role: "Senior Developer" },

  { id: 2, name: "Vaibhav", role: "Backend Developer" },

  { id: 3, name: "Suresh", role: "Frontend Developer" },
];

function Aboutus() {
  return (
    <>
      <h3>Developer's details</h3>
      <ul>
        {details.map((dev) => (
          <li key={dev.id}>
            <Link href={`/aboutus/${dev.id}`}>
              <a>
                {dev.name}
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </>
  );
}
export default Aboutus;
