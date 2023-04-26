import './App.css';
import Card from "./components/Card/Card";




let productDetailsOne = {
  productId : "1",
  productPic : "https://img.freepik.com/free-photo/one-white-sneaker-shoe-isolated-white_93675-133980.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
  productName : "Nike Shoes",
  productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  Price : "$60",
  Rating : "Rating 4"
}

let productDetailsTwo = {
  productId : "2",
  productPic : "https://img.freepik.com/free-photo/stylish-golden-watch-white-surface_181624-27078.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
  productName : "Titan Watch",
  productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  Price : "$260",
  Rating : "Rating 5"
}

let productDetailsThree = {
  productId : "3",
  productPic : "https://t4.ftcdn.net/jpg/05/29/97/73/240_F_529977383_cGYnU4PtYJBnPdLHzdA9qnfDzdLakRKi.jpg",
  productName : "Adidas Tshirt",
  productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  Price : "32",
  Rating : "Rating 5"
}

let productDetailsFour = {
  productId : "4",
  productPic : "https://img.freepik.com/free-photo/blue-visor-hat-cloth-baseball_1203-6404.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
  productName : "Tommy Cap",
  productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  Price : "$20",
  Rating : "Rating 5"
}

let productDetailsFive = {
  productId : "5",
  productPic : "https://img.freepik.com/premium-psd/letterman-varsity-jacket-front-view-mockup_13598-329.jpg?size=626&ext=jpg&ga=GA1.1.1968142237.1682441443&semt=robertav1_2_sidr",
  productName : "Reebok Jacket",
  productDescription : "Lorem Ipsum is simply dummy text of the printing and typesetting industry",
  Price : "$110",
  Rating : "Rating 5"
}






function App() {
  return (
    <div className="App">
    <Card  props={productDetailsOne}/>
    <Card props={productDetailsTwo}  />
    <Card props={productDetailsThree}  />
    <Card props={productDetailsFour}  />
    <Card props={productDetailsFive}  />
    </div>
  );
}

export default App;
