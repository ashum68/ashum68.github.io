import React from 'react'

const Navbar = () => {
    return (
        <div class="bg-white px-4 py-2 rounded-2xl h-13 fixed top-8 left-1/2 transform -translate-x-1/2 shadow-lg align-top">
            <nav class="flex space-x-5 font-bold">
                <a href="/#home" class="text-black no-underline">Home</a>
                <a href="/#about" class="text-black no-underline">About</a>
                <a href="/#projects" class="text-black no-underline">Projects</a>
                <a href="/#experience" class="text-black no-underline">Experience</a>
                <a href="https://drive.google.com/file/d/1UfIQ-sikzZGq--JFyjJGExtVS2Idx4J7/view?usp=sharing" target="_blank" rel="noopener noreferrer" class="text-black no-underline">Résumé</a>
            </nav>
        </div>
    )
}

export default Navbar
