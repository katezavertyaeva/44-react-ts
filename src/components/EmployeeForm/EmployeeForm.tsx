import { useFormik } from 'formik'
import * as Yup from 'yup'

import Input from "components/Input/Input";
import { Checkbox, CheckboxContainer, CheckboxLabel, EmployeeFormContainer } from "./styles";
import Button from "components/Button/Button";
import { EMPLOYEE_FORM_FIELDS, EmployeeFormValue } from './types';

function EmployeeForm() {
  const validationSchema = Yup.object().shape({
    [EMPLOYEE_FORM_FIELDS.NAME]: Yup.string()
      .required('Required field')
      .min(2, 'Min 2 symbols')
      .max(20, 'Max 20 symbols'),
    [EMPLOYEE_FORM_FIELDS.SURNAME]: Yup.string()
      .required('Required field')
      .min(2, 'Min 2 symbols')
      .max(130, 'Max 130 symbols'),
    [EMPLOYEE_FORM_FIELDS.JOB_TITLE]: Yup.string()
      .max(30, 'Max 30 symbols'),
    [EMPLOYEE_FORM_FIELDS.SALARY]: Yup.number()
      .typeError('Must be number')
      .required('Required field')
      // .max(5, 'Max 5 symbols')
      .test('check length', 'Max length 5 symbols', (value) => String(value).length <= 5),
    [EMPLOYEE_FORM_FIELDS.AGREE]: Yup.boolean().oneOf([true], 'Accept agreement')
  })

  const formik = useFormik({
    initialValues: {
      [EMPLOYEE_FORM_FIELDS.NAME]: '',
      [EMPLOYEE_FORM_FIELDS.SURNAME]: '',
      [EMPLOYEE_FORM_FIELDS.JOB_TITLE]: '',
      [EMPLOYEE_FORM_FIELDS.SALARY]: '',
      [EMPLOYEE_FORM_FIELDS.AGREE]: false
    } as EmployeeFormValue,
    validationSchema,
    validateOnChange: false,
    validateOnMount: true,
    onSubmit: (values: EmployeeFormValue) => {
      console.table(values)
    }
  })

  console.log(formik)

  return (
    <EmployeeFormContainer onSubmit={formik.handleSubmit}>
      <Input
        name={EMPLOYEE_FORM_FIELDS.NAME}
        label='Name*'
        placeholder='Enter employee name'
        id='employee_name_id'
        value={formik.values[EMPLOYEE_FORM_FIELDS.NAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.NAME]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SURNAME}
        label='Surname*'
        placeholder='Enter employee surname'
        id='employee_surname_id'
        value={formik.values[EMPLOYEE_FORM_FIELDS.SURNAME]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.SURNAME]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.JOB_TITLE}
        label='Job title'
        placeholder='Enter employee job title'
        id='employee_job_id'
        value={formik.values[EMPLOYEE_FORM_FIELDS.JOB_TITLE]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.JOB_TITLE]}
      />
      <Input
        name={EMPLOYEE_FORM_FIELDS.SALARY}
        label='Salary*'
        placeholder='Enter employee salary'
        id='employee_salary_id'
        value={formik.values[EMPLOYEE_FORM_FIELDS.SALARY]}
        onChange={formik.handleChange}
        error={formik.errors[EMPLOYEE_FORM_FIELDS.SALARY]}
      />
      <CheckboxContainer>
        <Checkbox
          type='checkbox'
          id='agree_id'
          name={EMPLOYEE_FORM_FIELDS.AGREE}
          onChange={formik.handleChange}
          checked={formik.values[EMPLOYEE_FORM_FIELDS.AGREE]}
        />
        <CheckboxLabel htmlFor='agree_id'>I Agree</CheckboxLabel>
      </CheckboxContainer>
      <Button name='Create' type='submit' />
    </EmployeeFormContainer>
  )
}

export default EmployeeForm