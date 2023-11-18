import MySchemas from "@/components/MySchemas";

export default function SchemaLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <MySchemas />
    </>
  )
}