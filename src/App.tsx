import clsx from "clsx"
import { useEffect, useRef, useState } from "react"
import { Envelope, Instagram, Link, Person } from "react-bootstrap-icons"
import { Credits } from "./components/credits";

function App() {
  const [activeItem, setActiveItem] = useState<'name' | 'domain' | 'email' | 'ig' | null>(null)

  const [arobaseOffset, setArobaseOffset] = useState(0) ;
  const arobaseRef = useRef<HTMLSpanElement>(null) ;

  useEffect(() => {
    if(!arobaseRef.current) return 

    const { width } = arobaseRef.current.getBoundingClientRect()
    setArobaseOffset(width)
  }, [])

  return (
    <section className="w-full h-dvh flex items-center justify-center">
      <Credits />
      <section
        style={{ boxShadow: '0px 10px 40px rgba(0, 0, 0, .2)' }} 
        className="border-[1px] border-gray-300 w-[90%] md:w-2/3 h-60 md:h-auto aspect-video rounded-3xl relative flex items-center justify-center"
      >
        {/* email container  */}
        <span className="relative pb-3 text-3xl lg:text-7xl">
          <div
            data-title="Email" 
            className={clsx(
              "absolute inset-0 caption",
              activeItem == 'email' ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
            )}
          />

          {/* name container  */}
          <span className="relative">
            <span
              className={activeItem == null ? 'text-black' : activeItem == 'name' ? 'text-blue-600' : activeItem == 'email' ? 'text-blue-600' : 'text-gray-400'}
            >
              Wilfried
            </span>
            <div
              data-title="Name" 
              className={clsx(
                "absolute inset-0 border-2 caption",
                activeItem == 'name' ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              )}
            />
          </span>
          {/* website container  */}
          <span className="relative">
            <div
              data-title="Website" 
              style={{ left: arobaseOffset }}
              className={clsx(
                "absolute inset-0 caption",
                activeItem == 'domain' ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
              )}
            />
            {/* instagram container  */}
            <span className="relative">
              <div
                data-title="Instagram" 
                className={clsx(
                  "absolute inset-0 caption",
                  activeItem == 'ig' ? 'translate-y-0 opacity-100' : '-translate-y-4 opacity-0'
                )}
              />
              <span
                ref={arobaseRef}
                className={activeItem == null ? 'text-black' : activeItem == 'ig' ? 'text-blue-600' : activeItem == 'email' ? 'text-blue-600' : 'text-gray-400' }
              >
                @
              </span>
              <span
                className={activeItem == null ? 'text-black' : activeItem == 'ig' ? 'text-blue-600' : activeItem == 'domain' ? 'text-blue-600' : activeItem == 'email' ? 'text-blue-600' : 'text-gray-400'}
              >
                gmail
              </span>
            </span>
            <span
              className={activeItem == null ? 'text-black' : activeItem == 'domain' ? 'text-blue-600' : activeItem == 'email' ? 'text-blue-600' : 'text-gray-400'}
            >
              .com
            </span>
          </span>
        </span>
        <div className="absolute bottom-4 lg:bottom-10 w-full flex gap-4 justify-center items-center">
          <div 
            onMouseEnter={() => setActiveItem('name')}
            onMouseLeave={() => setActiveItem(null)}
            className={clsx(
              "group duration-150 ease-in-out",
              activeItem == null ? 'opacity-100' : activeItem == 'name' ? 'opacity-100' : 'opacity-30'
            )}
          >
            <Person 
              className="group-hover:-translate-y-2 translate-y-0 duration-150 ease-in-out" 
              size={28} 
            />
          </div>
          <div 
            onMouseEnter={() => setActiveItem('domain')}
            onMouseLeave={() => setActiveItem(null)}
            className={clsx(
              "group duration-150 ease-in-out",
              activeItem == null ? 'opacity-100' : activeItem == 'domain' ? 'opacity-100' : 'opacity-30'
            )}
          >
            <Link
              className="group-hover:-translate-y-2 translate-y-0 duration-150 ease-in-out -rotate-45" 
              size={28} 
            />
          </div>
          <div 
            onMouseEnter={() => setActiveItem('email')}
            onMouseLeave={() => setActiveItem(null)}
            className={clsx(
              "group duration-150 ease-in-out",
              activeItem == null ? 'opacity-100' : activeItem == 'email' ? 'opacity-100' : 'opacity-30'
            )}
          >
            <Envelope 
              className="group-hover:-translate-y-2 translate-y-0 duration-150 ease-in-out" 
              size={28} 
            />
          </div>
          <div 
            onMouseEnter={() => setActiveItem('ig')}
            onMouseLeave={() => setActiveItem(null)}
            className={clsx(
              "group duration-150 ease-in-out",
              activeItem == null ? 'opacity-100' : activeItem == 'ig' ? 'opacity-100' : 'opacity-30'
            )}
          >
            <Instagram 
              className="group-hover:-translate-y-2 translate-y-0 duration-150 ease-in-out" 
              size={28} 
            />
          </div>
        </div>
      </section>
    </section>
  )
}

export default App
