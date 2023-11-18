"use client"

import Icon from "@/components/Icon";
import type { IFieldType, IField } from "@/app/dapp/schema/create/page";

const AddToSchemaComponent = ({ fieldTypes, handleDeleteField }: { fieldTypes: IFieldType[], handleDeleteField: (id: number) => void }) => {
  const uid: number = parseFloat(Math.random().toString(34).slice(2));

  return (
    <div className="flex flex-row gap-4">
      <input type="text" placeholder="Field Name" required className="rounded-lg p-2" />
      <select className="select select-primary w-full max-w-xs">
        {fieldTypes.map((fieldType, index) => (
          <option key={index} value={fieldType.type}>
            {fieldType.type} {fieldType.description}
          </option>
        ))}
      </select>
      <button onClick={() => handleDeleteField(uid)}><Icon name="trash-2" /></button>
    </div>
  )
}

export default AddToSchemaComponent;