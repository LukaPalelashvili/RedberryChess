import { CustomSelect } from '../custom-select/CustomSelect'
import { CustomSelectV2 } from '../custom-select-v2/CustomSelectV2'
import { useEffect, useMemo } from 'react'
import { useGrandMastersService } from '../../services/useGrandMastersService'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { ProgressSteps } from '../progress-steps/ProgressSteps'
import { ActionButtons } from '../action-buttons/ActionButtons'
import * as _ from 'lodash'
import { toast, ToastContainer } from 'react-toastify'
import { ToastrError } from '../toastr-error/ToastrError'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const ExperienceSchema = Yup.object().shape({
	experience_level: Yup.string().required('Level of knowledge is required'),
	character_id: Yup.number().required('Character is required'),
	already_participated: Yup.boolean().required(
		'Please specify if you have participated in a tournament before',
	),
})

export const ChessExperience = () => {
	const navigate = useNavigate()
	const { grandMasters } = useGrandMastersService()

	const formik = useFormik({
		initialValues: {
			experience_level: '',
			character_id: '',
			already_participated: '',
		},
		validationSchema: ExperienceSchema,
	})

	const handleFormSubmit = () => {
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
		formik.setTouched({ experience_level: true, character_id: true, already_participated: true })
		if (formik.isValid) {
			submitData()
		}
	}

	const submitData = () => {
		axios
			.post('https://chess-tournament-api.devtest.ge/api/register', {
				...formik.values,
				already_participated: formik.values.already_participated === 'true',
			})
			.then(res => {
				if (res.status === 201) {
					clearLocalStorage()
					navigate('/success')
				}
			})
	}

	const clearLocalStorage = () => {
		localStorage.removeItem('signupForm')
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
			<div className="flex gap-1 items-center border-b border-gray-800 h-20">
				<span className="font-sans text-base pl-12 capitalize">
					First step is done, continue to finish onboarding
				</span>
			</div>
			<div className="pl-12">
				<ProgressSteps step={2} isValid={formik.isValid} />
				<div className="flex flex-col gap-5 mt-32">
					<h1 className="text-4xl">Chess experience</h1>
					<p className="text-sm text-gray-500 capitalize">These are basic information fields</p>
					<form className="flex flex-col gap-5 w-3/4 mt-16" onSubmit={formik.handleSubmit}>
						<div className="flex justify-between gap-8">
							<CustomSelect
								error={formik.touched.experience_level && formik.errors.experience_level}
								setValue={formik.setFieldValue}
								selectedValue={formik.values.experience_level}
							/>
							<CustomSelectV2
								error={formik.touched.character_id && formik.errors.character_id}
								setValue={formik.setFieldValue}
								data={grandMasters}
								selectedValue={
									grandMasters.length &&
									grandMasters.find(grandMaster => grandMaster.id === formik.values.character_id)
										?.name
								}
							/>
						</div>
						<div className="mt-20">
							<span
								className={`text-black text-lg ${
									formik.touched.already_participated &&
									formik.errors.already_participated &&
									'text-red-700'
								}`}
							>
								Have your participated in the Redberry Championship?
							</span>
							<span className="text-rose-700 ml-1">*</span>
							<div className="mt-5 flex gap-4">
								<div className="flex gap-1">
									<input
										type="radio"
										id="yes"
										name="already_participated"
										value="true"
										checked={formik.values.already_participated === 'true'}
										onChange={e => {
											formik.handleChange(e)
											handleInputChange(e, 'already_participated')
										}}
									/>
									<label
										className={`text-black ${
											formik.touched.already_participated &&
											formik.errors.already_participated &&
											'text-red-700'
										}`}
										htmlFor="yes"
									>
										Yes
									</label>
									<span className="checkmark"></span>
								</div>
								<div className="flex gap-1">
									<input
										className=""
										type="radio"
										name="already_participated"
										id="false"
										value="false"
										checked={formik.values.already_participated === 'false'}
										onChange={e => {
											formik.handleChange(e)
											handleInputChange(e, 'already_participated')
										}}
									/>
									<label
										className={`text-black ${
											formik.touched.already_participated &&
											formik.errors.already_participated &&
											'text-red-700'
										}`}
										htmlFor="false"
									>
										No
									</label>
								</div>
							</div>
						</div>
					</form>
					<ActionButtons onBack={() => navigate('/personal-info')} onNext={handleFormSubmit} />
					<ToastContainer />
				</div>
			</div>
		</div>
	)
}
