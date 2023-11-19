"use client";

import { useState } from "react";

import Image from "next/image";

import {
  EAS,
  Offchain,
  SchemaEncoder,
  SchemaRegistry,
} from "@ethereum-attestation-service/eas-sdk";
import { SignerOrProvider } from "@ethereum-attestation-service/eas-sdk/dist/transaction";
import { ethers } from "ethers";
import { useWeb3ModalSigner } from "@web3modal/ethers5/react";

import pushLogo from "@/public/push-bell.webp";
import toast from "react-hot-toast";

export type IFieldType = {
  type: string;
  description: string;
};

const SchemaCreatePage = () => {
  const fieldTypes: IFieldType[] = [
    {
      type: "string",
      description: "A string can be any text of arbitrary length.",
    },
  ];
  const [ field1, setField1] = useState<string>("")
  const [ field2, setField2] = useState<string>("")
  const [ loading, setLoading] = useState<boolean>(false)
  
  const { signer } = useWeb3ModalSigner();

  const handleCreateSchema = async (event: any) => {
    event?.preventDefault();
    try {
    setLoading(true)
    console.log("Start Creating Schema");

    const schemaRegistryContractAddress =
      "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0";
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

    schemaRegistry.connect(signer as unknown as SignerOrProvider);

    const schema = "string "+field1+", string "+field2;
    const resolverAddress = "0xB4Fb406b75db78D69c28E616Ef317f6ea6FE3497"; //0xB4Fb406b75db78D69c28E616Ef317f6ea6FE3497"; // Smart Contract
    const revocable = true;

    const transaction = await schemaRegistry.register({
      schema,
      resolverAddress,
      revocable,
    });

    // Optional: Wait for transaction to be validated
    const result = await transaction.wait();
    toast.success("Schema Created")
    console.log("Schema Created:", result);
    setField1("")
    setField2("")
  }
  catch(e) {
    console.error(e)
    toast.error("Ooops, something went wrong...")
  }
  finally {
    setLoading(false)
  }
    
  };

  return (
    <div className="my-10">
      <h1>Schema Create Page</h1>

      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => handleCreateSchema(e)}
      >
        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Field Name"
            required
            className="rounded-lg p-2"
            value={field1}
            onChange={(e) => setField1(e.target.value)}
          />
          <select className="select select-primary w-full max-w-xs">
            {fieldTypes.map((fieldType, index) => (
              <option key={index} value={fieldType.type}>
                {fieldType.type}
              </option>
            ))}
          </select>
        </div>


        <div className="flex flex-row gap-4">
          <input
            type="text"
            placeholder="Field Name"
            required
            className="rounded-lg p-2"
            value={field2}
            onChange={(e) => setField2(e.target.value)}
          />
          <select className="select select-primary w-full max-w-xs">
            {fieldTypes.map((fieldType, index) => (
              <option key={index} value={fieldType.type}>
                {fieldType.type}
              </option>
            ))}
          </select>
        </div>

        <div className="flex flex-row space-x-2 items-center">
          <input
            type="checkbox"
            className="toggle toggle-md toggle-success"
            checked
          />
          <p className="flex flex-row text-lg">
            Enable Push Notifications
            <Image
              src={pushLogo}
              width={25}
              height={25}
              alt="Push Protocol Bell"
            />
          </p>
        </div>
        <button type="submit" className="btn justify-center">
          {loading ? "Loading..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default SchemaCreatePage;
