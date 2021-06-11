/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Table } from './styles';
import { api } from '../../services/api';
import Button from '../../components/Button';

export default function ManageStudents({ match }) {
  const [students, setStudents] = useState([]);
  const { bootcamp_id } = match.params;

  const handleClick = (student_id) => {
    api.delete(`students/delete/${student_id}`);
    document.location.reload(true);
  };

  useEffect(
    () =>
      api
        .get(`students/${bootcamp_id}/list`)
        .then((response) => setStudents(response.data)),
    []
  );

  return (
    <Container>
      <h1>Gerencie seus alunos</h1>

      <Table>
        <tr>
          <th>Student</th>
          <th>Email</th>
          <th>Gerenciar</th>
        </tr>
        {students.map((student) => (
          <tr key={student.id}>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>
              <Button
                text="Remover estudante"
                onClick={() => handleClick(student.id)}
              />
            </td>
          </tr>
        ))}
      </Table>
    </Container>
  );
}
