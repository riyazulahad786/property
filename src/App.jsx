import {} from 'react'
import Home from './components/Home'
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
// import ProductDetails from './components/ProductDetails'
import CardDetails from './components/CardDetails'
import image1 from './assets/image1.jpg'
import image2 from './assets/images2.jpeg'
import image3 from './assets/image3.jpg'
import image4 from './assets/image4.jpg'
import image5 from './assets/image5.jpg'
import image6 from './assets/image6.jpg'
import image7 from './assets/image7.jpg'
import image8 from './assets/image8.webp'
import image9 from './assets/image9.jpg'
function App() {
  const data =[
      {
        id: 1,
        title: "Walden Colombo US",
        date: "4 March 2024",
        likes: 41722,
        rating: 4.8,
        image: image1,
        isLiked: true,
        location:"london",
        price:"1.4cr",
        address:"london graye gardle newyork"
      },
      {
        id: 2,
        title: "Lush Gardens",
        date: "10 March 2024",
        likes: 11234,
        rating: 3.6,
        image: image2,
        isLiked: false,
        location:"Europe",
        price:"1.4cr",
        address:"dhansu mayeri 4560 europe"

      },
      {
          id: 3,
          title: "Walden Colombo US",
          date: "4 March 2024",
          likes: 41722,
          rating: 2.8,
          image: image3,
          isLiked: true,
          location:"usa",
          price:"1.4cr",
          address:"washinton gardle usa"
        },
        {
          id: 4,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 10234,
          rating: 4.6,
          image: image4,
          isLiked: false,
          location:"london",
          price:"1.4cr",
          address:"washinton gardle usa"
        },
        {
          id: 5,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 15234,
          rating: 4.6,
          image: image5,
          isLiked: false,
          location:"india",
          price:"1.4cr",
          address:"richmond circle 560100 bangalore india"
        },
        {
          id: 6,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 144,
          rating: 3.6,
          image: image6,
          isLiked: false,
          location:"bangalore",
          price:"1.4cr",
          address:"washinton gardle usa"
        },
        {
          id: 7,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 12234,
          rating: 3.1,
          image: image7,
          isLiked: false,
          price:"1.4cr",
          address:"washinton gardle usa"
        },
        {
          id: 8,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 15234,
          rating: 4.6,
          image: image8,
          isLiked: false,
          location:"london",
          price:"1.4cr",
          address:"washinton gardle usa"
        },
        {
          id: 9,
          title: "Lush Gardens",
          date: "10 March 2024",
          likes: 1234,
          rating: 4.1,
          image: image9,
          isLiked: false,
          location:"london",
          price:"1.4cr",
          address:"washinton gardle usa"
        },
    ]
  return (
    <div>
      {/* <Home/> */}
      <Router>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path="/card/:id" element={<CardDetails data={data} />} />
            </Routes>
      </Router>
    </div>
  )
}

export default App