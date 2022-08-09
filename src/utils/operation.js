// TODO 6 - Call buy_ticket entrypoint in the Lottery contract
import { tezos } from "./tezos";

export const registerDonor = async (hash) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1MT6xAxL4JvS7q9FTbNV186RABmLsZ5oo2"
    );
    const op = await contractInstance.methods.register_donor(hash).send();
    await op.confirmation(1);
  } catch (err) {
    throw err; 
  }
};

// TODO 10 - Call end_game entrypoint in the Lottery contract
export const registerNGO = async (hash) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1MT6xAxL4JvS7q9FTbNV186RABmLsZ5oo2"
    );
    const op = await contractInstance.methods.register_ngo(hash).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};

export const registerStore = async (hash) => {
  try {
    const contractInstance = await tezos.wallet.at(
      "KT1MT6xAxL4JvS7q9FTbNV186RABmLsZ5oo2"
    );
    const op = await contractInstance.methods.register_store(hash).send();
    await op.confirmation(1);
  } catch (err) {
    throw err;
  }
};
