import { useContext } from 'react'
import { assets } from '../assets/assets'
import { DoctorContext } from '../context/DoctorContext'
import { AdminContext } from '../context/AdminContext'
import { useNavigate } from 'react-router-dom'
import logo from '../assets/home.png'

const Navbar = () => {

  const { dToken, setDToken } = useContext(DoctorContext)
  const { aToken, setAToken } = useContext(AdminContext)

  const navigate = useNavigate()

  const logout = () => {
    navigate('/')
    dToken && setDToken('')
    dToken && localStorage.removeItem('dToken')
    aToken && setAToken('')
    aToken && localStorage.removeItem('aToken')
  }

  return (
    <div className='flex justify-between items-center px-4 sm:px-10 py-3 border-b bg-white'>
      <div className='flex items-center gap-2 text-xs'>
        {/* <img onClick={() => navigate('/')} className='w-36 sm:w-40 cursor-pointer' src={assets.admin_logo} alt="" /> */}
        <div
                  onClick={() => navigate("/")}
                  className="flex items-center gap-3 cursor-pointer group"
                >
                  <div className="bg-primary/10 p-2 rounded-xl group-hover:scale-110 transition duration-300">
                    <img src={logo} className="w-8 h-8 object-contain" alt="" />
                  </div>
        
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-gray-800">
                      Serv<span className="text-primary">Smart</span>
                    </h1>
                  </div>
                </div>
        <p className='border px-2.5 py-0.5 rounded-full border-gray-500 text-gray-600'>{aToken ? 'Admin' : 'Provider'}</p>
      </div>
      <button onClick={() => logout()} className='bg-primary text-white text-sm px-10 py-2 rounded-full'>Logout</button>
    </div>
  )
}

export default Navbar