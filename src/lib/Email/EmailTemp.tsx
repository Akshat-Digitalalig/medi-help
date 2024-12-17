import * as React from 'react';
import { Tailwind, Html, Container,  Text, Heading } from "@react-email/components";

interface EmailTempProps {
  name: string;
  email: string;
  country: string;
  city: string;
  phoneNumber: string;
  medicalProblem: string;
  ageOrDOB: string;
  hospital: string;
}

export const EmailTemp: React.FC<Readonly<EmailTempProps>> = ({ name, email, country, city, phoneNumber, medicalProblem, ageOrDOB, hospital }) => {

  return (
    <Tailwind>
      <Html lang="en">
        <Container className="mx-auto my-0 max-w-lg p-6 bg-white shadow-lg rounded-lg">
          <Heading className="text-2xl font-semibold text-brand text-center mb-6">
            Patient Details for MediHelp
          </Heading>

          <div className="space-y-2 w-full">
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Name:</Text>
              <Text className="text-lg text-gray-800">{name}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Email:</Text>
              <Text className="text-lg text-gray-800">{email}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Country:</Text>
              <Text className="text-lg text-gray-800">{country}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">City:</Text>
              <Text className="text-lg text-gray-800">{city}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Phone Number:</Text>
              <Text className="text-lg text-gray-800">{phoneNumber}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Medical Problem:</Text>
              <Text className="text-lg text-gray-800">{medicalProblem}</Text>
            </div>
            <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Age or Date of Birth:</Text>
              <Text className="text-lg text-gray-800">{ageOrDOB}</Text>
            </div>
            { hospital && (
              <div className="flex justify-between border-b pb-2">
              <Text className="text-lg font-semibold text-gray-600 pr-4">Hospital Name:</Text>
              <Text className="text-lg text-gray-800">{hospital}</Text>
            </div>
            )}
          </div>

          <Text className="text-center text-sm text-green-400 mt-6">
            Thank you for choosing MediHelp!
          </Text>
        </Container>
      </Html>
    </Tailwind>
  );
};

