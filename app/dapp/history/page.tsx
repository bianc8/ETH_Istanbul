import MyAttestations from "@/components/MyAttestations";
import MySchemas from "@/components/MySchemas";

const HistoryPage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <h1 className="text-3xl font-bold">Schemas</h1>
      <MySchemas />

      <h1 className="text-3xl font-bold mt-10">Attestations</h1>
      <MyAttestations />
    </>
  )
}

export default HistoryPage;