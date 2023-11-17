export default function AttestationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <p>Attestation Layout</p>

      {children}

      <ol>
        <li>
        Attestation ID Attestation Address Attestation Params Resolver No. Attestations
        </li>
        <li>
        Attestation ID Attestation Address Attestation Params Resolver No. Attestations
        </li>
        <li>
          Attestation ID Attestation Address Attestation Params Resolver No. Attestations
        </li>
      </ol>
    </>
  )
}