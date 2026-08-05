import User from "./User";
import Admin from "./Admin";

function App2() {
  let isAdmin = "gcfgg";
  // if statement

  //   if (isAdmin) {
  //     return <Admin />;
  //   } else {
  //     return <User />;
  //   }

  // Ternary Operator
  //   return isAdmin ? <Admin /> : <User />;

  // Switch Statement
  switch (isAdmin) {
    case "true":
      return <Admin />;
    case "false":
      return <User />;
    default:
      return <User />;
  }
}

export default App2;