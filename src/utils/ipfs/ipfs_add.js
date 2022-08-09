const IPFS = require("ipfs-mini");
const ipfs = new IPFS({
  host: "ipfs.infura.io",
  port: 5001,
  protocol: "https",
});

export async function addData(data,register) {
  await ipfs.addJSON(data).then((result) => {
    register(result);
});
}

export default addData;
