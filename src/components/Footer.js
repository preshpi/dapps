import React from 'react'
import { BsTwitter } from 'react-icons/bs';
import { AiOutlineInstagram } from 'react-icons/ai';
import { FaFacebookSquare } from 'react-icons/fa';
import { FaDiscord } from 'react-icons/fa';
import { SiTelegram } from 'react-icons/si';
import { BsYoutube } from 'react-icons/bs';
import { TbWorld } from 'react-icons/tb';

function Footer() {
  return (
    <div name='contact' className="relative lg:h-full py-8">
      <div className="grid place-items-center">
                        {/* Background image */}
          <img src={require('../images/footer.png')} className="bottom w-full  h-full object-cover absolute"/>

          <div className="text-center grid place-items-center  text-white relative bottom">
              <div className="flex mt-16">
                {/* Logo image */}
              <img src={require('../images/logo.png')} className="lg:w-32 mb-8 w-44"/>
              </div>

              <p className="lg:text-xl font-light tracking-wider lg:w-[384px] mx-4 w-72 text-x">One stop destination for all Blockchain Solutions.</p>

                            {/* Social icons */}
              <div className="flex gap-3 text-3xl mx-2 lg:mx-8 mt-2 mb-5">
                  <a href='https://www.facebook.com/Lodicoins' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon icon" ><FaFacebookSquare/></a>
                  <a href='https://www.twitter.com/Lodicoins' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><BsTwitter/></a>
                  <a href='https://discord.com/invite/MV4MDjkPcS' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><FaDiscord/></a>
                  <a href='https://www.instagram.com/Lodicoins' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><AiOutlineInstagram/></a>
                  <a href='https://www.youtube.com/channel/UCYX5Hh7rMaLGsMuUO_X3jtg' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><BsYoutube/></a>
                  <a href='https://t.me/LODICOINSARMIESOFFICIAL' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><SiTelegram/></a>
                  <a href='https://lodicoins.com/' target="_blank" className="hover:text-white hover:opacity-10 cursor-pointer icon"><TbWorld/></a>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Footer