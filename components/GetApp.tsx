import React from 'react'
import Button from './Button'
import Image from 'next/image'

const GetApp = () => {
  return (
    <section className="flexCenter w-full flex-bol" id="downloads">
      <div className="max-container relative flex w-full flex-col justify-between
      gap-32 overflow-hidden px-6 py-12 sm:flex-row sm:gap-12 sm:py-24 lg:px-20
      x1:max-h-[598px] 2x1:rounded-5x1">
        <div className="z-20 flex w-full flex-1 flex-col items-start justify-center gap-4
        x1:max-w-[555px]">
          <h2 className="bold-40 lg:bold-64"> Get our app now! </h2>
          <h4 className="uppercase medium-16 text-secondary">AVAILABLE FOR IOS AND ANDROID</h4>
          <p>
            Stay connected and make your travel planning easier. Download your app now,
            available on both iOS and Android. Access all features you need for a 
            flawless planning experience.
          </p>
          <div className="flex w-full flex-col gap-3 whitespace-nowrap x1:flex-row">
            <Button 
            type='button' 
            title = "App Store"
            icon = "/apple.svg"
            variant="btn_dark_rounded !px-12 !py-4"
            />

            <Button 
            type='button' 
            title = "Play Store"
            icon = "/android.svg"
            variant="btn_secondary_rounded !px-12 !py-4"
            />
          </div>
        </div>
        <div className="flex flex-1 items-center justify-end">
          <Image src="/phones.png" alt="phones" width={550} height={870}/>
        </div>
      </div>
    </section>
  )
}

export default GetApp