import Link from "next/link";

export default function DappLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      <h1 className="text-2xl">Dapp Page</h1>
      <nav className="flex flex-row gap-8">
        <Link href="/dapp/schema" className="underline">Schema</Link>
        <Link href="/dapp/attestation" className="underline">Attestation</Link>
      </nav>
      {children}
    </div>
  );
}
