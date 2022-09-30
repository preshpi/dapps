import React from 'react'

function Main() {
  return (
    <div className="py-3  overflow-hidden">
                                {/* background image */}
      <img src={require('../images/linebg.png')} className="w-full h-full object-cover absolute rounded-lg"/>
        <div className="grid lg:grid-cols-2 place-content-center m-5">
                                {/* Text part */}
             <div className="md:items-start lg:text-start text-center m-8 w-[400px] md:w-[500px] place-items-center">
                <p className="tracking-wide text-white text-lg font-semibold m-4 block dark:text-white lg:leading-8 leading-7" data-aos="fade-left">
                SIFU INU, WORLDS MOST AIRDROPS WITH THE HIGHEST APY! <br/>
                LSP or Lodicoin Staking Protocol is a decentralize revolutionary approach to a financial asset, that makes staking more profitable and provides $LODI token holders with a high realistic crypto return. A decentralized coin on the Binance Smart Chain that is backed by the $LODICOIN Bank Reserve or BBR and is controlled by algorithms through APY, automatic staking, and compounding in your wallet, and multi-chain smart contracts providing the building blocks for the next generation of Defi development.
                </p>     

             </div>
                                {/* Form part */}
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
                                <div className="bg-[#0f172a] py-5 lg:w-[500px] h-[520px] rounded-[20px] shadow-[20px] ">
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

                                                                {/* Form input and button */}
                                        <div className="text-white gap-5 justify-between m-5 font-[roboto]">
                                        <select class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                                            <option value="disabled">Select</option>
                                            <option>Option 1</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                            <option>Option 2</option>
                                        </select>
                                        </div>

                                        <div className="text-white gap-5 justify-between m-5 font-[roboto]">                           
                                        <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Amount"/>
                                        </div>

                                        <div className="text-white  justify-center text-center m-5 font-[roboto]">
                                        <button class="bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-9 border-b-4 border-blue-700 hover:border-blue-500 rounded-full">
                                        STAKE BUTTON
                                        </button>     
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