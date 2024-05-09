import { BrowserProvider, AbiCoder, Contract } from "ethers";
import { initFhevm, createInstance } from "fhevmjs";

import captableAddress from "../JSON/EncryptedCapTable (8).json";
import captableData from "../JSON/CapTableData (5).json";
import vestingabi from "../JSON/Vesting (3).json"
export const init = async () => {
  await initFhevm();
};

const FHE_LIB_ADDRESS = "0x000000000000000000000000000000000000005d";
export const CAPTABLE_ADDRESS = "0x4b93293FFdA44f1924E842b9ed50d5B7bE839045";
export const CAPTABLE_DATA="0x168FA586911A6E4503af55Ca401aD20a7866AB5D";
export const VESTING_ADDRESS="0xA80eba4DB6764C06bB7f6f26392A9e31D13F50B4"

export const provider = new BrowserProvider(window.ethereum);
export let signer;
let instance; 

export const setSigner = async () => {
  signer = await provider.getSigner();
};


export const createFhevmInstance = async () => {
  const network = await provider.getNetwork();
  const chainId = +network.chainId.toString();

  // Get blockchain public key
  const ret = await provider.call({
    to: FHE_LIB_ADDRESS,
    data: "0xd9d47bb001",
  });
  const decoded = AbiCoder.defaultAbiCoder().decode(["bytes"], ret);
  const publicKey = decoded[0];
  instance = await createInstance({ chainId, publicKey }); // initialize instance here
  return instance; // return instance
};

export const getInstance = async () => {
  await init();
  return instance || (await createFhevmInstance()); // return the created instance
};

export const captableContract = async () => {
  await setSigner();
  return new Contract(CAPTABLE_ADDRESS, captableAddress.abi, signer);
};

export const captableContrac = async () => {
  await setSigner();
  return new Contract(CAPTABLE_ADDRESS, captableAddress.abi);
};

export const captableDataContract = async () => {
  await setSigner();
  return new Contract(CAPTABLE_DATA, captableData.abi, signer);
};

export const vestingContract=async()=>{
  await setSigner();
  return new Contract(VESTING_ADDRESS,vestingabi.abi,signer)
}



