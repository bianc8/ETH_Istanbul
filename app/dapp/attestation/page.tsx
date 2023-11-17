import Link from "next/link";

const AttestationPage = () => {
  return (
    <div>
      <h1>Attestation Page</h1>

      <Link href="/dapp/attestation/create">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >Create Attestation</button>
      </Link>

    </div>
  );
};

export default AttestationPage;
