"use client"

import { useState } from "react";

import AddToSchemaComponent from "@/components/AddToSchemaComponent";

export type IFieldType = {
  type: string;
  description: string;
}

export type IField = {
  id: number;
  name: string;
  type: IFieldType;
}


const SchemaCreatePage = () => {
  const [fields, setFields] = useState<IField[]>([])
  const fieldTypes: IFieldType[] = [
    {
      type: "string",
      description: "A string of characters",
    },
    {
      type: "int",
      description: "An integer",
    },
    {
      type: "address",
      description: "An address",
    },
    {
      type: "bool",
      description: "A boolean value",
    },
    {
      type: "address",
      description: "An Ethereum address",
    }
  ];

  const handleAddField = (newField: IField) => {
    setFields(oldFields => [...oldFields, newField])
  }

  const handleUpdateField = (id: number, updatedField: IField) => {
    setFields(oldFields => oldFields.map(field => field.id === id ? updatedField : field))
  }

  const handleDeleteField = (id: number) => {
    setFields(oldFields => oldFields.filter(field => field.id !== id))
  }

  return (
    <div>
      <h1>Schema Create Page</h1>

      <form>
        <AddToSchemaComponent
          fieldTypes={fieldTypes}
          handleDeleteField={() => handleDeleteField(1)} />
        <AddToSchemaComponent
          fieldTypes={fieldTypes}
          handleDeleteField={() => handleDeleteField(1)} />


        <input type="text" placeholder="Resolver Contract Address" disabled />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default SchemaCreatePage;