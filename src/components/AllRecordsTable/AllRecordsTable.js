import React from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
} from "@chakra-ui/react";

export const AllRecordsTable = ({ data }) => {
  return (
    <Table variant="simple">
      <TableCaption>All Student Records</TableCaption>
      <Thead>
        <Tr>
          <Th>Name</Th>
          <Th>Father's Name</Th>
          <Th>email</Th>
          <Th isNumeric>phone</Th>
          <Th isNumeric>class</Th>
        </Tr>
      </Thead>
      <Tbody>
        {data.map((row) => {
          return (
            <Tr>
              <Td>{row.name}</Td>
              <Td>{row.fname}</Td>
              <Td>{row.email}</Td>
              <Td isNumeric>{row.phone}</Td>
              <Td isNumeric>{row.class}</Td>
            </Tr>
          );
        })}
      </Tbody>
    </Table>
  );
};
