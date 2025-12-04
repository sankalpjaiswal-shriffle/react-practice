export default function Profile() {
  let personDetails = {
    name: "Sankalp Jaiswal",
    age: 24,
  };
  let { name, age } = personDetails;

  return (
    <div className="flex">
      <div className="flex flex-col items-center">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
}
