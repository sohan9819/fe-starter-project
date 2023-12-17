import React from 'react';

interface Person {
  name: string;
  country: string;
}

interface PeopleProps {
  people: Person[];
}

const People: React.FC<PeopleProps> = ({ people }) => {
  return (
    <div>
      <h2>People List</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Country</th>
          </tr>
        </thead>
        <tbody>
          {people.map((person, index) => (
            <tr key={index}>
              <td>{person.name}</td>
              <td>{person.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default People;
