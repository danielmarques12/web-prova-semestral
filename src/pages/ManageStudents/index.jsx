/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { Container, Table } from './styles';
import { api } from '../../services/api';

export default function ManageStudents({ match }) {
  const [students, setStudents] = useState([]);
  const { bootcamp_id } = match.params;

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
          <tr>
            <td>{student.name}</td>
            <td>{student.email}</td>
            <td>Remover</td>
          </tr>
        ))}
      </Table>
    </Container>
  );
}
