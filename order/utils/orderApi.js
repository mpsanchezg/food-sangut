export default (req, res) => {
  res.status(200).json({ name: "John Doe" });
};

/*

{
  name:
  email:
  cellphone:
  commune:
  address:
  order: [
    {
      product:
      quantity:
    },
    {
      product:
      quantity:
    },
    {
      product:
      quantity:
    },
  ]    
}

*/
