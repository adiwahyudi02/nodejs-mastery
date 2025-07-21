//  dns
// the dns module provides a way to interact with the DNS (Domain Name System) system on a computer.
import dns from "dns/promises";

const address = await dns.lookup("adiwahyudi.vercel.app");

console.info(address.address);
console.info(address.family);
