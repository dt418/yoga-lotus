import { Link } from "react-router-dom";

const Footer = () => {
	return (
		<div className="w-[1297px] h-[185.992px] relative z-[142] mt-[73.008px] mr-0 mb-0 ml-[60px]">
			<div className="w-[15.74%] h-[63.31%] bg-[url(../assets/images/3a99dcf2-c82c-41b4-9bbf-ca266d92ef95.png)] bg-[length:100%_100%] bg-no-repeat absolute top-0 left-[0.23%] z-[81]" />
			<div className="footer-sections flex justify-between items-start mt-[8px]">
				<div className="visit-section">
					<span className="block font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] mb-4">
						PAY US A VISIT
					</span>
					<span className="block font-['SUSE'] text-[14px] text-[#fff]">
						432 Evergreen Terrace
						<br />
						Springfield, IL 62704
					</span>
				</div>
				<div className="links-section">
					<span className="block font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] mb-4">
						QUICK LINKS
					</span>
					<div className="flex flex-col space-y-2">
						<Link
							to="/about"
							className="font-['SUSE'] text-[14px] text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							About Us
						</Link>
						<Link
							to="/classes"
							className="font-['SUSE'] text-[14px] text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Classes
						</Link>
						<Link
							to="/schedule"
							className="font-['SUSE'] text-[14px] text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Schedule
						</Link>
						<Link
							to="/contact"
							className="font-['SUSE'] text-[14px] text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Contact
						</Link>
					</div>
				</div>
				<div className="social-section">
					<span className="block font-['Gotham_Black'] text-[20px] font-medium leading-[22px] text-[#fff] mb-4">
						FOLLOW US
					</span>
					<div className="flex space-x-4">
						<a
							href="https://instagram.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Instagram
						</a>
						<a
							href="https://facebook.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Facebook
						</a>
						<a
							href="https://twitter.com"
							target="_blank"
							rel="noopener noreferrer"
							className="text-[#fff] hover:text-[#c7a78a] transition-colors"
						>
							Twitter
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Footer;
