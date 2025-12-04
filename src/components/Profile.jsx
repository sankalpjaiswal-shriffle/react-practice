export default function Profile() {
  let personDetails = {
    name: "Sankalp Jaiswal",
    age: 24,
  };
  let { name, age } = personDetails;

  //memoize function
  function memoize(func) {
    let cacheValue = {};
    let result = 1;
    return function (...args) {
      let numKey = JSON.stringify(args); //it will create args as key.
      if (cacheValue[numKey]) {
        //if the args key is present then it will return value.
        console.log("Fetch from cache");
        return cacheValue[numKey];
      }
      for (let i = 0; i < args.length; i++) {
        result *= args[i];
      }
      cacheValue[numKey] = result;
      return result;
    };
  }

  const memoization = memoize();
  console.log(memoization(2, 3));
  console.log(memoization(2, 3));

  return (
    <div id="profile-container" className="flex">
      <div id="profile-card" className="flex flex-col items-center">
        <h3>{name}</h3>
        <p>{age}</p>
      </div>
    </div>
  );
}
