import React from 'react'

function Hero() {
  return (
    <div
      className={
        'hero hidden md:block container mx-auto px-5 md:px-6 relative xl:w-[1072] mt-4 h-[450] bg-amber-500'
      }
    >
      <div className="absolute top-1/2 left-4/7 -translate-y-1/2 -translate-x-4/7 ml-5">
        <h1
          className={
            'md:text-3xl lg:text-5xl font-bold whitespace-nowrap backdrop-blur-xl py-5 px-3 lg:backdrop-blur-none'
          }
        >
          Raising the Lantern&apos;s Wick High
        </h1>
        <div className={'px-3 lg:py-5 my-8'}>
          <p
            className={
              'text-xl lg:text-2xl text-white font-bold mb-3 backdrop-blur-lg lg:backdrop-blur-none'
            }
          >
            A Survey of Myanmar&apos;s Socioeconomic Crisis and Public
            Resilience
          </p>
          <p
            className={
              'w-fit text-lg font-medium backdrop-blur-lg text-white xl:text-black lg:backdrop-blur-none'
            }
          >
            November 2025
          </p>
        </div>
      </div>
    </div>
  )
}
export default React.memo(Hero)
