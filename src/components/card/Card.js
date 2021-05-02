import React from 'react';

const Card = props => {
  return (
        <div className={`relative bg-indigo-900 rounded-2xl w-64 my-4 shadow-xl ${props.cardStyle}`}>

            <div className="pt-5">
                <div className="px-6 flex space-x-2 text-white text-sm">
                    <p className="font-extrabold text-xl">Card</p>
                </div>
                <div className="px-6 flex space-x-2 my-3">
                    {
                        props.body?props.body:<p className="text-gray-400 text-sm">FOSTI merupakan unit kegiatan mahasiswa Fakultas Komunikasi dan Informatika Universitas Muhammadiyah Surakarta</p>
                    }
                </div>
                <div className={`px-6 transition rounded-b-2xl duration-500 ease-in-out hover:text-white flex space-x-2 text-gray-500 text-xs mt-3 ${props.footerStyle}`}>
                    <div className="py-3">
                    {
                        props.footer?props.footer:<a href="#">Selengkapnya</a>
                    }
                    </div>
                </div>
            </div>
        </div>
  );
}
export default Card;