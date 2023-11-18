"use client"

import { useState } from "react";

import AddToSchemaComponent from "@/components/AddToSchemaComponent";
import { EAS, Offchain, SchemaEncoder, SchemaRegistry } from "@ethereum-attestation-service/eas-sdk";
import { SignerOrProvider } from "@ethereum-attestation-service/eas-sdk/dist/transaction";
import { ethers } from 'ethers';
import { useWeb3ModalSigner } from '@web3modal/ethers5/react'

export type IFieldType = {
  type: string;
  description: string;
}

export type IField = {
  id: number;
  name: string;
  type: IFieldType;
}

const SchemaCreatePage = () => {
  const [fields, setFields] = useState<IField[]>([])
  const fieldTypes: IFieldType[] = [
    {
      type: "string",
      description: "A string of characters",
    },
    {
      type: "int",
      description: "An integer",
    },
    {
      type: "address",
      description: "An address",
    },
    {
      type: "bool",
      description: "A boolean value",
    },
    {
      type: "address",
      description: "An Ethereum address",
    }
  ];
  const { signer } = useWeb3ModalSigner()

  const handleAddField = (newField: IField) => {
    setFields(oldFields => [...oldFields, newField])
  }

  const handleUpdateField = (id: number, updatedField: IField) => {
    setFields(oldFields => oldFields.map(field => field.id === id ? updatedField : field))
  }

  const handleDeleteField = (id: number) => {
    setFields(oldFields => oldFields.filter(field => field.id !== id))
  }

  const handleCreateSchema = async (event: any) => {
    event?.preventDefault();

    console.log("Start Creating Schema");

    const EASContractAddress = "0xC2679fBD37d54388Ce493F1DB75320D236e1815e"; // Sepolia v0.26

    // Initialize the sdk with the address of the EAS Schema contract address
    const eas = new EAS(EASContractAddress);

    // Gets a default provider (in production use something else like infura/alchemy)
    // Connects an ethers style provider/signingProvider to perform read/write functions.
    // MUST be a signer to do write operations!
    eas.connect(signer as unknown as SignerOrProvider);
    
    const schemaRegistryContractAddress = "0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0";
    const schemaRegistry = new SchemaRegistry(schemaRegistryContractAddress);

    schemaRegistry.connect(signer as unknown as SignerOrProvider);

    const schema = "string name";
    const resolverAddress = "0xC0x0a7E2Ff54e76B8E6659aedc9103FB21c038050D0"; //0xB4Fb406b75db78D69c28E616Ef317f6ea6FE3497"; // Smart Contract
    const revocable = true;

    const transaction = await schemaRegistry.register({
      schema,
      resolverAddress,
      revocable,
    });

    // Optional: Wait for transaction to be validated
    await transaction.wait();
    
    console.log("Schema Created", transaction);

  }

  return (
    <div className="my-10">
      <h1>Schema Create Page</h1>

      <form className="flex flex-col gap-4" onSubmit={(e) => handleCreateSchema(e)}>
        <AddToSchemaComponent
          fieldTypes={fieldTypes}
          handleDeleteField={() => handleDeleteField(1)} key={1} />
        <AddToSchemaComponent
          fieldTypes={fieldTypes}
          handleDeleteField={() => handleDeleteField(21)} key={21} />

        <input type="text" placeholder="Resolver Contract Address" disabled />
        <button type="submit" className="btn justify-center">Submit</button>
      </form>
    </div>
  )
}

export default SchemaCreatePage;