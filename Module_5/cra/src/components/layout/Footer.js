import React from "react";
function Footer() {
    return (
        <footer className="bg-secondary py-2">
            <p className="text-center text-white">&copy; {new Date().getFullYear()} CodeGym Hue, Inc</p>
        </footer>
    )
}

export default Footer;