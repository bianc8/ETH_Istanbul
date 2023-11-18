import MyAttestations from "@/components/MyAttestations";

export default function AttestationLayout({
  children,
}: {
  children: React.ReactNode;
}) {

  return (
    <>
      {children}
      <MyAttestations />
    </>
  );
}
