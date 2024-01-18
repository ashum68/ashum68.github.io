import React from 'react'

const Navbar = () => {
    return (
        <div class="bg-white px-4 py-2 rounded-2xl h-13 fixed top-8 left-1/2 transform -translate-x-1/2 shadow-lg align-top">
            <nav class="flex space-x-5 font-bold">
                <a href="#" class="text-black no-underline">Home</a>
                <a href="#" class="text-black no-underline">About</a>
                <a href="#" class="text-black no-underline">Projects</a>
                <a href="#" class="text-black no-underline">Connect</a>
            </nav>
        </div>
    )
}

export default Navbar
