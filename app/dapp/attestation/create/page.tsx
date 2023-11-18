"use client"

import { useSearchParams } from "next/navigation";

const AttestationCreatePage = () => {
  const schemaId = useSearchParams();
  console.log(schemaId.get("schemaId"));

  return (
    <div>
      <h1>Attestation Create Page</h1>

      <form>
        <input type="text" placeholder="Attestation ID" />
        <input type="text" placeholder="Attestation Address" />
        <input type="text" placeholder="Attestation Params" />
        <input type="text" placeholder="Resolver" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

export default AttestationCreatePage;