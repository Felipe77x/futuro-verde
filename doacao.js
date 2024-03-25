

const mp = new MercadoPago('TEST-02340453-dbe2-44aa-b5b6-2a63c1ab16da');
const bricksBuilder = mp.bricks();



mp.bricks().create("wallet", "wallet_container", {
    initialization: {
        preferenceId: "<PREFERENCE_ID>",
    },
 customization: {
  texts: {
   valueProp: 'smart_option',
  },
  },
 });
 

