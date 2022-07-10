import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ToastContainer, toast } from 'react-toastify'
import * as _ from 'lodash'
import moment from 'moment'
import '../../assets/css/toastify.css'
import { PageContext } from '../../index'
import { SectionTitle } from '../section-title/SectionTitle'
import { ProgressSteps } from '../progress-steps/ProgressSteps'
import { ActionButtons } from '../action-buttons/ActionButtons'
import { ToastrError } from '../toastr-error/ToastrError'

const PersonalInfoSchema = Yup.object().shape({
	name: Yup.string().min(2).max(50).required(),
	email: Yup.string().email('Invalid email').required(),
	phone: Yup.string().min(9).max(9).required(),
	dateOfBirth: Yup.string()
		.required('DOB is Required')
		.test('DOB', 'Please choose a valid date of birth', value => {
			return moment().diff(moment(value), 'years') >= 15
		}),
})

export const UserInfo = () => {
	const { changePage } = useContext(PageContext)
	const formik = useFormik({
		initialValues: {
			name: '',
			email: '',
			phone: '',
			dateOfBirth: '',
		},
		validationSchema: PersonalInfoSchema,
		onSubmit: values => {
			alert(JSON.stringify(values, null, 2))
		},
	})

	const handleNextClick = () => {
		console.log(formik.values)
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
		formik.submitForm().then(r => console.log(r))
		//changePage('chess-experience')
	}

	const handleInputChange = field => {
		const form = localStorage.getItem('signupForm')
		localStorage.setItem(
			'signupForm',
			JSON.stringify({ ...JSON.parse(form), [field]: formik.values?.[field] }),
		)
	}

	return (
		<div className="flex flex-col w-1/2">
			<SectionTitle title="Start Creating Your Account" />
			<div className="pl-12">
				<ProgressSteps step={1} />
				<div className="flex flex-col gap-5 mt-32">
					<h1 className="text-4xl">Personal Information</h1>
					<p className="text-sm text-gray-500 capitalize">These are basic information fields</p>
					<form className="flex flex-col gap-5 w-3/4 mt-16" onSubmit={formik.handleSubmit}>
						<input
							onChange={e => {
								formik.handleChange(e)
								handleInputChange('name')
							}}
							value={formik.values.name}
							name="name"
							type="text"
							placeholder="Name"
							className={`h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
								formik.touched.name &&
								formik.errors.name &&
								'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
							}`}
						/>
						<input
							onChange={e => {
								formik.handleChange(e)
								handleInputChange('email')
							}}
							value={formik.values.email}
							name="email"
							type="email"
							placeholder="Email address"
							className={`h-12 pl-4 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
								formik.touched.email &&
								formik.errors.email &&
								'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
							}`}
						/>
						<input
							onChange={e => {
								formik.handleChange(e)
								handleInputChange('phone')
							}}
							value={formik.values.phone}
							name="phone"
							placeholder="Phone number"
							className={`h-12 pl-4 pr-2 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
								formik.touched.phone &&
								formik.errors.phone &&
								'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
							}`}
							type="number"
						/>
						<input
							onChange={e => {
								formik.handleChange(e)
								handleInputChange('dateOfBirth')
							}}
							value={formik.values.dateOfBirth}
							name="dateOfBirth"
							placeholder="Date of birth"
							className={`h-12 pl-4 pr-2 border-b border-dotted text-black text-xl placeholder:text-black hover:bg-gray-300 focus:outline-0 focus:bg-gray-200 border-gray-500 ${
								formik.touched.dateOfBirth &&
								formik.errors.dateOfBirth &&
								'bg-red-100 text-red-700 placeholder:text-red-700 hover:bg-red-100 focus:bg-red-100'
							}`}
							type="text"
							onFocus={e => (e.target.type = 'date')}
							onBlur={e => (!e.target.value ? (e.target.type = 'text') : null)}
						/>
					</form>
					<ActionButtons onBack={() => changePage('home')} onNext={handleNextClick} />
					<ToastContainer>
						<div>hiiii</div>
					</ToastContainer>
				</div>
			</div>
		</div>
	)
}
