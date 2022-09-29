import React from 'react'

function Main() {
  return (
    <div className="py-3  overflow-hidden">
      <img src={require('../images/linebg.png')} className="w-full h-full object-cover absolute rounded-lg"/>
        <div className="grid lg:grid-cols-2 place-content-center m-5">
             <div className="md:items-start lg:text-start text-center m-8 w-[400px] md:w-[500px] place-items-center">
                <p className="tracking-wide text-white text-lg font-semibold m-4 block dark:text-white lg:leading-8 leading-7" data-aos="fade-left">
                SIFU INU, WORLDS MOST AIRDROPS WITH THE HIGHEST APY! <br/>
                LSP or Lodicoin Staking Protocol is a decentralize revolutionary approach to a financial asset, that makes staking more profitable and provides $LODI token holders with a high realistic crypto return. A decentralized coin on the Binance Smart Chain that is backed by the $LODICOIN Bank Reserve or BBR and is controlled by algorithms through APY, automatic staking, and compounding in your wallet, and multi-chain smart contracts providing the building blocks for the next generation of Defi development.
                </p>     

            </div>

             <div className="items-center grid place-content-center" data-aos="fade-right">
                <div className="text-white relative opacity-80">
                 
                  
                    <div className="relative items-center justify-center bg-[#335fd9] rounded-lg shadow-lg h-[700px]">
                    <div className="m-5 text-xl text-start">
                        <h1 className="text-center font-bold text-3xl">STAKE TOKEN</h1>
                                <h1 className="font-[nunito] mt-3">SIFU INU</h1>
                                <p className="font-[nunito] mt-2">PRICE (SIFU INU) = 0.00000572 BNB</p>
                            </div>
                        <div className="grid place-items-center ">
                         
                            <div className="grid lg:w-[700px] place-items-center w-[250px]">
                            <div className="bg-[#0f172a] py-5 lg:w-[500px] h-[500px] rounded-[20px] shadow-[20px] ">
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Rewards</p>
                                <p className="text-right text-[#FF1700]">Paid in Bsj</p>
                            </div>
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Daily Rewards</p>
                                <p className="text-right text-[#FF1700]">1.15%</p>
                            </div>
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Min.Stake</p>
                                <p className="text-right text-[#FF1700]">10,000 SIFU</p>
                            </div>
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Max. Stake</p>
                                <p className="text-right text-[#FF1700]">100,000,000 SIFU</p>
                            </div>
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Staking Period</p>
                                <p className="text-right text-[#FF1700]">30 Days</p>
                            </div>
                            <div className="flex text-white gap-5 justify-between m-5 font-[roboto]">
                                <p>Staking Type</p>
                                <p className="text-right text-[#FF1700]">Lock</p>
                            </div>
                            <div className="text-white gap-5 justify-between m-5 font-[roboto]">
                            <h3 className="m-3 font-bold font-[montserrat]">STAKE AMOUNT</h3>
                            <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="number"/>    
                            </div>

                            
                            </div>    
                            </div>
                                      
                        </div>
                  
                    </div>
                </div>
            </div> 
        </div>
    </div>
  )
}

export default Main