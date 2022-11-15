import {useState} from "react";
import {Link} from "react-scroll/modules"

export default function Header({className, ...props}) {
  const [ulList, setUlList] = useState([
    {
      id: 1,
      name: 'Каталог',
      regEl: null,
      page: 'Catalog',
    },
    {
      id: 2,
      name: 'Новости',
      regEl: null,
      page: 'News',
    }, {

      id: 3,
      name: 'Документация',
      regEl: null,
      page: 'MobileApp',
    },
    {
      id: 4,
      name: 'О нас',
      regEl: null,
      page: 'OurAdvantages',
    },

  ])

  return (
    <div className={`w-full bg-black sticky top-0 ${className}`}>
      <div className="container mx-auto text-white">
        <nav>
          <div className="flex h-24 justify-around items-center ">
            <div>
              <Link to= spy={true} smooth={true} offset={50} duration={500}> <span className="font-tesla text-2xl font-normal  cursor-pointer">QuatPoint</span><Link/>
            </div>
            <div className='w-1/3'>
              <ul className="flex font-main justify-around  ">
                {ulList.map(l =>
                  <Link to={l.page} spy={true} smooth={true} offset={50} duration={500}><li key={l.id} className='cursor-pointer hover:opacity-90 text-xl'>{l.name}</li></Link>
                )}
              </ul>
            </div>
            <div><span className="font-tesla text-xl font-normal cursor-pointer">+7  771 208 77 27 </span></div>
          </div>
        </nav>
      </div>
    </div>
  )
}
