import React from "react";
import Box from './Box'

const URL_SCHEME = "/2.0/introduction/";
const CONSTANTS = [
  {
    name: "Sign",
    description: "Sign is a remote signer protocol to communicate securely between web3 wallets and dapps.",
    url: `${URL_SCHEME}sign`
  },
  {
    name: "Auth",
    description: "Auth is an authentication protocol that can be used to log-in blockchain wallets into apps.",
    url: `${URL_SCHEME}auth`
  },
  {
    name: "Push",
    description: "Push is a push notification protocol that enables apps to notify users of both off-chain and on-chain events.",
    url: `${URL_SCHEME}push`
  },
  {
    name: "Chat",
    description: "Chat is a direct messaging protocol that can enable wallets to message each other.",
    url: `${URL_SCHEME}chat`
  }
];

export const Container = () => {
  return (
    <div className="boxContainer">
      {CONSTANTS.map((product, i)=>(
        <Box name={product.name} description={product.description} url={product.url} key={i}/>
      ))}
    </div>
  );
};

export default Container;
