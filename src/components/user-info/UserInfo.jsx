import { useEffect, useMemo } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import * as _ from 'lodash'
import moment from 'moment'
import { useNavigate } from 'react-router-dom'
import '../../assets/css/toastify.css'
import { ReactComponent as SuccessIcon } from '../../assets/img/svg/checkmark.svg'
import { SectionTitle } from '../section-title/SectionTitle'
import { ProgressSteps } from '../progress-steps/ProgressSteps'
import { ActionButtons } from '../action-buttons/ActionButtons'
import { ToastrError } from '../toastr-error/ToastrError'

const PersonalInfoSchema = Yup.object().shape({
	name: Yup.string()
		.min(2, 'Name must be at least 2 characters long')
		.max(50, 'Name can not be longer than 50 characters')
		.required('Name is required'),
	email: Yup.string()
		.email('Invalid email')
		.matches(/^[\w-+%]+@(redberry.ge)/, 'Email should end with @redberry.ge')
		.required('Email is required'),
	phone: Yup.string()
		.min(9, 'Phone must contain 9 characters')
		.max(9, 'Phone must contain 9 characters')
		.required('Phone number is required'),
	date_of_birth: Yup.string()
		.required()
		.test('DOB', 'You must be at least 16 years old', value => {
			return moment().diff(moment(value), 'years') >= 16
		})
		.test('DOB', 'You can not be older than 100 years old', value => {
			return moment().diff(moment(value), 'years') <= 100
		}),
})

export const UserInfo = () => {
	const navigate = useNavigate()
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			date_of_birth: '',
		},
		validationSchema: PersonalInfoSchema,
	})

	const handleNextClick = () => {
		_.forEach(formik.errors, (val, key) =>
			toast(<ToastrError title={key} description={val} />, {
				position: 'top-right',
				autoClose: 4000,
				hideProgressBar: true,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			}),
		)
		formik.submitForm()
		formik.setTouched({ name: true, email: true, phone: true, date_of_birth: true })
		if (formik.isValid) {
			navigate('/chess-experience')
		}
	}

	const handleInputChange = (e, field) => {
		const form = localStorage.getItem('signupForm')
		localStorage.setItem(
			'signupForm',
			JSON.stringify({ ...JSON.parse(form), [field]: e.target.value }),
		)
	}

	const savedForm = useMemo(() => {
		const form = localStorage.getItem('signupForm')
		return form ? JSON.parse(form) : {}
	}, [])

	const { setValues } = formik

	useEffect(() => {
		setValues(savedForm)
	}, [setValues, savedForm])

	return (
		<div className="flex flex-col w-1/2">
			<SectionTitle title="Start Creating Your Account" />
			<div className="pl-12">
				<ProgressSteps step={1} isValid={formik.isValid} />
				<div className="flex flex-col gap-5 mt-32">
					<h1 className="text-4xl">Personal Information</h1>
					<p className="text-sm text-gray-500 capitalize">These are basic information fields</p>
					<form className="flex flex-col gap-5 w-3/4 mt-16" onSubmit={formik.handleSubmit}>
						<fieldset
							className={`relative name-field ${formik.values.name && "after:content-['']"}`}
						>
							<input
								onChange={e => {
									formik.handleChange(e)
									handleInputChange(e, 'name')
								}}
								onBlur={formik.handleBlur}
								value={formik.values.name}
								name="name"
								type="text"
								placeholder="Name"
								className={`w-full h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
									formik.touched.name &&
									formik.errors.name &&
									'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
								}`}
							/>
							{formik.values.name && !formik.errors.name && (
								<SuccessIcon className="absolute top-[33%] right-2" />
							)}
						</fieldset>
						<fieldset
							className={`relative email-field ${formik.values.email && "after:content-['']"}`}
						>
							<input
								onChange={e => {
									formik.handleChange(e)
									handleInputChange(e, 'email')
								}}
								value={formik.values.email}
								onBlur={formik.handleBlur}
								name="email"
								type="email"
								required
								placeholder="Email address"
								className={`w-full h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
									formik.touched.email &&
									formik.errors.email &&
									'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
								}`}
							/>
							{formik.values.email && !formik.errors.email && (
								<SuccessIcon className="absolute top-[33%] right-2" />
							)}
						</fieldset>
						<fieldset
							className={`relative phone-field ${formik.values.phone && "after:content-['']"}`}
						>
							<input
								onChange={e => {
									formik.handleChange(e)
									handleInputChange(e, 'phone')
								}}
								onBlur={formik.handleBlur}
								value={formik.values.phone}
								name="phone"
								placeholder="Phone number"
								className={`w-full h-12 pl-4 pr-2 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
									formik.touched.phone &&
									formik.errors.phone &&
									'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
								}`}
								type="number"
							/>
							{formik.values.phone && !formik.errors.phone && (
								<SuccessIcon className="absolute top-[33%] right-2" />
							)}
						</fieldset>
						<fieldset
							className={`relative date_of_birth-field ${
								formik.values.date_of_birth && "after:content-['']"
							}`}
						>
							<input
								onChange={e => {
									formik.handleChange(e)
									handleInputChange(e, 'date_of_birth')
								}}
								value={formik.values.date_of_birth}
								name="date_of_birth"
								placeholder="Date of birth"
								className={`w-full h-12 pl-4 pr-2 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
									formik.touched.date_of_birth &&
									formik.errors.date_of_birth &&
									'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
								}`}
								type="text"
								onFocus={e => (e.target.type = 'date')}
								onBlur={e => (!e.target.value ? (e.target.type = 'text') : null)}
							/>
							{formik.values.date_of_birth && !formik.errors.date_of_birth && (
								<SuccessIcon className="absolute top-[33%] right-2" />
							)}
						</fieldset>
					</form>
					<ActionButtons onBack={() => navigate('/')} onNext={handleNextClick} />
					<ToastContainer />
				</div>
			</div>
		</div>
	)
}
