import { useFormik } from "formik";
import { object, string, boolean, ref } from "yup";
import { FaArrowRight, FaGoogle, FaApple, FaFacebook } from "react-icons/fa";

const RegisterSchema = object({
	firstName: string()
		.min(2, "Name must be at least 2 characters")
		.max(100, "Name cannot exceed 100 characters")
		.required("Please enter your first name"),
	lastName: string()
		.max(100, "Last name cannot exceed 100 characters")
		.required("Please enter your last name"),
	email: string()
		.email("Please enter a valid email")
		.required("Please enter your email"),
	password: string()
		.min(8, "Password must be at least 8 characters")
		.required("Please enter the password")
		.matches(/[a-z]/, "Password must contain at least 1 lower case letter")
		.matches(/[A-Z]/, "Password must contain at least 1 upper case letter")
		.matches(/[0-9]/, "Password must contain at least 1 number")
		.matches(/[^\w]/, "Password must contain at least 1 special character"),
	tnc: boolean().oneOf(
		[true],
		"You must accept the terms and conditions to login"
	),
});

const Register = () => {
	const {
		values,
		errors,
		touched,
		isValid,
		dirty,
		handleBlur,
		handleChange,
		handleSubmit,
	} = useFormik({
		initialValues: {
			firstName: "",
			lastName: "",
			email: "",
			password: "",
			tnc: true,
			loggedIn: true,
		},
		validationSchema: RegisterSchema,
		onSubmit: (values) => {
			console.log("Form data", values);
		},
	});
	return (
		<div className="flex h-max min-h-screen">
			<div className="bg-login bg-cover bg-no-repeat w-1/2 flex justify-center">
				<img className=" my-20 h-16" src="logo.svg" alt="logo" />
			</div>
			<div className="m-20 w-1/2 px-10">
				<div className="flex flex-col">
					<h1 className="text-4xl font-Rubik">Register</h1>
					<p className="font-OpenSans text-lg mt-2">Sign up with</p>
				</div>
				<div className="flex justify-between my-6">
					<div className="border border-black rounded-xl">
						<FaGoogle className=" my-4 mx-14 w-8 h-8" />
					</div>
					<div className="border border-black rounded-xl">
						<FaApple className=" my-4 mx-14 w-8 h-8" />
					</div>
					<div className="border border-black rounded-xl">
						<FaFacebook className=" my-4 mx-14 w-8 h-8" />
					</div>
				</div>
				<p className="font-OpenSans text-lg">OR</p>
				<form onSubmit={handleSubmit} className="flex flex-col mt-6">
					<h2 className="font-Rubik text-2xl">Your Name</h2>
					<div className="relative">
						<input
							className="mt-4 w-full mb-2 border border-black px-4 py-3 rounded-md font-OpenSans"
							type="text"
							name="firstName"
							placeholder="First Name*"
							value={values.firstName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.firstName && touched.firstName ? (
							<p className="absolute text-red-700 bottom-[-15px]">
								{errors.firstName}
							</p>
						) : null}
					</div>
					<div className="relative">
						<input
							className="mt-4 w-full mb-2 border border-black px-4 py-3 rounded-md font-OpenSans"
							type="text"
							name="lastName"
							placeholder="Last Name*"
							value={values.lastName}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.lastName && touched.lastName ? (
							<p className="absolute text-red-700 bottom-[-15px]">
								{errors.lastName}
							</p>
						) : null}
					</div>

					<h2 className="font-Rubik text-2xl mt-6">Login Details</h2>
					<div className="relative">
						<input
							className="mt-4 mb-2 w-full border border-black px-4 py-3 rounded-md font-OpenSans"
							type="email"
							name="email"
							placeholder="Email*"
							value={values.email}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.email && touched.email ? (
							<p className="absolute text-red-700 bottom-[-15px]">
								{errors.email}
							</p>
						) : null}
					</div>
					<div className="relative">
						<input
							className="mt-4 w-full border border-black px-4 py-3 rounded-md font-OpenSans"
							type="password"
							name="password"
							placeholder="Password*"
							value={values.password}
							onChange={handleChange}
							onBlur={handleBlur}
						/>
						{errors.password && touched.password ? (
							<p className="absolute text-red-700 bottom-[-22px]">
								{errors.password}
							</p>
						) : null}
					</div>
					<div className="relative mt-10">
						<input
							type="checkbox"
							name="tnc"
							checked={values.tnc}
							onChange={handleChange}
							className="accent-black"
						/>
						<label
							htmlFor="tnc"
							className="text-lg ml-2 font-OpenSansBold">
							By clicking on 'REGISTER' you agree to our website{" "}
							<span>KicksClub Terms & Conditions</span>, Kicks{" "}
							<span>Privacy Notice</span> and{" "}
							<span>Terms & Conditions</span>.
						</label>
						{errors.tnc ? (
							<p className="absolute text-red-700 bottom-[-15px]">
								{errors.tnc}
							</p>
						) : null}
					</div>
					<div className="mt-3">
						<input
							type="checkbox"
							name="loggedIn"
							checked={values.loggedIn}
							onChange={handleChange}
							className="accent-black"
						/>
						<label
							htmlFor="loggedIn"
							className="text-lg ml-2 font-OpenSansBold">
							Keep me logged in - applies to all log in options
							below. <span>More info</span>
						</label>
					</div>
					<button
						disabled={!(isValid && dirty)}
						className=" bg-black text-white py-2 px-4 rounded-md mt-5 font-Rubik flex justify-between items-center text-md disabled:bg-gray-500 hover:bg-gray-900">
						REGISTER
						<FaArrowRight />
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
