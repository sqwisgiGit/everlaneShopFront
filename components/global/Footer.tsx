import EmailInput from "../local/EmailInput"

const Footer = () => {
    return(
        <footer className="bg-white-100 pt-[40px] pl-[72px] pr-[72px]">
            <div className="flex">
                <div className="flex w-[194px] flex-col gap-[20px] p-[20px]">
                    <p className="text300"><b>Acount</b></p>
                    <div className="flex flex-col text300 gap-[10px] text-grey-300">
                        <p>Log In</p>
                        <p>Sign Up</p>
                        <p>Redeem a Gift Card</p>
                    </div>
                </div>
                <div className="flex w-[194px] flex-col gap-[20px] p-[20px]">
                    <p className="text300"><b>Company</b></p>
                    <div className="flex flex-col text300 gap-[10px] text-grey-300">
                        <p>About</p>
                        <p>Environmental Initiatives</p>
                        <p>Factories</p>
                        <p>DEI</p>
                        <p>Careers</p>
                        <p>International</p>
                        <p>Accessibility</p>
                    </div>
                </div>
                <div className="flex w-[194px] flex-col gap-[20px] p-[20px]">
                    <p className="text300"><b>Get Help</b></p>
                    <div className="flex flex-col text300 gap-[10px] text-grey-300">
                        <p>Help Center</p>
                        <p>Return Policy</p>
                        <p>Shipping Info</p>
                        <p>Bulk Orders</p>
                    </div>
                </div>
                <div className="flex w-[194px] flex-col gap-[20px] p-[20px]">
                    <p className="text300"><b>Connect</b></p>
                    <div className="flex flex-col text300 gap-[10px] text-grey-300">
                        <p>Facebook</p>
                        <p>Instagram</p>
                        <p>Twitter</p>
                        <p>Affiliates</p>
                        <p>Out Stores</p>
                    </div>
                </div>
                <div className="w-[480px] h-max p-[20px]">
                    <EmailInput/>
                </div>
            </div>
            <div className="text200 text-grey-300 w-full flex flex-col justify-center items-center gap-[16px] text-center p-[16px]">
                <div className="flex justify-center gap-[24px]">
                    <p>Privacy Policy</p>
                    <p>Terms of Service</p>
                    <p>Do Not Sell or Share My Personal Information</p>
                    <p>CS Supply Chain Transparency</p>
                    <p>Vendor Code of Conduct</p>
                    <p>Sitemap Pages</p>
                    <p>Sitemap Products</p>
                </div>
                <div>
                    <p>© 2023 All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer
