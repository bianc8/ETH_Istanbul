"use client"

import type { IFieldType, IField } from "@/app/dapp/schema/create/page";

const AddToSchemaComponent = ({ fieldTypes, handleDeleteField }: { fieldTypes: IFieldType[], handleDeleteField: (id: number) => void }) => {
  const uid: number = parseFloat(Math.random().toString(34).slice(2));

  return (
    <>
      <input type="text" placeholder="Field Name" required />
      <select className="select select-primary w-full max-w-xs">
        {fieldTypes.map((fieldType) => (
          <option key={fieldType.type} value={fieldType.type}>
            {fieldType.type} {fieldType.description}
          </option>
        ))}
      </select>
      <button onClick={() => handleDeleteField(uid)}>Delete Icon</button>
    </>
  )
}

export default AddToSchemaComponent;