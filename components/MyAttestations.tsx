"use client";

import { useQuery } from "@apollo/experimental-nextjs-app-support/ssr";
import { gql } from "@apollo/client";

const GET_MY_ATTESTATIONS = gql`
  query {
    attestations(
      where: {
        schema: {
          is: {
            resolver: { equals: "0xB4Fb406b75db78D69c28E616Ef317f6ea6FE3497" }
          }
        }
      }
    ) {
      attester
      id
      revocable
      timeCreated
    }
  }
`;

const MyAttestations = () => {
  const { loading, error, data } = useQuery(GET_MY_ATTESTATIONS);
  console.log(loading, error, data);


  if (!!error) return <p>Error :(</p>;
  if (loading) return <p>Loading...</p>;
  if (!data) return <p>No data</p>;

  return (
    <table className="table table-zebra">
      <thead>
        <tr>
          <th>Attestation ID</th>
          <th>Attester</th>
          <th>Time Created</th>
          <th>Revocable?</th>
          <th>Schema Resolver</th>
        </tr>

      {data.attestations.map((attestation: any, index: number) => (
        <tr key={index}>
          <td>{attestation.id.length > 10 ? attestation.id.slice(0, 10)+'...' : attestation.id}</td>
          <td>{attestation.attester.length > 10 ? attestation.attester.slice(0, 10)+'...' : attestation.attester}</td>
          <td>{new Date(attestation.timeCreated*1000).toLocaleString()}</td>
          <td>{attestation.schema.revocable ? 'true' : 'false'}</td>
          <td>{attestation.schema.resolver.length > 10 ? attestation.schema.resolver.slice(0, 10)+'...' : attestation.schema.resolver}</td>
        </tr>
      ))}
      </thead>
    </table>
  )
}
/*
<td>{attestation.schema.id.length > 10 ? attestation.schema.id.slice(0, 10)+'...' : attestation.schema.id}</td>
<td>{attestation.schema.creator.length > 10 ? attestation.schema.creator.slice(0, 10)+'...' : attestation.schema.creator}</td>
<td>{attestation.schema.resolver.length > 10 ? attestation.schema.resolver.slice(0, 10)+'...' : attestation.schema.resolver}</td>
<td>{attestation.schema._count.attestations}</td>
*/

export default MyAttestations;