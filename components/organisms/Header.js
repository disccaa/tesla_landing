import {useState} from "react";

export default function Header() {
  const [ulList, setUlList] = useState([
    {
      id: 1,
      name: 'Каталог',
      regEl: null
    },
    {
      id: 2,
      name: 'Инструкция',
      regEl: null
    }, {

      id: 3,
      name: 'Документация',
      regEl: null
    },
    {
      id: 4,
      name: 'О нас',
      regEl: null
    },

  ])

  return (
    <div className='w-full bg-black'>
      <div className="container mx-auto text-white">
        <nav >
          <div className="flex h-24 justify-around items-center " >
            <div>
              <span className="font-tesla text-2xl font-normal  cursor-pointer">QuatPoint</span>
            </div>
            <div className='w-1/3'>
              <ul className="flex font-main justify-around  ">
                {ulList.map(l =>
                  <li key={l.id} className='cursor-pointer'>{l.name}</li>
                )}
              </ul>
            </div>
            <div><span className="font-tesla text-xl font-normal cursor-pointer" >+7  771 208 77 27 </span></div>
          </div>
        </nav>
      </div>
    </div>
  )
}
