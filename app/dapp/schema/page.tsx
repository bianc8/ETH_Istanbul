import Link from "next/link";

const SchemaPage = () => {
  return (
    <div>
      <h1>Schema Page</h1>

      <Link href="/dapp/schema/create">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Create Schema
        </button>
      </Link>

    </div>
  );
};

export default SchemaPage;
