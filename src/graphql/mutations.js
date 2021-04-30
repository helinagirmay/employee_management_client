import { gql } from "@apollo/client";

export const CREATE_USERS = gql`
  mutation saveEmployee(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: Time!
    $gender: String!
    $phoneNo: String!
    $email: String
    $city: String!
    $subCity: String!
    $woreda: String!
    $zone: String!
    $kebele: String!
    $houseNo: String!
    $status: EmployeeStatus!
  ) {
    saveEmployee(
      input: {
        firstName: $firstName
        lastName: $lastName
        dateOfBirth: $dateOfBirth
        gender: $gender
        phoneNo: $phoneNo
        email: $email
        city: $city
        subCity: $subCity
        woreda: $woreda
        zone: $zone
        kebele: $kebele
        houseNo: $houseNo
        status: $status
      }
    ) {
      id
      firstName
      lastName
      dateOfBirth
      gender
      phoneNo
      email
      city
      subCity
      woreda
      zone
      kebele
      houseNo
      status
    }
  }
`;

export const UPDATE_USERS = gql`
  mutation updateEmployee(
    $firstName: String!
    $lastName: String!
    $dateOfBirth: Time!
    $gender: String!
    $phoneNo: String!
    $email: String
    $city: String!
    $subCity: String!
    $woreda: String!
    $zone: String!
    $kebele: String!
    $houseNo: String!
    $status: EmployeeStatus!
  ) {
    updateEmployee(
      input: {
        firstName: $firstName
        lastName: $lastName
        dateOfBirth: $dateOfBirth
        gender: $gender
        phoneNo: $phoneNo
        email: $email
        city: $city
        subCity: $subCity
        woreda: $woreda
        zone: $zone
        kebele: $kebele
        houseNo: $houseNo
        status: $status
      }
    ) {
      id
      firstName
      lastName
      dateOfBirth
      gender
      phoneNo
      email
      city
      subCity
      woreda
      zone
      kebele
      houseNo
      status
    }
  }
`;

export const DELETE_EMPLOYEE = gql`
  mutation deleteEmployee($id: Boolean!) {
    deleteEmployee(input: { id: $id }) {
      id
    }
  }
`;
