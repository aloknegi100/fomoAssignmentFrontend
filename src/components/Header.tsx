import { Link } from "react-router-dom"

const Header = () => {
  return (
    <div className="relative flex bg-black text-white justify-center h-[120px] md:h-[150px]">
      <img 
        className="absolute w-16 md:w-24 rounded-full -bottom-8 md:-bottom-12" 
        src="https://storage.tally.so/c346cbb8-01db-4f91-85b0-3bd41156f79f/fflogo.png" 
        alt="Fomo Factory"
      />
      <Link to={'/'}>
        <h1 className="text-[40px] md:text-[70px] ml-4 md:ml-14">fomo factory</h1>
      </Link>
    </div>
  )
}

export default Header
