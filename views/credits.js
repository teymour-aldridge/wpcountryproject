import React from "react";

class Credits extends React.Component {
  render() {
    return (
      <div>
        <h1 className="is-size-3">Credits</h1>
        <p>
          This website was built using React (a front-end javascript framework).
        </p>
        <h1 className="is-size-4">Bibliography</h1>
        <ul>
          <li>Brave New World (Aldous Huxley) [1931]</li>
          <li>Discipline and Punish (Michel Foucault) [1975]</li>
          <li>Leviathan (Thomas Hobbes) [1651]</li>
        </ul>
      </div>
    );
  }
}
export { Credits };
