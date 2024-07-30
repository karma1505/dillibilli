import React from 'react'

function Map() {
    return (
        <div id='Map'>
            <div className="m-20"><h1 className="text-black text-3xl lg:text-6xl flex justify-center">Find Us On Maps</h1></div>
            <div className="relative w-auto h-96 rounded-2xl shadow m-4 overflow-hidden lg:m-20" >
                <iframe className="absolute top-0 left-0  rounded-2xl shadow  overflow-hidden w-full h-full"
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d951.827175881198!2d77.0319378779448!3d30.89187942247841!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f874f4fe8bc3d%3A0x834979b282f28df5!2sDilli%20House%20Villa%203%20bedroom%20Villa%20with%20Private%20Swimming%20pool%20%26%20Jacuzzi%20in%20Dharampur%20Kasauli!5e0!3m2!1sen!2sin!4v1720737099100!5m2!1sen!2sin"
                >
                </iframe>
            </div>
        </div>
    )
}

export default Map


