import React, { useState } from "react"
import { LockClosedIcon } from "@heroicons/react/solid"
export const LoginScreen: React.FC = () => {
	const [loginInfo, setLoginInfo] = useState({
		email: "",
		password: "",
	})

	const handleSubmit = () => {
		mp.trigger("cMisc-CallServerEvent", "sLogin-Login", JSON.stringify(loginInfo))
	}
	return (
		<div className="min-h-screen flex items-center justify-center bg-transparent py-12 px-4 sm:px-6 lg:px-8">
			<div className="max-w-md w-full space-y-8">
				<div>
					<h2 className="mt-6 text-center text-3xl font-extrabold text-orange-500">
						Sign in to your account
					</h2>
				</div>
				<form className="mt-8 space-y-6" onSubmit={handleSubmit}>
					<input type="hidden" name="remember" defaultValue="true" />
					<div className="rounded-md shadow-sm -space-y-px">
						<div>
							<label htmlFor="email-address" className="sr-only">
								Email address
							</label>
							<input
								id="email-address"
								name="email"
								type="email"
								autoComplete="email"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
								placeholder="Email address"
								onChange={e =>
									setLoginInfo({
										...loginInfo,
										email: e.target.value,
									})
								}
							/>
						</div>
						<div>
							<label htmlFor="password" className="sr-only">
								Password
							</label>
							<input
								id="password"
								name="password"
								type="password"
								autoComplete="current-password"
								required
								className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-orange-500 focus:border-orange-500 focus:z-10 sm:text-sm"
								placeholder="Password"
								onChange={e =>
									setLoginInfo({
										...loginInfo,
										password: e.target.value,
									})
								}
							/>
						</div>
					</div>

					<div className="flex items-center justify-between">
						<div className="flex items-center">
							<input
								id="remember-me"
								name="remember-me"
								type="checkbox"
								className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-300 rounded"
							/>
							<label htmlFor="remember-me" className="ml-2 block text-sm text-white">
								Remember me
							</label>
						</div>

						<div className="text-sm">
							<a href="#" className="font-medium text-orange-500 hover:text-orange-400">
								Forgot your password?
							</a>
						</div>
					</div>

					<div>
						<button
							type="submit"
							className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-orange-500 hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
						>
							<span className="absolute left-0 inset-y-0 flex items-center pl-3">
								<LockClosedIcon
									className="h-5 w-5 text-white group-hover:text-white"
									aria-hidden="true"
								/>
							</span>
							Sign in
						</button>
					</div>
				</form>
			</div>
		</div>
	)
}
