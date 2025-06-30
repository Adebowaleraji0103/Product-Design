import Header from "./component/Header";
import Card from "./component/Card";
import ConfirmOrder from "./component/ConfirmOrder";

const allProduductCard = [
  {
    image: "./images/first.jpg",
    label: "Popular",
    name: "Waffle",
    price: "6.50",
  },
  {
    image: "./images/first.jpg",
    label: "New",
    name: "coocc",
    price: "5.00",
  },
  {
    image: "./images/first.jpg",
    label: "Limited Edition",
    name: "Croissant",
    price: "3.75",
  },
  {
    image: "./images/first.jpg",
    label: "Best Seller",
    name: "Cheesecake",
    price: "8.50",
  },
  {
    image: "./images/first.jpg",
    label: "Seasonal",
    name: "Brownie",
    price: "4.25",
  },
  {
    image: "./images/first.jpg",
    label: "Trending",
    name: "Ice Cream",
    price: "3.00",
  },
  {
    image: "./images/first.jpg",
    label: "Exclusive",
    name: "Donut",
    price: "2.50",
  },
  {
    image: "./images/first.jpg",
    label: "Featured",
    name: "Macaron",
    price: "1.75",
  },
  {
    image: "./images/first.jpg",
    label: "Top Pick",
    name: "Cupcake",
    price: "3.25",
  },
];

const App = () => {
  return (
    <div>
      <Header />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg-grid-cols-4 gap-x-0">
        {allProduductCard.map((product) => (
          <Card productDetails={product} />
        ))}
      </div>

      {/* <ConfirmOrder /> */}
    </div>
  );
};

export default App;
<div></div>;
