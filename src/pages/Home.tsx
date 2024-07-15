import CryptoTable from "../components/CryptoTable"

const Home = () => {
  return (
    <div>
      <div className="bg-gray-800">
        <h1 className="text-white text-2xl font-bold p-5">Trending</h1>
      </div>
      <CryptoTable/>
    </div>
  )
}

export default Home