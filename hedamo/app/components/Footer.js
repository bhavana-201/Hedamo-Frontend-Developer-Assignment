export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center bg-[#282828] text-white p-10">
            <div className="flex flex-col text-center gap-2">
                <p className="text-lg font-medium">&copy; {new Date().getFullYear()} Hedamo. All rights reserved.</p>
                <div className="flex justify-center gap-4 text-md font-light ">
                    <a className="hover:underline hover:text-[#f1cf69]" href="#">Privacy Policy</a> | 
                    <a className="hover:underline hover:text-[#f1cf69]" href="#">Terms of Service</a> | 
                    <a className="hover:underline hover:text-[#f1cf69]" href="#">Contact Us</a>
                </div>
            </div>
        </footer>
    );
}