import { Modal, Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import ItemCards from "./ItemCards";
import { fetchStorage } from "../../utils/tzkt";
import { getAccount } from "../../utils/wallet";
import {fetchData} from "../../utils/ipfs/ipfs_fetch";
import {addData} from "../../utils/ipfs/ipfs_add";
import update from 'react-addons-update';
import {
  registerStore
} from "../../utils/operation";


function Store() {
  const [state, setState] = useState(false);
  const [account, setAccount] = useState("");
  const openModal = () => setState(true);
  const closeModal = () => setState(false);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [items,setItems]=useState([]);
  const addItem=(item)=>{
    setItems(items=item);
  }

  useEffect(() => {
    (async () => {
      // TODO 5.b - Get the active account
      const account = await getAccount();
      setAccount(account);
    })();
  }, []);

  const getHash = async ()=>{
      let storage = await fetchStorage();
      let hash = storage["cooperative_stores"][account];
      //let data = await fetchData(hash);

      
      return hash;
  }



  const textStyle = {
    border: "2px solid red",
  };
  const hide = {
    display: "none",
  };
  const checkForm = (items) => {
    //form is valid
    if (items.name !== "" && items.quantity !== "" && items.price > 0) {
      console.log("Valid");
      textStyle.border = "2px solid green";
      return true;
    }
    //form is invalid
    else {
      console.log("Invalid");
      hide.display = "inline";
      return false;
    }
  };



  const handleSubmit = async (e) => {
    e.preventDefault();
    let id=items.length;
    const item = { name, quantity, price, id };
    const hash = await getHash();
    const data = await fetchData(hash);
    
    if(checkForm(item)){
      data["item_"+(Object.keys(data).length-4).toString()] = item;
      console.log(item);
      addItem(item);
      console.log(items);
      console.log(data)
      const register = async (hash) => {
        try {
          await registerStore(hash);
          alert("Transaction succesful!");
        } catch (err) {
          alert(err.message);
        }
      }
      let temp=[]
      for(let i=1;i<=Object.keys(data).length-5;i++)
      {
        console.log(data["item_"+i.toString()]);
        temp.push(data["item_"+i.toString()]);
        console.log(temp)
      }
      addItem(temp);

      addData(data,register);
      
      
      console.log(items);
    }
    console.log(item);
    setState(false);
  };

  return (
    <div className="container">
      <div className="row mx-2 px-2">
      <h1 className="col-4">Store Page</h1>
      <div className="offset-4 col-3">
        <Button variant="primary" onClick={openModal} className="align-self-center">
          Add Item
        </Button>
      </div>
      </div>
      <Modal show={state} onHide={closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>New Item</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="register">
            <form onSubmit={handleSubmit}>
              <label>Item Name </label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Quantity </label>
              <input
                type="text"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
              />
              <label>Price in Mutez </label>
              <input
                type="number"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
              />
            </form>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={closeModal}>
            Close
          </Button>
          <Button onClick={handleSubmit} className="save">
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="col-3">
      {items.map((item) =>{ 
        return (
        <ItemCards key={item.id} name={item.name} price={item.price} quantity={item.quantity} ></ItemCards>
        )}
      )}
      </div>
    </div>
  );
}

export default Store;
